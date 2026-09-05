import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { FactStrip } from '../components/PageScaffold'
import { getProjectBySlug, getServiceBySlug } from '../content/siteData'
import { homeContent } from '../content/home'

const { featuredCase } = homeContent
const project = getProjectBySlug('tlowitsis-nation')

/* Surface 通栏 + 深色文字面板,和相邻的 CoreServices(canvas)/TechCapability(dark)都形成区隔 */
const Section = styled.section`
  padding: 0 2.5rem ${({ theme }) => theme.section.paddingY};
  background: ${({ theme }) => theme.colors.surface};

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
  margin-bottom: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const SectionHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 1.5rem + 3vw, 3.5rem);
  line-height: 1.05;
  max-width: 14ch;
  margin-bottom: 2rem;
`

const Panel = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ImageCol = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  ${Panel}:hover & img {
    transform: scale(1.03);
  }
`

const TextCol = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.industrialDark};
  color: ${({ theme }) => theme.colors.textOnDark};

  @media (max-width: 768px) {
    padding: 1.75rem;
  }
`

const StatusTag = styled.span`
  color: ${({ theme }) => theme.colors.safety};
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(1.75rem, 1.3rem + 2vw, 2.5rem);
  line-height: 1.08;
  margin-bottom: 1rem;
`

const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
  margin-bottom: 1.5rem;
`

const StyledFactStrip = styled(FactStrip)`
  margin-bottom: 1.75rem;
  padding: 1.25rem 0;
`

const CtaRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnDark};

  .arrow {
    transition: transform 0.2s ease;
  }

  ${Panel}:hover & .arrow {
    transform: translateX(5px);
  }
`

export function FeaturedCase() {
  if (!project) return null

  const relatedServices = project.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)

  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{featuredCase.eyebrow.en}</Eyebrow>
        </Reveal>

        <SectionHeading>
          <RevealText
            lines={[
              featuredCase.headingLines.en[0],
              featuredCase.headingLines.en[1],
              featuredCase.headingLines.en[2],
            ]}
          />
        </SectionHeading>

        <Reveal delay={0.1}>
          <Panel to={`/projects/${project.slug}`} aria-label={`View case study: ${project.title}`}>
            <ImageCol>
              <img src={project.gallery[0].src} alt={project.gallery[0].alt} loading="lazy" />
            </ImageCol>
            <TextCol>
              <Title>{project.title}</Title>
              <Summary>{featuredCase.body.en}</Summary>
              <StyledFactStrip
                dark
                items={[
                  { label: 'Location', value: project.location },
                  { label: 'Status', value: <StatusTag>{project.status}</StatusTag> },
                  { label: 'Services', value: relatedServices.map((s) => s.shortName).join(', ') },
                ]}
              />
              <CtaRow>
                <span>{featuredCase.cta.en}</span>
                <span className="arrow" aria-hidden="true">→</span>
              </CtaRow>
            </TextCol>
          </Panel>
        </Reveal>
      </Inner>
    </Section>
  )
}
