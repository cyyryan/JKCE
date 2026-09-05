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

/* 桌面端左侧标题 sticky,右侧技术条目随滚动进入;平板/移动端取消 sticky */
const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const StickyCol = styled.div`
  position: sticky;
  top: 6.5rem;

  @media (max-width: 900px) {
    position: static;
  }
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

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 1.5rem + 3vw, 3.25rem);
  line-height: 1.05;
  margin-bottom: 1.25rem;
`

const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
  margin-bottom: 1.75rem;
  max-width: 32ch;
`

const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  gap: 0.5rem 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
`

const Num = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.bronzeOnDark};
`

const RowTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding-top: 0.15rem;
`

const RowValue = styled.p`
  grid-column: 2 / -1;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
  max-width: 46ch;
`

export function TechCapability() {
  return (
    <Section>
      <Inner>
        <Grid>
          <StickyCol>
            <Reveal>
              <Eyebrow>{techEdge.eyebrow.en}</Eyebrow>
            </Reveal>
            <Title>
              <RevealText
                lines={[
                  techEdge.headingLines.en[0],
                  techEdge.headingLines.en[1],
                  techEdge.headingLines.en[2],
                ]}
              />
            </Title>
            <Reveal delay={0.1}>
              <Body>{techEdge.body.en}</Body>
            </Reveal>
            <Reveal delay={0.15}>
              <ArrowLink to={techEdge.cta.to} dark>{techEdge.cta.en}</ArrowLink>
            </Reveal>
          </StickyCol>

          <List>
            {techEdge.cards.map((card, i) => (
              <Reveal key={card.title} variant="side" delay={i * 0.06}>
                <Row>
                  <Num>{String(i + 1).padStart(2, '0')}</Num>
                  <RowTitle>{card.title}</RowTitle>
                  <RowValue>{card.value}</RowValue>
                </Row>
              </Reveal>
            ))}
          </List>
        </Grid>
      </Inner>
    </Section>
  )
}
