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
  Card,
  CTA,
  CTAButton,
} from './PageScaffold'
import { Reveal } from './Reveal'

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const ProjectLink = styled(Link)`
  display: inline-flex;
  margin-top: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

const SubcategoryRow = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  align-items: start;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.line};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

const SubcategoryName = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding-top: 0.1rem;
`

const SubcategoryDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`

export function ServicePageTemplate({ service, relatedProjects }) {
  const featuredProject = relatedProjects[0]

  return (
    <PageWrapper>
      <PageInner>
        <Reveal>
          <BackLink to="/services">Back to Services</BackLink>
        </Reveal>

        <PageHero
          eyebrow="Services"
          title={service.name}
          titleItalic={service.shortName}
          body={service.heroBody}
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Overview</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{service.overview}</SectionLead>
            </Reveal>
          </SectionHeader>
        </Section>

        {service.subcategories?.length > 0 && (
          <Section>
            <SectionHeader>
              <Reveal><SectionLabel>What We Offer</SectionLabel></Reveal>
              <Reveal delay={0.1}>
                <SectionLead>
                  Four specialized services within this division.
                </SectionLead>
              </Reveal>
            </SectionHeader>
            <div>
              {service.subcategories.map((sub, i) => (
                <Reveal key={sub.name} delay={i * 0.06}>
                  <SubcategoryRow>
                    <SubcategoryName>{sub.name}</SubcategoryName>
                    <SubcategoryDesc>{sub.description}</SubcategoryDesc>
                  </SubcategoryRow>
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        <Section $border={false}>
          {featuredProject && (
            <>
              <SectionHeader>
                <Reveal><SectionLabel>Related Project</SectionLabel></Reveal>
                <Reveal delay={0.1}>
                  <SectionLead>A selected project connected to this service.</SectionLead>
                </Reveal>
              </SectionHeader>
              <Reveal delay={0.06}>
                <Card>
                  <h3>{featuredProject.title}</h3>
                  <p>{featuredProject.summary}</p>
                  <ProjectLink to={`/projects/${featuredProject.slug}`}>View Project</ProjectLink>
                </Card>
              </Reveal>
            </>
          )}

          <CTA>
            <div>
              <h3>{service.cta.title}</h3>
              <p>{service.cta.body}</p>
            </div>
            <CTAButton to={service.cta.to}>{service.cta.button}</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
