import { useMemo, useState } from 'react'
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
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { pageMeta, projects, projectsPageContent, services } from '../content/siteData'

const FilterButton = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 999px;
  border: 1px solid ${({ $active, theme }) => ($active ? 'transparent' : theme.colors.line)};
  background: ${({ $active, theme }) => ($active ? theme.colors.bgDark : theme.colors.bgPrimary)};
  color: ${({ $active, theme }) => ($active ? theme.colors.textOnDark : theme.colors.textPrimary)};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const projectFilters = ['All', ...services.map((service) => service.name)]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <PageWrapper>
      <Seo {...pageMeta.projects} />
      <PageInner>
        <PageHero
          eyebrow={projectsPageContent.eyebrow}
          title={projectsPageContent.title}
          titleItalic={projectsPageContent.titleItalic}
          body={projectsPageContent.intro}
        />

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Project Index</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{projectsPageContent.overview}</SectionLead>
            </Reveal>
          </SectionHeader>

          <Reveal delay={0.12}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {projectFilters.map((filter) => (
                <FilterButton
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  $active={activeFilter === filter}
                  aria-pressed={activeFilter === filter}
                  aria-label={`Filter projects by ${filter}`}
                >
                  {filter}
                </FilterButton>
              ))}
            </div>
          </Reveal>

          <Grid $columns={2}>
            {visibleProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </Grid>

          <CTA>
            <div>
              <h3>Need a contractor with relevant project experience?</h3>
              <p>Talk with JKCE about a project with similar scope.</p>
            </div>
            <CTAButton to="/contact">Contact Us</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
