import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import { Reveal } from './Reveal'
import { EMAILJS } from '../config/emailjs'
import { companyInfo } from '../content/siteData'

const FormShell = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`

const Intro = styled.div`
  margin-bottom: 1.75rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.7;
  }
`

const Note = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.inkMuted};
`

const Form = styled.form`
  display: grid;
  gap: 1rem;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Field = styled.label`
  display: grid;
  gap: 0.45rem;

  span {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.inkMuted};
  }
`

const FieldError = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.safety};
  text-transform: none;
  letter-spacing: normal;
`

const inputStyles = `
  width: 100%;
  min-height: 48px;
  padding: 0.85rem 1rem;
  border-radius: var(--field-radius);
  border: 1px solid;
  border-color: var(--field-border);
  background: var(--field-bg);
  color: var(--field-text);
  font: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--field-focus);
  }
`

const Input = styled.input`
  --field-border: ${({ theme, $invalid }) => ($invalid ? theme.colors.safety : theme.colors.border)};
  --field-bg: ${({ theme }) => theme.colors.canvas};
  --field-text: ${({ theme }) => theme.colors.ink};
  --field-focus: ${({ theme }) => theme.colors.bronze};
  --field-radius: ${({ theme }) => theme.radius.sm};
  ${inputStyles}
`

const Select = styled.select`
  --field-border: ${({ theme, $invalid }) => ($invalid ? theme.colors.safety : theme.colors.border)};
  --field-bg: ${({ theme }) => theme.colors.canvas};
  --field-text: ${({ theme }) => theme.colors.ink};
  --field-focus: ${({ theme }) => theme.colors.bronze};
  --field-radius: ${({ theme }) => theme.radius.sm};
  ${inputStyles}
`

const Textarea = styled.textarea`
  --field-border: ${({ theme, $invalid }) => ($invalid ? theme.colors.safety : theme.colors.border)};
  --field-bg: ${({ theme }) => theme.colors.canvas};
  --field-text: ${({ theme }) => theme.colors.ink};
  --field-focus: ${({ theme }) => theme.colors.bronze};
  --field-radius: ${({ theme }) => theme.radius.sm};
  min-height: 160px;
  ${inputStyles}
`

const HoneypotField = styled.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

const SubmitButton = styled.button`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 48px;
  padding: 1rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.canvas};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const StatusMessage = styled.p`
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.9rem;
  line-height: 1.5;
  background: ${({ $tone, theme }) => ($tone === 'error' ? 'transparent' : theme.colors.canvas)};
  border: 1px solid ${({ $tone, theme }) => ($tone === 'error' ? theme.colors.safety : theme.colors.border)};
  color: ${({ $tone, theme }) => ($tone === 'error' ? theme.colors.safety : theme.colors.ink)};
