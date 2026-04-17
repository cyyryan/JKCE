import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { pageMeta } from '../content/siteData'

const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export default function NotFound() {
  return (
    <PageWrapper>
      <Seo {...pageMeta.notFound} noIndex />
      <PageInner>
        <PageHero
          eyebrow="404"
          title="Page not"
          titleItalic="found."
          body="The page you are looking for may have moved or no longer exists."
        />

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Next Step</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Return to the homepage, explore JKCE services, or get in touch if you are trying to reach a project or service page.
              </SectionLead>
            </Reveal>
          </SectionHeader>

          <CTA>
            <div>
              <h2>Need to find the right page?</h2>
              <p>Use one of the links below to continue browsing the site.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <CTAButton to="/">Back Home</CTAButton>
              <SecondaryLink to="/services">View Services</SecondaryLink>
            </div>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
