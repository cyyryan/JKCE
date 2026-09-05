import styled from 'styled-components'
import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  SectionLabelOnDark,
  SectionLeadOnDark,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { ContactInfoCards } from '../components/ContactInfoCards'
import { InquiryForm } from '../components/InquiryForm'
import { DetailAccordion } from '../components/DetailAccordion'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { contactContent, pageMeta } from '../content/siteData'

const ResponseNote = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textOnDark};
`

export default function Contact() {
  return (
    <PageWrapper>
      <Seo {...pageMeta.contact} />
      <PageInner>
        <PageHero
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          titleItalic={contactContent.titleItalic}
          body={contactContent.intro}
        />
      </PageInner>

      {/* 联系方式 —— 独立高对比色块 */}
      <Section $tone="dark" $border={false}>
        <PageInner>
          <SectionHeader>
            <Reveal><SectionLabelOnDark>Reach Us</SectionLabelOnDark></Reveal>
            <Reveal delay={0.1}>
              <SectionLeadOnDark>{contactContent.lead}</SectionLeadOnDark>
            </Reveal>
          </SectionHeader>
          <ContactInfoCards items={contactContent.details} dark />
          <Reveal delay={0.15}>
            <ResponseNote>{contactContent.responseNote}</ResponseNote>
          </Reveal>
        </PageInner>
      </Section>

      <PageInner>
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Inquiry Form</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Use this form for pricing, scope review, or early planning inquiries.</SectionLead>
            </Reveal>
          </SectionHeader>
          <InquiryForm formConfig={contactContent.form} />
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>FAQ</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Quick answers.</SectionLead>
            </Reveal>
          </SectionHeader>
          <DetailAccordion
            items={contactContent.faqs.map((faq, i) => ({
              id: String(i),
              title: faq.question,
              content: faq.answer,
            }))}
          />

          <CTA>
            <div>
              <h3>{contactContent.cta.title}</h3>
              <p>{contactContent.cta.body}</p>
            </div>
            <CTAButton to={contactContent.cta.to}>{contactContent.cta.button}</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
