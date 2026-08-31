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
  MediaFrame,
  PlainList,
  PlainItem,
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

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const FactsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  background: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Fact = styled.div`
  padding: 1.25rem 1.5rem;
  background: ${({ theme }) => theme.colors.canvas};

  span {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.inkMuted};
    margin-bottom: 0.4rem;
  }

  strong {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.ink};
  }
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
            <FactsBar>
              <Fact><span>Location</span><strong>{project.location}</strong></Fact>
              <Fact><span>Year</span><strong>{project.year}</strong></Fact>
              <Fact><span>Status</span><strong>{project.status}</strong></Fact>
              <Fact><span>Project Type</span><strong>{project.projectType}</strong></Fact>
              <Fact>
                <span>Services</span>
                <strong>{relatedServices.map((s) => s.shortName || s.name).join(', ')}</strong>
              </Fact>
            </FactsBar>
          </Reveal>

          <SectionHeader>
            <Reveal><SectionLabel>Project Snapshot</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{project.summary}</SectionLead>
            </Reveal>
          </SectionHeader>

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
          <PlainList>
            {project.scopeOfWork.map((item) => (
              <Reveal key={item}>
                <PlainItem>
                  <p>{item}</p>
                </PlainItem>
              </Reveal>
            ))}
          </PlainList>
        </Section>

        {galleryImages.length > 0 && (
          <Section>
            <SectionHeader>
              <Reveal><SectionLabel>Project Gallery</SectionLabel></Reveal>
              <Reveal delay={0.1}>
                <SectionLead>Site and construction photography from this project.</SectionLead>
              </Reveal>
            </SectionHeader>
            <GalleryGrid>
              {galleryImages.map((item, index) => (
                <Reveal key={item.src} delay={index * 0.06}>
                  <GalleryItem>
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <figcaption>{item.caption}</figcaption>
                  </GalleryItem>
                </Reveal>
              ))}
            </GalleryGrid>
          </Section>
        )}

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Key Highlights</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Why this project matters.</SectionLead>
            </Reveal>
          </SectionHeader>
          <PlainList>
            {project.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <PlainItem>
                  <p>{item}</p>
                </PlainItem>
              </Reveal>
            ))}
          </PlainList>

          {relatedServices.length > 0 && (
            <div style={{ marginTop: '2.5rem' }}>
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
