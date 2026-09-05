import styled from 'styled-components'
import { Grid, Card, IconBadge } from './PageScaffold'
import { Reveal } from './Reveal'

const ContactLink = styled.a`
  display: inline-block;
  margin-top: 0.6rem;
  color: ${({ $dark, theme }) => theme.colors[$dark ? 'textOnDark' : 'ink']};
  line-height: 1.6;
`

const DarkCard = styled(Card)`
  background: ${({ theme }) => theme.colors.industrialDarkAlt};
  border-color: ${({ theme }) => theme.colors.borderDark};

  h3 {
    color: ${({ theme }) => theme.colors.textOnDark};
  }
`

export function ContactInfoCards({ items, dark = false }) {
  const CardComponent = dark ? DarkCard : Card

  return (
    <Grid>
      {items.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.08}>
          <CardComponent>
            <IconBadge>{item.icon}</IconBadge>
            <h3>{item.label}</h3>
            <ContactLink
              $dark={dark}
              href={item.href}
              target={item.href.startsWith('https') ? '_blank' : undefined}
              rel={item.href.startsWith('https') ? 'noreferrer' : undefined}
              aria-label={`${item.label}: ${item.value}`}
            >
              {item.value}
            </ContactLink>
          </CardComponent>
        </Reveal>
      ))}
    </Grid>
  )
}
