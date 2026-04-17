import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { homeContent } from '../content/home'
import { companyInfo } from '../content/siteData'

const { finalCta } = homeContent

const Section = styled.section`
  padding: 0 2.5rem 8rem;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 768px) {
    padding: 0 1.5rem 4rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Panel = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  border-radius: 2rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
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
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.02;
  font-weight: 300;
  margin-bottom: 1rem;
`

const Body = styled.p`
  max-width: 28rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.line};
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
  padding: 1rem 1.25rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const ContactBlock = styled.div`
  align-self: end;

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.8rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  a, p {
    display: block;
    color: ${({ theme }) => theme.colors.line};
    line-height: 1.7;
  }
`

export function FinalCTA() {
  return (
    <Section>
      <Inner>
        <Panel>
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
            <Reveal delay={0.15}>
              <Body>{finalCta.body.en}</Body>
            </Reveal>
            <Reveal delay={0.24}>
              <Actions>
                <PrimaryButton to={finalCta.primaryCta.to}>{finalCta.primaryCta.en}</PrimaryButton>
              </Actions>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <ContactBlock>
              <h3>Contact</h3>
              <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
              <a href={companyInfo.emailHref}>{companyInfo.email}</a>
              <p>{companyInfo.address}</p>
            </ContactBlock>
          </Reveal>
        </Panel>
      </Inner>
    </Section>
  )
}
