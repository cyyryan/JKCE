import styled from 'styled-components'
import { Grid, Card, IconBadge } from './PageScaffold'
import { Reveal } from './Reveal'

const ContactLink = styled.a`
  display: inline-block;
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.6;
`

export function ContactInfoCards({ items }) {
  return (
    <Grid>
      {items.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.08}>
          <Card>
            <IconBadge>{item.icon}</IconBadge>
            <h3>{item.label}</h3>
            <ContactLink
              href={item.href}
              target={item.href.startsWith('https') ? '_blank' : undefined}
              rel={item.href.startsWith('https') ? 'noreferrer' : undefined}
              aria-label={`${item.label}: ${item.value}`}
            >
              {item.value}
            </ContactLink>
          </Card>
        </Reveal>
      ))}
    </Grid>
  )
}
