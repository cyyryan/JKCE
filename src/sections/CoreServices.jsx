import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { services } from '../content/siteData'
import { homeContent } from '../content/home'

const { services: servicesContent } = homeContent

const HOME_SERVICE_CARDS = [
  ...services.map((service) => ({
    to: `/services/${service.slug}`,
    name: service.name,
    summary: service.summary,
    capabilities: (service.subcategories || []).slice(0, 3).map((sub) => sub.name),
    scopeLabel: service.subcategories?.length ? `${service.subcategories.length} specialties` : null,
    image: service.image,
  })),
  {
    to: '/icf',
    name: 'ICF Construction',
    summary: 'Insulated Concrete Form building — superior strength, thermal efficiency, and long-term durability.',
    capabilities: ['Excellent Insulation', 'Fast Construction', 'High Structural Strength'],
    scopeLabel: 'Dedicated capability',
    image: { src: '/images/icf/case-study-banner.webp', alt: 'ICF exterior wall construction with scaffolding and bracing' },
  },
]

const Section = styled.section`
  padding: 0 2.5rem ${({ theme }) => theme.section.paddingY};
  background: ${({ theme }) => theme.colors.canvas};

  @media (max-width: 768px) {
    padding: 0 1.5rem ${({ theme }) => theme.section.paddingYTight};
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: clamp(2rem, 5vw, 5rem);
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 1.5rem + 3vw, 3.5rem);
  line-height: 1.05;
`

const Body = styled.p`
  align-self: end;
  max-width: 28rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CardLink = styled(Link)`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bronze};
  }
`

const CardImage = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  ${CardLink}:hover & img {
    transform: scale(1.04);
  }
`

const CardBody = styled.div`
  padding: 1.35rem 1.5rem 1.5rem;
`

const CardTop = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`

const Index = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
`

const CapabilityList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.6rem;
  margin-bottom: 1rem;

  li {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.inkSecondary};
    padding: 0.3rem 0.65rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`

/* 摘要句是 Level 3 支撑说明:桌面端 hover/focus 展开,触屏设备默认直接可读 */
const CardSummary = styled.p`
  color: ${({ theme }) => theme.colors.inkSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  @media (hover: hover) and (pointer: fine) {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    overflow: hidden;
    transition: grid-template-rows 0.3s ease, opacity 0.25s ease;

    > span {
      overflow: hidden;
      min-height: 0;
    }

    ${CardLink}:hover &, ${CardLink}:focus-within & {
      grid-template-rows: 1fr;
      opacity: 1;
    }
  }
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

const ScopeLabel = styled.span`
  color: ${({ theme }) => theme.colors.inkMuted};
`

const Arrow = styled.span`
  color: ${({ theme }) => theme.colors.inkMuted};
  transition: transform 0.2s ease, color 0.2s ease;

  ${CardLink}:hover & {
    transform: translateX(4px);
    color: ${({ theme }) => theme.colors.bronzeText};
  }
`

export function CoreServices() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{servicesContent.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText
              lines={[
                servicesContent.headingLines.en[0],
                servicesContent.headingLines.en[1],
                servicesContent.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.12}>
            <Body>{servicesContent.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {HOME_SERVICE_CARDS.map((card, index) => (
            <Reveal key={card.to} delay={index * 0.06}>
              <CardLink to={card.to} aria-label={`View ${card.name}`}>
                <CardImage>
                  <img src={card.image.src} alt={card.image.alt} loading="lazy" />
                </CardImage>
                <CardBody>
                  <CardTop>
                    <Index>{String(index + 1).padStart(2, '0')}</Index>
                    <CardTitle>{card.name}</CardTitle>
                  </CardTop>
                  {card.capabilities.length > 0 && (
                    <CapabilityList>
                      {card.capabilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </CapabilityList>
                  )}
                  <CardSummary>
                    <span>{card.summary}</span>
                  </CardSummary>
                  <CardFooter>
                    <ScopeLabel>{card.scopeLabel}</ScopeLabel>
                    <Arrow aria-hidden="true">→</Arrow>
                  </CardFooter>
                </CardBody>
              </CardLink>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}
