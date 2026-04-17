import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { intro } = homeContent

const Section = styled.section`
  padding: 12rem 2.5rem 10rem;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  display: block;
  margin-bottom: 3rem;
`

const Headline = styled.h2`
  font-size: clamp(2.5rem, 6vw, 5.25rem);
  font-weight: 300;
  line-height: 1.02;
  letter-spacing: -0.025em;
  max-width: 20ch;
  margin-bottom: 4rem;

  em {
    font-style: italic;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 48ch;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  div {
    strong {
      display: block;
      font-family: ${({ theme }) => theme.fonts.display};
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 300;
      line-height: 1;
      margin-bottom: 0.5rem;
    }
    span {
      font-size: 0.8125rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`

export function Intro() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{intro.eyebrow.en}</Eyebrow>
        </Reveal>

        <Headline>
          <RevealText
            lines={[
              intro.headlineLines.en[0],
              intro.headlineLines.en[1],
              <em key="e">{intro.headlineLines.en[2]}</em>,
            ]}
            stagger={0.1}
          />
        </Headline>

        <Row>
          <Reveal delay={0.2}>
            <Body>{intro.body.en}</Body>
          </Reveal>

          <Reveal delay={0.35}>
            <Stats>
              {intro.stats.map((s) => (
                <div key={s.value}>
                  <strong>{s.value}</strong>
                  <span>{s.label.en}</span>
                </div>
              ))}
            </Stats>
            <div style={{ marginTop: '2rem' }}>
              <ArrowLink to={intro.cta.to}>{intro.cta.en}</ArrowLink>
            </div>
          </Reveal>
        </Row>
      </Inner>
    </Section>
  )
}
