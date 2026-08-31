import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { techEdge } = homeContent

const Section = styled.section`
  padding: ${({ theme }) => theme.section.paddingY} 2.5rem;
  background: ${({ theme }) => theme.colors.industrialDark};
  color: ${({ theme }) => theme.colors.textOnDark};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.section.paddingYTight} 1.5rem;
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
  color: ${({ theme }) => theme.colors.bronzeOnDark};
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
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
`

const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 3.5rem 14rem 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 3rem 1fr;

    > *:nth-child(3) {
      grid-column: 2 / -1;
    }
  }
`

const Num = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.bronzeOnDark};
`

const RowTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding-top: 0.15rem;
`

const RowValue = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
`

const Foot = styled.div`
  margin-top: 2.5rem;
`

export function TechCapability() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{techEdge.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText
              lines={[
                techEdge.headingLines.en[0],
                techEdge.headingLines.en[1],
                techEdge.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.12}>
            <Body>{techEdge.body.en}</Body>
          </Reveal>
        </Head>

        <List>
          {techEdge.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.04}>
              <Row>
                <Num>{String(i + 1).padStart(2, '0')}</Num>
                <RowTitle>{card.title}</RowTitle>
                <RowValue>{card.value}</RowValue>
              </Row>
            </Reveal>
          ))}
        </List>

        <Foot>
          <Reveal delay={0.15}>
            <ArrowLink to={techEdge.cta.to} dark>{techEdge.cta.en}</ArrowLink>
          </Reveal>
        </Foot>
      </Inner>
    </Section>
  )
}
