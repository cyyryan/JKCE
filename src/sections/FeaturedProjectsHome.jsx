import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { ProjectCard } from '../components/ProjectCard'
import { homeContent } from '../content/home'
import { getFeaturedProjects } from '../content/siteData'

const { projects: projectsContent } = homeContent

const featuredProjects = getFeaturedProjects(3)

const Section = styled.section`
  padding: 8rem 2.5rem;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  gap: 3rem;
  margin-bottom: 2.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.02;
  font-weight: 300;
`

const Body = styled.p`
  align-self: end;
  max-width: 28rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export function FeaturedProjectsHome() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{projectsContent.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText
              lines={[
                projectsContent.headingLines.en[0],
                projectsContent.headingLines.en[1],
                projectsContent.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.15}>
            <Body>{projectsContent.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>

        <Reveal delay={0.24}>
          <ArrowLink to={projectsContent.cta.to}>{projectsContent.cta.en}</ArrowLink>
        </Reveal>
      </Inner>
    </Section>
  )
}
