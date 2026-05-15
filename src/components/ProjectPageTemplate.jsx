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
  SplitPanel,
  PlainList,
  PlainItem,
  CTA,
  CTAButton,
  TagRow,
  Tag,
} from './PageScaffold'
import { Reveal } from './Reveal'

const SnapshotGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 1.25rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgSecondary};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const HeroBanner = styled.div`
  width: 100%;
  height: 520px;
  overflow: hidden;
  border-radius: 1.5rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    height: 280px;
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
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.line};

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  figcaption {
    padding: 0.85rem 1rem 1rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.55;
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
          <Reveal>
            <HeroBanner>
              <img src={heroImage.src} alt={heroImage.alt} loading="lazy" />
            </HeroBanner>
          </Reveal>
        )}

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Project Snapshot</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{project.summary}</SectionLead>
            </Reveal>
          </SectionHeader>

          {project.videoUrl ? (
            <SnapshotGrid>
              <Reveal>
                <VideoWrapper>
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} project video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </VideoWrapper>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <h3>Project Type</h3>
                  <p>{project.projectType}</p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <h3>Location</h3>
                    <p>{project.location}</p>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <h3>Services</h3>
                    <TagRow>
                      {relatedServices.map((service) => (
                        <Tag key={service.slug}>{service.name}</Tag>
                      ))}
                    </TagRow>
                  </div>
                </div>
              </Reveal>
            </SnapshotGrid>
          ) : (
            <SplitPanel>
              <Reveal>
                <div>
                  <h3>Project Type</h3>
                  <p>{project.projectType}</p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <h3>Location</h3>
                    <p>{project.location}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <h3>Services</h3>
                  <TagRow>
                    {relatedServices.map((service) => (
                      <Tag key={service.slug}>{service.name}</Tag>
                    ))}
                  </TagRow>
                </div>
              </Reveal>
            </SplitPanel>
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
                <Reveal key={item.src} delay={index * 0.07}>
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
