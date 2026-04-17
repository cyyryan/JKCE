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
  IconBadge,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { pageMeta, services, servicesPageContent } from '../content/siteData'

const ServiceLink = styled(Link)`
  display: inline-flex;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export default function Services() {
  return (
    <PageWrapper>
      <Seo {...pageMeta.services} />
      <PageInner>
        <PageHero
          eyebrow={servicesPageContent.eyebrow}
          title={servicesPageContent.title}
          titleItalic={servicesPageContent.titleItalic}
          body={servicesPageContent.intro}
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Capabilities</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{servicesPageContent.overview}</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={2}>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <Card>
                  <IconBadge>{service.icon}</IconBadge>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <ServiceLink to={`/services/${service.slug}`}>View Service</ServiceLink>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section $border={false}>
          <CTA>
            <div>
              <h3>{servicesPageContent.cta.title}</h3>
              <p>{servicesPageContent.cta.body}</p>
            </div>
            <CTAButton to={servicesPageContent.cta.to}>{servicesPageContent.cta.button}</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
