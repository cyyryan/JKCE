import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { intro } = homeContent

const Section = styled.section`
  padding: 8rem 2.5rem 7rem;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 4rem;
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
  font-size: clamp(2.25rem, 5vw, 4.5rem);
  font-weight: 300;
  line-height: 1.02;
  letter-spacing: -0.025em;
  max-width: 16ch;
  margin-bottom: 2rem;

  em {
    font-style: italic;
  }
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.05rem, 1.3vw, 1.3rem);
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 56ch;
  margin-bottom: 1.5rem;
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

        <Reveal delay={0.2}>
          <Body>{intro.body.en}</Body>
        </Reveal>

        <Reveal delay={0.3}>
          <ArrowLink to={intro.cta.to}>{intro.cta.en}</ArrowLink>
        </Reveal>
      </Inner>
    </Section>
  )
}
