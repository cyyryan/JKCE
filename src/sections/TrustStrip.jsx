import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { homeContent } from '../content/home'

const { trustStrip } = homeContent

const Section = styled.section`
  background: ${({ theme }) => theme.colors.industrialDark};
  color: ${({ theme }) => theme.colors.textOnDark};
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 1.75rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    gap: 1.5rem 2rem;
  }
`

const StatItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-shrink: 0;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.bronzeOnDark};
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textOnDarkSecondary};
  }
`

const Divider = styled.span`
  width: 1px;
  height: 1.5rem;
  background: ${({ theme }) => theme.colors.borderDark};
  flex-shrink: 0;

  @media (max-width: 640px) {
    display: none;
  }
`

const CapabilityTag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
  flex-shrink: 0;
`

export function TrustStrip() {
  return (
    <Section>
      <Reveal as="div" y={12} duration={0.5}>
        <Inner>
          {trustStrip.items.map((item, i) => (
            <div key={item.label.en} style={{ display: 'contents' }}>
              {item.value ? (
                <StatItem>
                  <strong>{item.value}</strong>
                  <span>{item.label.en}</span>
                </StatItem>
              ) : (
                <CapabilityTag>{item.label.en}</CapabilityTag>
              )}
              {i < trustStrip.items.length - 1 && <Divider aria-hidden="true" />}
            </div>
          ))}
        </Inner>
      </Reveal>
    </Section>
  )
}
