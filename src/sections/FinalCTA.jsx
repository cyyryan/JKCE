import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { homeContent } from '../content/home'
import { companyInfo } from '../content/siteData'

const { finalCta } = homeContent

const Section = styled.section`
  background: ${({ theme }) => theme.colors.industrialDark};
  color: ${({ theme }) => theme.colors.textOnDark};
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.section.paddingY} 2.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.section.paddingYTight} 1.5rem;
  }
`

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1.5rem;
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
  font-size: clamp(2.1rem, 1.5rem + 3.5vw, 3.75rem);
  line-height: 1.02;
  margin-bottom: 1.25rem;
`

const Body = styled.p`
  max-width: 30rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.canvas};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.canvas};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.canvas};
  }
`

const ContactBlock = styled.div`
  align-self: end;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textOnDarkSecondary};
    margin-bottom: 1rem;
  }

  a, p {
    display: block;
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.textOnDark};
    line-height: 1.7;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.bronzeOnDark};
  }

  @media (max-width: 900px) {
    padding-top: 1.5rem;
  }
`

export function FinalCTA() {
  return (
    <Section>
      <Inner>
        <div>
          <Reveal>
            <Eyebrow>{finalCta.eyebrow.en}</Eyebrow>
          </Reveal>
          <Title>
            <RevealText
              lines={[
                finalCta.headingLines.en[0],
                finalCta.headingLines.en[1],
                finalCta.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.12}>
            <Body>{finalCta.body.en}</Body>
          </Reveal>
          <Reveal delay={0.18}>
            <Actions>
              <PrimaryButton to={finalCta.primaryCta.to}>{finalCta.primaryCta.en}</PrimaryButton>
            </Actions>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <ContactBlock>
            <h3>Contact</h3>
            <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
            <a href={companyInfo.emailHref}>{companyInfo.email}</a>
            <p>{companyInfo.address}</p>
          </ContactBlock>
        </Reveal>
      </Inner>
    </Section>
  )
}
