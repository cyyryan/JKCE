import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { ProjectCard } from '../components/ProjectCard'
import { homeContent } from '../content/home'
import { projects } from '../content/siteData'

const { projects: projectsContent } = homeContent

// 首页旗舰案例(Tlowitsis Nation)已在 FeaturedCase 中展示,这里展示其余项目
const otherProjects = projects.filter((project) => project.slug !== 'tlowitsis-nation')
const homeProjects = [
  ...otherProjects.filter((project) => project.featuredOnHome),
  ...otherProjects.filter((project) => !project.featuredOnHome),
].slice(0, 4)

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
  margin-bottom: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  gap: 3rem;
  margin-bottom: 2.5rem;
  align-items: end;

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
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export function MoreProjects() {
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
          <Reveal delay={0.12}>
            <Body>{projectsContent.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {homeProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>

        <Reveal delay={0.2}>
          <ArrowLink to={projectsContent.cta.to}>{projectsContent.cta.en}</ArrowLink>
        </Reveal>
      </Inner>
    </Section>
  )
}
