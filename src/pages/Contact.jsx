import styled from 'styled-components'
import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  Grid,
  Card,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { contactContent, servicesContent } from '../content/siteData'

const ContactLink = styled.a`
  display: inline-block;
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export default function Contact() {
  return (
    <PageWrapper>
      <PageInner>
        <PageHero
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          titleItalic={contactContent.titleItalic}
          body="The old site expected contact to be one of the core interior pages. This new version now restores that route with real company details and support content."
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Reach Us</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>These contact details are brought forward directly from the legacy project’s company information.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid>
            {contactContent.details.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <Card>
                  <h3>{item.label}</h3>
                  <ContactLink href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noreferrer">
                    {item.value}
                  </ContactLink>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Best Fit</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>This page also carries the old site’s role as an intake point by clarifying which service groups JKCE supports.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={2}>
            {servicesContent.divisions.map((division, index) => (
              <Reveal key={division.title} delay={index * 0.08}>
                <Card>
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>FAQ</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>A lightweight version of the FAQ structure from the unfinished project is now present in the new site.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid>
            {contactContent.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.08}>
                <Card>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>

          <CTA>
            <div>
              <h3>Want the contact form itself added next?</h3>
              <p>The route and content structure are ready. We can wire in a real form flow after you decide whether to use EmailJS, Formspree, or a backend endpoint.</p>
            </div>
            <CTAButton to="/services">Review Services</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
