import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { homeContent } from '../content/home'

const { techEdge } = homeContent

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
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 1.02;
`

const Body = styled.p`
  align-self: end;
  max-width: 26rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Card = styled.article`
  padding: 1.5rem 1.35rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.bgPrimary};

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.55;
  }
`

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textMuted};
`

export function TechEdge() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{techEdge.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText lines={techEdge.headingLines.en} />
          </Title>
          <Reveal delay={0.15}>
            <Body>{techEdge.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {techEdge.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <Card>
                <IconBadge>{card.icon}</IconBadge>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}
