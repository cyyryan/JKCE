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

const ServiceCard = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.5rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgPrimary};

  h3 {
    font-size: 1.55rem;
    margin-bottom: 0.9rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
  }
`

const ServiceCardImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`

const ServiceCardBody = styled.div`
  padding: 1.5rem;
`

const SubList = styled.div`
  margin-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`

const SubItem = styled.div`
  padding: 0.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SERVICE_IMAGES = {
  excavation: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=900&q=80',
  'construction-management': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  'design-service': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
}

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
          <Grid $columns={3}>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <ServiceCard>
                  <ServiceCardImage>
                    <img
                      src={SERVICE_IMAGES[service.slug]}
                      alt={service.name}
                      loading="lazy"
                    />
                  </ServiceCardImage>
                  <ServiceCardBody>
                    <IconBadge>{service.icon}</IconBadge>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    {service.subcategories?.length > 0 && (
                      <SubList>
                        {service.subcategories.map((sub) => (
                          <SubItem key={sub.name}>{sub.name}</SubItem>
                        ))}
                      </SubList>
                    )}
                    <ServiceLink to={`/services/${service.slug}`} style={{ marginTop: '1.25rem' }}>View Service</ServiceLink>
                  </ServiceCardBody>
                </ServiceCard>
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