`

const EMPTY_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  serviceNeeded: '',
  projectType: '',
  message: '',
  // 蜜罐字段:真人不会填写,机器人通常会自动填充所有输入框
  website: '',
}

const emailjsConfigured = Boolean(
  EMAILJS.SERVICE_ID && EMAILJS.TEMPLATE_ID && EMAILJS.PUBLIC_KEY
)

// 与表单字段一一对应的 DOM 顺序,用于校验失败后定位"第一个错误字段"
const FIELD_ORDER = ['name', 'email', 'serviceNeeded', 'projectType', 'message']

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * EmailJS 模板变量清单(template_pngskco 必须包含以下变量才能正确渲染邮件):
 *   from_name    — 姓名
 *   company      — 公司(可为空)
 *   from_email   — 邮箱
 *   phone        — 电话(可为空)
 *   service      — 所需服务
 *   project_type — 项目类型
 *   message      — 项目描述
 *   to_email     — 收件邮箱(固定为 EMAILJS.TO_EMAIL)
 * 上线前必须用真实 EmailJS 账号完成一次实际发送验收,确认模板变量与
 * EmailJS 后台模板一致、邮件能送达 —— 本次改动只完成了代码实现,
 * 尚未做真实发送验证。
 */

export function InquiryForm({ formConfig }) {
  const [formState, setFormState] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    serviceNeeded: useRef(null),
    projectType: useRef(null),
    message: useRef(null),
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))

    // 用户修改字段后,立即清除该字段的旧错误提示
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const validate = () => {
    const nextErrors = {}
    if (!formState.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formState.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!EMAIL_PATTERN.test(formState.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formState.serviceNeeded) nextErrors.serviceNeeded = 'Please select a service.'
    if (!formState.projectType) nextErrors.projectType = 'Please select a project type.'
    if (!formState.message.trim()) nextErrors.message = 'Please tell us about your project.'
    return nextErrors
  }

  const focusFirstError = (nextErrors) => {
    const firstField = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstField) fieldRefs[firstField].current?.focus()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // 蜜罐命中:静默丢弃,不给机器人任何反馈
    if (formState.website) {
      setStatus('success')
      return
    }

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors)
      return
    }

    if (!emailjsConfigured) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      // 变量名必须与 EmailJS 模板(template_pngskco)中的占位符一致,
      // 见上方 EMAILJS_TEMPLATE_PARAMS 清单。发送前尚未做真实验收。
      await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        {
          from_name: formState.name,
          company: formState.company,
          from_email: formState.email,
          phone: formState.phone,
          service: formState.serviceNeeded,
          project_type: formState.projectType,
          message: formState.message,
          to_email: EMAILJS.TO_EMAIL,
        },
        { publicKey: EMAILJS.PUBLIC_KEY }
      )
      setStatus('success')
      setFormState(EMPTY_FORM)
    } catch (error) {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <Reveal delay={0.1}>
      <FormShell>
        <Intro>
          <h3>{formConfig.title}</h3>
          <p>{formConfig.description}</p>
          <Note id="inquiry-form-note">{formConfig.note}</Note>
        </Intro>

        <Form onSubmit={handleSubmit} noValidate>
          <HoneypotField aria-hidden="true">
            <label htmlFor="inquiry-website">Leave this field empty</label>
            <input
              id="inquiry-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formState.website}
              onChange={handleChange}
            />
          </HoneypotField>

          <Row>
            <Field htmlFor="inquiry-name">
              <span>Name</span>
              <Input
                id="inquiry-name"
                ref={fieldRefs.name}
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
                $invalid={Boolean(errors.name)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
              />
              {errors.name && <FieldError id="inquiry-name-error">{errors.name}</FieldError>}
            </Field>
            <Field htmlFor="inquiry-company">
              <span>Company</span>
              <Input
                id="inquiry-company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                placeholder="Company name"
                autoComplete="organization"
              />
            </Field>
          </Row>

          <Row>
            <Field htmlFor="inquiry-email">
              <span>Email</span>
              <Input
                id="inquiry-email"
                ref={fieldRefs.email}
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                $invalid={Boolean(errors.email)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
              />
              {errors.email && <FieldError id="inquiry-email-error">{errors.email}</FieldError>}
            </Field>
            <Field htmlFor="inquiry-phone">
              <span>Phone</span>
              <Input
                id="inquiry-phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Phone number"
                autoComplete="tel"
              />
            </Field>
          </Row>

          <Row>
            <Field htmlFor="inquiry-service-needed">
              <span>Service Needed</span>
              <Select
                id="inquiry-service-needed"
                ref={fieldRefs.serviceNeeded}
                name="serviceNeeded"
                value={formState.serviceNeeded}
                onChange={handleChange}
                required
                $invalid={Boolean(errors.serviceNeeded)}
                aria-invalid={Boolean(errors.serviceNeeded)}
                aria-describedby={errors.serviceNeeded ? 'inquiry-service-error' : undefined}
              >
                <option value="">Select a service</option>
                {formConfig.serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Select>
              {errors.serviceNeeded && <FieldError id="inquiry-service-error">{errors.serviceNeeded}</FieldError>}
            </Field>
            <Field htmlFor="inquiry-project-type">
              <span>Project Type</span>
              <Select
                id="inquiry-project-type"
                ref={fieldRefs.projectType}
                name="projectType"
                value={formState.projectType}
                onChange={handleChange}
                required
                $invalid={Boolean(errors.projectType)}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? 'inquiry-project-type-error' : undefined}
              >
                <option value="">Select project type</option>
                {formConfig.projectTypeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Select>
              {errors.projectType && <FieldError id="inquiry-project-type-error">{errors.projectType}</FieldError>}
            </Field>
          </Row>

          <Field htmlFor="inquiry-message">
            <span>Message</span>
            <Textarea
              id="inquiry-message"
              ref={fieldRefs.message}
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project, timeline, location, and what kind of support you need."
              aria-describedby={errors.message ? 'inquiry-message-error inquiry-form-note' : 'inquiry-form-note'}
              required
              $invalid={Boolean(errors.message)}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <FieldError id="inquiry-message-error">{errors.message}</FieldError>}
          </Field>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Inquiry'}
          </SubmitButton>

          <div role="status" aria-live="polite">
            {status === 'success' && (
              <StatusMessage $tone="success">
                Thanks — your inquiry has been sent. JKCE will be in touch shortly.
              </StatusMessage>
            )}
            {status === 'error' && (
              <StatusMessage $tone="error">
                Something went wrong and your message wasn't sent. Please email us directly at{' '}
                <a href={companyInfo.emailHref} style={{ textDecoration: 'underline' }}>{companyInfo.email}</a>{' '}
                or call{' '}
                <a href={companyInfo.phoneHref} style={{ textDecoration: 'underline' }}>{companyInfo.phone}</a>.
              </StatusMessage>
            )}
          </div>
        </Form>
      </FormShell>
    </Reveal>
  )
}
