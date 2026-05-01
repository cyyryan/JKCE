import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { companyInfo, primaryNav } from '../content/siteData'

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.25s;

    &:hover {
      color: ${({ theme }) => theme.colors.textOnDark};
    }
  }
`

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  padding: 8rem 2.5rem 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 2rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineDark};

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-bottom: 3rem;
  }
`

const Brand = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-style: italic;
    font-weight: 300;
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1;
    margin-bottom: 2rem;
  }
  p {
    max-width: 360px;
    color: ${({ theme }) => theme.colors.line};
    line-height: 1.7;
  }
`

const SocialRow = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1.75rem;
`

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.lineDark};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: border-color 0.25s, color 0.25s;

  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.textOnDark};
    color: ${({ theme }) => theme.colors.textOnDark};
  }
`

const BbbSeal = styled.a`
  display: inline-flex;
  align-items: center;

  img {
    height: 40px;
    width: auto;
    display: block;
    opacity: 0.85;
    transition: opacity 0.25s;
  }

  &:hover img {
    opacity: 1;
  }
`

const Col = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  a, p {
    color: ${({ theme }) => theme.colors.line};
    font-size: 0.9375rem;
    transition: color 0.3s;
    line-height: 1.5;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.textOnDark};
  }
`

const Newsletter = styled.form`
  margin-top: 0.5rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineDark};

  input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.75rem 0;
    color: ${({ theme }) => theme.colors.textOnDark};
    font-family: inherit;
    font-size: 0.9375rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
    }
    &:focus {
      outline: none;
    }
  }

  button {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textOnDark};
    padding: 0 0.5rem;
    transition: opacity 0.3s;

    &:hover { opacity: 0.6; }
  }
`

const SrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const HiringBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 2rem;
  margin-bottom: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.lineDark};
  border-radius: 1.25rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.25rem 1.5rem;
    margin-bottom: 3rem;
  }
`

const HiringText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const HiringLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.bgAccent};
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  flex-shrink: 0;
`

const HiringTitle = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textOnDark};
  letter-spacing: -0.01em;
`

const HiringLink = styled(Link)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.textOnDark};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnDark};
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.textOnDark};
    color: ${({ theme }) => theme.colors.bgDark};
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

export function Footer() {
  return (
    <Wrapper>
      <Inner>
        <HiringBanner>
          <HiringText>
            <HiringLabel>We're hiring</HiringLabel>
            <HiringTitle>Project Manager — Greater Vancouver</HiringTitle>
          </HiringText>
          <HiringLink to="/careers">View Roles →</HiringLink>
        </HiringBanner>

        <Top>
          <Reveal>
            <Brand>
              <h3>JKCE construction<br />built with care.</h3>
              <p>
                Full-service construction support across excavation,
                construction management, design service, and ICF capability.
              </p>
              <SocialRow>
                <SocialIcon href="https://www.instagram.com/jkceprobuild/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/jkceprobuild/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/jkceprobuild/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialIcon>
              </SocialRow>
            </Brand>
          </Reveal>

          <Reveal delay={0.1}>
            <Col>
              <h4>Explore</h4>
              <ul>
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Reveal>

          <Reveal delay={0.2}>
            <Col>
              <h4>Visit</h4>
              <ul>
                <li><p>14671 Burrows Rd,<br />Richmond, BC V6V 1K9</p></li>
                <li><a href={companyInfo.phoneHref}>{companyInfo.phone}</a></li>
                <li><a href={companyInfo.emailHref}>{companyInfo.email}</a></li>
              </ul>
            </Col>
          </Reveal>

          <Reveal delay={0.3}>
            <Col>
              <h4>Newsletter</h4>
              <p style={{ marginBottom: '1rem' }}>
                Updates on projects and initiatives.
              </p>
              <Newsletter onSubmit={(e) => e.preventDefault()}>
                <SrOnly htmlFor="newsletter-email">Email address</SrOnly>
                <input id="newsletter-email" type="email" placeholder="your@email.com" aria-label="Email address" />
                <button type="submit" aria-label="Subscribe to the newsletter">Subscribe →</button>
              </Newsletter>
            </Col>
          </Reveal>
        </Top>

        <Bottom>
          <span>© 2026 {companyInfo.name}.</span>
          <LegalLinks>
            <Link to="/careers">Join Our Team</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </LegalLinks>
          <BbbSeal
            href="https://www.bbb.org/ca/bc/richmond/profile/general-contractor/jkce-probuild-contracting-corp-0037-2433919/#sealclick"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JKCE BBB Business Review"
          >
            <img src="/blue-seal-250-52-bbb-2433919.png" alt="BBB Accredited Business" />
          </BbbSeal>
        </Bottom>
      </Inner>
    </Wrapper>
  )
}
