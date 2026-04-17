import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { homeContent } from '../content/home'

const { whyChoose } = homeContent

const Section = styled.section`
  padding: 8rem 2.5rem;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};

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
  margin-bottom: 2rem;

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
  color: ${({ theme }) => theme.colors.line};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  padding: 1.35rem;
  border: 1px solid ${({ theme }) => theme.colors.lineDark};
  background: ${({ theme }) => theme.colors.bgAccent};
  min-height: 100%;

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 0.9rem;
  }

  p {
    color: ${({ theme }) => theme.colors.line};
    line-height: 1.55;
  }
`

export function WhyChoose() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{whyChoose.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText
              lines={[
                whyChoose.headingLines.en[0],
                whyChoose.headingLines.en[1],
                whyChoose.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.15}>
            <Body>{whyChoose.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {whyChoose.advantages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}
