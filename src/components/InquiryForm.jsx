import { useState } from 'react'
import styled from 'styled-components'
import { Reveal } from './Reveal'

const FormShell = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.75rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
`

const Intro = styled.div`
  margin-bottom: 1.75rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
  }
`

const Note = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
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
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

const inputStyles = `
  width: 100%;
  padding: 0.95rem 1rem;
  border-radius: 1rem;
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
  --field-border: ${({ theme }) => theme.colors.line};
  --field-bg: ${({ theme }) => theme.colors.bgPrimary};
  --field-text: ${({ theme }) => theme.colors.textPrimary};
  --field-focus: ${({ theme }) => theme.colors.textPrimary};
  ${inputStyles}
`

const Select = styled.select`
  --field-border: ${({ theme }) => theme.colors.line};
  --field-bg: ${({ theme }) => theme.colors.bgPrimary};
  --field-text: ${({ theme }) => theme.colors.textPrimary};
  --field-focus: ${({ theme }) => theme.colors.textPrimary};
  ${inputStyles}
`

const Textarea = styled.textarea`
  --field-border: ${({ theme }) => theme.colors.line};
  --field-bg: ${({ theme }) => theme.colors.bgPrimary};
  --field-text: ${({ theme }) => theme.colors.textPrimary};
  --field-focus: ${({ theme }) => theme.colors.textPrimary};
  min-height: 160px;
  ${inputStyles}
`

const SubmitButton = styled.button`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 1rem 1.25rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export function InquiryForm({ formConfig }) {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    projectType: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: Connect this form to your backend, CRM, or email workflow.
    console.log('Inquiry form submission placeholder:', formState)
  }

  return (
    <Reveal delay={0.1}>
      <FormShell>
        <Intro>
          <h3>{formConfig.title}</h3>
          <p>{formConfig.description}</p>
          <Note id="inquiry-form-note">{formConfig.note}</Note>
        </Intro>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Field htmlFor="inquiry-name">
              <span>Name</span>
              <Input
                id="inquiry-name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
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
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
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
                name="serviceNeeded"
                value={formState.serviceNeeded}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {formConfig.serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Select>
            </Field>
            <Field htmlFor="inquiry-project-type">
              <span>Project Type</span>
              <Select
                id="inquiry-project-type"
                name="projectType"
                value={formState.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select project type</option>
                {formConfig.projectTypeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Select>
            </Field>
          </Row>

          <Field htmlFor="inquiry-message">
            <span>Message</span>
            <Textarea
              id="inquiry-message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project, timeline, location, and what kind of support you need."
              aria-describedby="inquiry-form-note"
              required
            />
          </Field>

          <SubmitButton type="submit">Send Inquiry</SubmitButton>
        </Form>
      </FormShell>
    </Reveal>
  )
}
