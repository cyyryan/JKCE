import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  CTA,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import styled from 'styled-components'

const PositionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PositionCard = styled.div`
  padding: 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }
`

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.7rem 1.4rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.canvas};
  }
`

const POSITIONS = [
  {
    title: 'Project Manager',
    description:
      'Oversee construction projects from planning through closeout across residential and commercial work in Greater Vancouver. Coordinate with clients, trades, and site teams to ensure on-time, on-budget delivery.',
    link: 'https://ca.indeed.com/cmp/Lj-Supplies?campaignid=mobvjcmp&from=mobviewjob&tk=1jnih9lls2c5r000&fromjk=7f8c04bddba2212c',
  },
]

export default function Careers() {
  return (
    <PageWrapper>
      <Seo
        title="Join Our Team | JKCE Probuild"
        description="Explore open positions at JKCE Probuild — a full-service construction company operating across Greater Vancouver."
      />
      <PageInner>
        <PageHero
          eyebrow="Careers"
          title="Grow with"
          titleItalic="our team."
          body="JKCE is built on experienced people who take pride in their work. If you're looking for a team that values quality, accountability, and long-term growth — we want to hear from you."
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Open Positions</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                We are currently hiring for the following roles. Apply directly via Indeed
                or send your CV to{' '}
                <a href="mailto:careers@jkceprobuild.com" style={{ textDecoration: 'underline' }}>
                  careers@jkceprobuild.com
                </a>.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <PositionGrid>
            {POSITIONS.map((pos, i) => (
              <Reveal key={pos.title} delay={i * 0.08}>
                <PositionCard>
                  <h3>{pos.title}</h3>
                  <p>{pos.description}</p>
                  <ApplyButton href={pos.link} target="_blank" rel="noopener noreferrer">
                    Apply on Indeed →
                  </ApplyButton>
                </PositionCard>
              </Reveal>
            ))}
          </PositionGrid>
        </Section>

        <Section $border={false}>
          <CTA>
            <div>
              <h3>Don't see the right role?</h3>
              <p>
                Send your resume and a brief introduction to{' '}
                <a href="mailto:careers@jkceprobuild.com" style={{ textDecoration: 'underline' }}>
                  careers@jkceprobuild.com
                </a>{' '}
                — we keep strong candidates on file for future openings.
              </p>
            </div>
            <ApplyButton href="mailto:careers@jkceprobuild.com">Email Careers</ApplyButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
