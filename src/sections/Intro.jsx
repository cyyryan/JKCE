import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { StatementBlock } from '../components/PageScaffold'
import { homeContent } from '../content/home'

const { intro } = homeContent

const Section = styled.section`
  background: ${({ theme }) => theme.colors.canvas};
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  padding: ${({ theme }) => theme.section.paddingY} 3.5rem ${({ theme }) => theme.section.paddingY} 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  margin-left: auto;

  @media (max-width: 1200px) {
    padding: ${({ theme }) => theme.section.paddingYTight} 2.5rem;
  }

  @media (max-width: 900px) {
    padding: ${({ theme }) => theme.section.paddingYTight} 1.5rem;
    max-width: unset;
    margin-left: 0;
    order: 2;
  }
`

const ImageWrap = styled.div`
  overflow: hidden;
  min-height: 520px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    min-height: 300px;
    order: 1;
  }
`

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
  display: block;
  margin-bottom: 2rem;
`

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 1.4rem + 3.5vw, 3.75rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  max-width: 16ch;
  margin-bottom: 1.75rem;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bronzeText};
  }
`

const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSecondary};
  max-width: 52ch;
  margin-bottom: 1.25rem;
`


export function Intro() {
  return (
    <Section>
      <Content>
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
            stagger={0.08}
          />
        </Headline>

        <Reveal delay={0.15}>
          <Body>{intro.body.en}</Body>
        </Reveal>

        <Reveal delay={0.2} variant="side" style={{ marginBottom: '1.75rem' }}>
          <StatementBlock>{intro.differentiator.en}</StatementBlock>
        </Reveal>

        <Reveal delay={0.25}>
          <ArrowLink to={intro.cta.to}>{intro.cta.en}</ArrowLink>
        </Reveal>
      </Content>

      <ImageWrap>
        <img
          src={intro.image.src}
          alt={intro.image.alt}
          loading="lazy"
        />
      </ImageWrap>
    </Section>
  )
}
