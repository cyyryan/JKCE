import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { icf } = homeContent

const Section = styled.section`
  padding: 10rem 2.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.95fr);
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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

const Title = styled.h2`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1.02;
  margin-bottom: 2rem;
`

const Body = styled.p`
  max-width: 40rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`

const HighlightPanel = styled.div`
  padding: 1.75rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.75rem;
`

const HighlightItem = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.8rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

const HighlightTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export function ICFHighlight() {
  return (
    <Section>
      <Inner>
        <div>
          <Reveal>
            <Eyebrow>{icf.eyebrow.en}</Eyebrow>
          </Reveal>
          <Title>
            <RevealText
              lines={[
                icf.headingLines.en[0],
                icf.headingLines.en[1],
                icf.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.15}>
            <Body>{icf.body.en}</Body>
          </Reveal>
          <Reveal delay={0.24}>
            <ArrowLink to={icf.cta.to}>{icf.cta.en}</ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={50}>
          <HighlightPanel>
            <HighlightTitle>Why It Matters</HighlightTitle>
            {icf.highlights.map((item) => (
              <HighlightItem key={item}>
                <span>{item}</span>
              </HighlightItem>
            ))}
          </HighlightPanel>
        </Reveal>
      </Inner>
    </Section>
  )
}
