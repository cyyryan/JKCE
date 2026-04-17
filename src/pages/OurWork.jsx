import { useMemo, useState } from 'react'
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
  Meta,
  TagRow,
  Tag,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { projects } from '../content/siteData'

const filters = ['All', 'Earthwork', 'Construction Management']

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <PageWrapper>
      <PageInner>
        <PageHero
          eyebrow="Our Work"
          title="Projects that show"
          titleItalic="how JKCE operates."
          body="This page replaces the old unfinished project index and carries over the original role of showcasing categories, examples, and project credibility."
        />

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Project Index</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Instead of the former placeholder `Homes` route, the new project now has a dedicated `Our Work` page aligned with the old repository’s structure.</SectionLead>
            </Reveal>
          </SectionHeader>

          <Reveal delay={0.12}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '999px',
                    border: '1px solid',
                    borderColor: activeFilter === filter ? 'transparent' : '#D4CDBD',
                    background: activeFilter === filter ? '#1F2A24' : '#F5F1EA',
                    color: activeFilter === filter ? '#F5F1EA' : '#1F2A24',
                    fontSize: '0.75rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>

          <Grid>
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.05}>
                <Card>
                  <Meta>
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </Meta>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <TagRow>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagRow>
                </Card>
              </Reveal>
            ))}
          </Grid>

          <CTA>
            <div>
              <h3>Need a similar project breakdown for future case-study pages?</h3>
              <p>The route structure is in place now, so we can later expand each project into its own detail page without changing the navigation again.</p>
            </div>
            <CTAButton to="/contact">Start a Conversation</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
