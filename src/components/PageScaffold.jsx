import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { RevealText } from './RevealText'

export const PageWrapper = styled.div`
  padding: 10rem 2.5rem 7rem;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 4rem;
  }
`

export const PageInner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 3rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.98;
  font-weight: 300;

  em {
    font-style: italic;
  }
`

export const HeroBody = styled.p`
  align-self: end;
  max-width: 34rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.25rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Section = styled.section`
  padding: 4rem 0;
  border-bottom: ${({ $border = true, theme }) =>
    $border ? `1px solid ${theme.colors.line}` : 'none'};
`

export const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SectionLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const SectionLead = styled.p`
  max-width: 48rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const TwoColumnText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.85;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns = 3 }) => `repeat(${$columns}, minmax(0, 1fr))`};
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article`
  padding: 1.75rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.5rem;

  h3 {
    font-size: 1.55rem;
    margin-bottom: 0.9rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
  }
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
`

export const Tag = styled.span`
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.line};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const CTA = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.line};
    max-width: 38rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export function PageHero({ eyebrow, title, titleItalic, body }) {
  return (
    <Hero>
      <div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <HeroTitle>
          <RevealText
            lines={[title, titleItalic ? <em key="italic">{titleItalic}</em> : null].filter(Boolean)}
          />
        </HeroTitle>
      </div>
      <Reveal delay={0.2}>
        <HeroBody>{body}</HeroBody>
      </Reveal>
    </Hero>
  )
}
