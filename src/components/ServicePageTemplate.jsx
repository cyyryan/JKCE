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
  Grid,
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

export function ServicePageTemplate({ service, relatedProjects }) {
  const offerings = service.scopeOfWork.slice(0, 3)
  const featuredProject = relatedProjects[0]

  return (
    <PageWrapper>
      <PageInner>
        <Reveal>
          <BackLink to="/services">Back to Services</BackLink>
        </Reveal>

        <PageHero
          eyebrow="Service"
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

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Key Offerings</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Three core ways JKCE supports this service scope.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={3}>
            {offerings.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <Card>
                  <h3>Offering</h3>
                  <p>{item}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Related Project</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>A selected project connected to this service line.</SectionLead>
            </Reveal>
          </SectionHeader>

          {featuredProject ? (
            <Reveal delay={0.06}>
              <Card>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.summary}</p>
                <ProjectLink to={`/projects/${featuredProject.slug}`}>View Project</ProjectLink>
              </Card>
            </Reveal>
          ) : null}

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
