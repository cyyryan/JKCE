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
  SectionLabelOnDark,
  SectionLeadOnDark,
  MediaFrame,
  FactStrip,
  CTA,
  CTAButton,
} from './PageScaffold'
import { Reveal } from './Reveal'

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  margin-top: 2rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

/* Scope of Work 是 Level 4 细节 —— 视觉权重低于 Key Highlights */
const ScopeList = styled.div`
  display: grid;
  gap: 0.6rem;
`

const ScopeRow = styled.div`
  padding-top: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  p {
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 0.88rem;
    line-height: 1.6;
  }
`

/* Key Highlights —— Level 1/2,大号编号 + 短结论,深色区块提升权重 */
const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`

const HighlightItem = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1rem;
`

const HighlightNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.bronzeOnDark};
  line-height: 1;
`

const HighlightText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  padding-top: 0.2rem;
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const GalleryItem = styled.figure`
  margin: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  figcaption {
    padding: 0.7rem 0.1rem 0;
    font-size: 0.82rem;
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.5;
  }
`

const ServiceLinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const ServiceLinkTag = styled(Link)`
  padding: 0.45rem 0.8rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bronze};
  }
`

export function ProjectPageTemplate({ project, relatedServices }) {
  const [heroImage, ...galleryImages] = project.gallery

  return (
    <PageWrapper>
      <PageInner>
        <Reveal>
          <BackLink to="/projects">Back to Projects</BackLink>
        </Reveal>

        <PageHero
          eyebrow={`${project.projectType} / ${project.status}`}
          title={project.title}
          titleItalic={project.location}
          body={project.projectSummary}
        />

        {heroImage && (
          <Section $border={false} style={{ paddingTop: '2.5rem', paddingBottom: 0 }}>
            <Reveal>
              <MediaFrame $ratio="16 / 8">
                <img src={heroImage.src} alt={heroImage.alt} loading="lazy" fetchpriority="high" />
              </MediaFrame>
            </Reveal>
          </Section>
        )}

        <Section>
          <Reveal>
            <FactStrip
              items={[
                { label: 'Location', value: project.location },
                { label: 'Year', value: project.year },
                { label: 'Status', value: project.status },
                { label: 'Project Type', value: project.projectType },
                { label: 'Services', value: relatedServices.map((s) => s.shortName || s.name).join(', ') },
              ]}
            />
          </Reveal>

          <div style={{ marginTop: '2rem' }}>
            <SectionHeader>
              <Reveal><SectionLabel>Project Snapshot</SectionLabel></Reveal>
              <Reveal delay={0.1}>
                <SectionLead>{project.summary}</SectionLead>
              </Reveal>
            </SectionHeader>
          </div>

          {project.videoUrl && (
            <Reveal>
              <VideoWrapper>
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} project video`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </Reveal>
          )}
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Scope of Work</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Core delivery scope.</SectionLead>
            </Reveal>
          </SectionHeader>
          <ScopeList>
            {project.scopeOfWork.map((item) => (
              <Reveal key={item}>
                <ScopeRow>
                  <p>{item}</p>
                </ScopeRow>
              </Reveal>
            ))}
          </ScopeList>
        </Section>

        {galleryImages.length > 0 && (
          <Section $border={false}>
            <SectionHeader>
              <Reveal><SectionLabel>Project Gallery</SectionLabel></Reveal>
              <Reveal delay={0.1}>
                <SectionLead>Site and construction photography from this project.</SectionLead>
              </Reveal>
            </SectionHeader>
            <GalleryGrid>
              {galleryImages.map((item, index) => (
                <Reveal key={item.src} delay={(index % 3) * 0.06}>
                  <GalleryItem>
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <figcaption>{item.caption}</figcaption>
                  </GalleryItem>
                </Reveal>
              ))}
            </GalleryGrid>
          </Section>
        )}
      </PageInner>

      {/* Key Highlights —— Dark Section,全站唯一强调区,提升项目成果的视觉权重 */}
      <Section $tone="dark" $border={false}>
        <PageInner>
          <SectionHeader>
            <Reveal><SectionLabelOnDark>Key Highlights</SectionLabelOnDark></Reveal>
            <Reveal delay={0.1}>
              <SectionLeadOnDark>Why this project matters.</SectionLeadOnDark>
            </Reveal>
          </SectionHeader>
          <HighlightGrid>
            {project.highlights.map((item, index) => (
              <Reveal key={item} variant="side" delay={index * 0.08}>
                <HighlightItem>
                  <HighlightNum>{String(index + 1).padStart(2, '0')}</HighlightNum>
                  <HighlightText>{item}</HighlightText>
                </HighlightItem>
              </Reveal>
            ))}
          </HighlightGrid>
        </PageInner>
      </Section>

      <PageInner>
        <Section $border={false}>
          {relatedServices.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <SectionLabel style={{ marginBottom: '1rem', display: 'block' }}>Related Services</SectionLabel>
              <ServiceLinkRow>
                {relatedServices.map((service) => (
                  <ServiceLinkTag key={service.slug} to={service.slug === 'icf' ? '/icf' : `/services/${service.slug}`}>
                    {service.name}
                  </ServiceLinkTag>
                ))}
              </ServiceLinkRow>
            </div>
          )}

          <CTA>
            <div>
              <h3>{project.cta.title}</h3>
              <p>{project.cta.body}</p>
            </div>
            <CTAButton to={project.cta.to}>{project.cta.button}</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
