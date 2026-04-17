import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  SplitPanel,
  PlainList,
  PlainItem,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { ContactInfoCards } from '../components/ContactInfoCards'
import { InquiryForm } from '../components/InquiryForm'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { contactContent, pageMeta } from '../content/siteData'

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

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Reach Us</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{contactContent.lead}</SectionLead>
            </Reveal>
          </SectionHeader>
          <ContactInfoCards items={contactContent.details} />
        </Section>

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
          <SplitPanel>
            <PlainList as="div">
              {contactContent.faqs.slice(0, Math.ceil(contactContent.faqs.length / 2)).map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.08}>
                  <PlainItem>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </PlainItem>
                </Reveal>
              ))}
            </PlainList>
            <PlainList as="div">
              {contactContent.faqs.slice(Math.ceil(contactContent.faqs.length / 2)).map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.08}>
                  <PlainItem>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </PlainItem>
                </Reveal>
              ))}
            </PlainList>
          </SplitPanel>

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
