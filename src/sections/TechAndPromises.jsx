import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { homeContent } from '../content/home'

const { techEdge, whyChoose } = homeContent

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Panel = styled.div`
  padding: 5rem 4rem;

  @media (max-width: 1200px) {
    padding: 5rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`

const LightPanel = styled(Panel)`
  background: ${({ theme }) => theme.colors.bgPrimary};
`

const DarkPanel = styled(Panel)`
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
`

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Title = styled.h2`
  font-size: clamp(1.75rem, 2.5vw, 2.75rem);
  font-weight: 300;
  line-height: 1.08;
  margin-bottom: 2.5rem;

  em {
    font-style: italic;
  }
`

const List = styled.div`
  border-top: 1px solid ${({ $dark, theme }) =>
    $dark ? theme.colors.lineDark : theme.colors.line};
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ $dark, theme }) =>
    $dark ? theme.colors.lineDark : theme.colors.line};
`

const ItemLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  flex: 1;
`

const Badge = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.line};
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  flex-shrink: 0;
`

export function TechAndPromises() {
  return (
    <Section>
      <LightPanel>
        <Reveal>
          <Eyebrow>{techEdge.eyebrow.en}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Title>Technology<br />&amp; precision.</Title>
        </Reveal>
        <List>
          {techEdge.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.04}>
              <ListItem>
                <Badge>{card.icon}</Badge>
                <ItemLabel>{card.title}</ItemLabel>
              </ListItem>
            </Reveal>
          ))}
        </List>
      </LightPanel>

      <DarkPanel>
        <Reveal>
          <Eyebrow>{whyChoose.eyebrow.en}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Title>
            Six commitments,<br /><em>every project.</em>
          </Title>
        </Reveal>
        <List $dark>
          {whyChoose.advantages.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <ListItem $dark>
                <ItemLabel>{item.title}</ItemLabel>
              </ListItem>
            </Reveal>
          ))}
        </List>
      </DarkPanel>
    </Section>
  )
}
