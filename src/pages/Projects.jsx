import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
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
import { pageMeta, projects, projectsPageContent } from '../content/siteData'

const FilterButton = styled.button`
  min-height: 44px;
  padding: 0.7rem 1.1rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.ink : theme.colors.border)};
  background: ${({ $active, theme }) => ($active ? theme.colors.ink : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.canvas : theme.colors.ink)};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
  }
`

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
`

const EmptyState = styled.div`
  padding: 3.5rem 2rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    margin-top: 0.5rem;
  }
`

// 稳定的筛选键 —— 基于 project.serviceSlugs,与服务体系一一对应(含 ICF)
const PROJECT_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'excavation', label: 'Excavation' },
  { key: 'construction-management', label: 'Construction Management' },
  { key: 'design-service', label: 'Design Service' },
  { key: 'icf', label: 'ICF' },
]

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeFilter = searchParams.get('service') || 'all'

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.serviceSlugs.includes(activeFilter))
  }, [activeFilter])

  const setFilter = (key) => {
    if (key === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ service: key })
    }
  }

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
            <FilterRow role="group" aria-label="Filter projects by service">
              {PROJECT_FILTERS.map((filter) => (
                <FilterButton
                  key={filter.key}
                  type="button"
                  onClick={() => setFilter(filter.key)}
                  $active={activeFilter === filter.key}
                  aria-pressed={activeFilter === filter.key}
                >
                  {filter.label}
                </FilterButton>
              ))}
            </FilterRow>
          </Reveal>

          {visibleProjects.length > 0 ? (
            <Grid $columns={2}>
              {visibleProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </Grid>
          ) : (
            <Reveal>
              <EmptyState>
                <SectionLabel as="p">No matching projects</SectionLabel>
                <p>Try a different filter, or contact JKCE directly to discuss a project with similar scope.</p>
              </EmptyState>
            </Reveal>
          )}

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
