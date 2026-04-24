import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { intro } = homeContent

const Section = styled.section`
  background: ${({ theme }) => theme.colors.bgPrimary};
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  padding: 8rem 4rem 7rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 680px;
  margin-left: auto;

  @media (max-width: 1200px) {
    padding: 7rem 3rem 6rem 2rem;
  }

  @media (max-width: 900px) {
    padding: 5rem 1.5rem 4rem;
    max-width: unset;
    margin-left: 0;
  }
`

const ImageWrap = styled.div`
  overflow: hidden;
  min-height: 580px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    min-height: 320px;
  }
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
            stagger={0.1}
          />
        </Headline>

        <Reveal delay={0.2}>
          <Body>{intro.body.en}</Body>
        </Reveal>

        <Reveal delay={0.3}>
          <ArrowLink to={intro.cta.to}>{intro.cta.en}</ArrowLink>
        </Reveal>
      </Content>

      <ImageWrap>
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
          alt="JKCE construction team on site"
          loading="lazy"
        />
      </ImageWrap>
    </Section>
  )
}
