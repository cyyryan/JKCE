import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  PullQuote,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { pageMeta, services, servicesPageContent, getProjectsByServiceSlug, aboutContent } from '../content/siteData'

const ServiceLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

/* ICF 独立强调 —— 铜金左边线区分于三项核心服务,不做成广告横幅 */
const IcfCard = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid ${({ theme }) => theme.colors.bronze};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.canvas};
  margin-top: 1.5rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bronze};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const IcfImage = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const ServiceCard = styled(Link)`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.canvas};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bronze};
  }
`

const ServiceCardImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  ${ServiceCard}:hover & img {
    transform: scale(1.04);
  }
`

const ServiceCardBody = styled.div`
  padding: 1.75rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.65;
  }
`

const CardTop = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`

const Index = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const SubList = styled.div`
  margin-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const SubItem = styled.div`
  padding: 0.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

const SERVICE_CARDS = services.map((service) => ({
  slug: service.slug,
  to: `/services/${service.slug}`,
  name: service.name,
  description: service.description,
  subcategories: service.subcategories,
  projectCount: getProjectsByServiceSlug(service.slug).length,
  image: service.image,
}))

const ICF_CARD = {
  slug: 'icf',
  to: '/icf',
  name: 'ICF Construction',
  description: 'Insulated Concrete Form expertise delivering superior structural performance, thermal efficiency, and long-term durability — a dedicated JKCE capability across residential and community projects.',
  projectCount: getProjectsByServiceSlug('icf').length,
  image: { src: '/images/icf/case-study-banner.webp', alt: 'ICF exterior wall construction with scaffolding and bracing' },
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

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Capabilities</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{servicesPageContent.overview}</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid>
            {SERVICE_CARDS.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <ServiceCard to={service.to} aria-label={`View ${service.name}`}>
                  <ServiceCardImage>
                    <img src={service.image.src} alt={service.image.alt} loading="lazy" />
                  </ServiceCardImage>
                  <ServiceCardBody>
                    <CardTop>
                      <Index>{String(index + 1).padStart(2, '0')}</Index>
                      <h3>{service.name}</h3>
                    </CardTop>
                    <p>{service.description}</p>
                    {service.subcategories?.length > 0 && (
                      <SubList>
                        {service.subcategories.map((sub) => (
                          <SubItem key={sub.name}>{sub.name}</SubItem>
                        ))}
                      </SubList>
                    )}
                    <ServiceLink>
                      {service.projectCount > 0
                        ? `View Service — ${service.projectCount} related project${service.projectCount === 1 ? '' : 's'}`
                        : 'View Service'} →
                    </ServiceLink>
                  </ServiceCardBody>
                </ServiceCard>
              </Reveal>
            ))}
          </Grid>

          <Reveal delay={0.2} variant="side">
            <IcfCard to={ICF_CARD.to} aria-label={`View ${ICF_CARD.name}`}>
              <IcfImage>
                <img src={ICF_CARD.image.src} alt={ICF_CARD.image.alt} loading="lazy" />
              </IcfImage>
              <ServiceCardBody>
                <CardTop>
                  <Index>04</Index>
                  <h3>{ICF_CARD.name}</h3>
                </CardTop>
                <p>{ICF_CARD.description}</p>
                <ServiceLink>
                  {ICF_CARD.projectCount > 0
                    ? `View Service — ${ICF_CARD.projectCount} related project${ICF_CARD.projectCount === 1 ? '' : 's'}`
                    : 'View Service'} →
                </ServiceLink>
              </ServiceCardBody>
            </IcfCard>
          </Reveal>
        </Section>

        <Section $border={false}>
          <Reveal>
            <PullQuote>{aboutContent.mission}</PullQuote>
          </Reveal>

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
