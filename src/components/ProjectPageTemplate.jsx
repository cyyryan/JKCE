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

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GalleryItem = styled.figure`
  margin: 0;
  overflow: hidden;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.line};

  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
  }

  figcaption {
    padding: 1rem 1.25rem 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`

export function ProjectPageTemplate({ project, relatedServices }) {
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

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Project Snapshot</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{project.summary}</SectionLead>
            </Reveal>
          </SectionHeader>
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
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Scope of Work</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Core delivery scope.</SectionLead>
            </Reveal>
          </SectionHeader>
          <PlainList>
            {project.scopeOfWork.slice(0, 3).map((item) => (
              <PlainItem key={item}>
                <p>{item}</p>
              </PlainItem>
            ))}
          </PlainList>
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Key Highlights</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Why this project matters.</SectionLead>
            </Reveal>
          </SectionHeader>
          <SplitPanel>
            <PlainList as="div">
              {project.highlights.slice(0, 2).map((item, index) => (
                <Reveal key={item} delay={index * 0.06}>
                  <PlainItem>
                    <p>{item}</p>
                  </PlainItem>
                </Reveal>
              ))}
            </PlainList>
            <Reveal delay={0.12}>
              <GalleryGrid>
                {project.gallery.slice(0, 1).map((item, index) => (
                  <GalleryItem key={item.src}>
                    <img
                      src={item.src}
                      alt={item.alt || `${project.title} gallery image ${index + 1}`}
                      loading="lazy"
                    />
                    <figcaption>{item.caption}</figcaption>
                  </GalleryItem>
                ))}
              </GalleryGrid>
            </Reveal>
          </SplitPanel>

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
