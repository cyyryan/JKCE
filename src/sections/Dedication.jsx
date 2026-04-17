import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { dedication } = homeContent

const Section = styled.section`
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  padding: 12rem 2.5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const Heading = styled.h2`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.02;
  max-width: 16ch;

  em { font-style: italic; }
`

const Body = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.25rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.line};
    max-width: 48ch;
    margin-bottom: 2.5rem;
  }
`

const BgText = styled.span`
  position: absolute;
  right: -2rem;
  bottom: -3rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-style: italic;
  font-size: clamp(10rem, 22vw, 22rem);
  font-weight: 300;
  line-height: 0.9;
  color: ${({ theme }) => theme.colors.lineDark};
  opacity: 0.35;
  pointer-events: none;
  user-select: none;
`

export function Dedication() {
  return (
    <Section>
      <BgText aria-hidden>{dedication.bgText}</BgText>
      <Inner>
        <Heading>
          <RevealText
            lines={[
              dedication.headingLines.en[0],
              <em key="e">{dedication.headingLines.en[1]}</em>,
            ]}
          />
        </Heading>
        <Body>
          <Reveal delay={0.2}>
            <p>{dedication.body.en}</p>
          </Reveal>
          <Reveal delay={0.35}>
            <ArrowLink to={dedication.cta.to} dark>{dedication.cta.en}</ArrowLink>
          </Reveal>
        </Body>
      </Inner>
    </Section>
  )
}
