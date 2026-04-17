import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { companyInfo, primaryNav } from '../content/siteData'

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
        <Top>
          <Reveal>
            <Brand>
              <h3>JKCE construction<br />built with care.</h3>
              <p>
                Full-service construction support across excavation,
                construction management, design service, and ICF capability.
              </p>
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
                <li><p>3600 Viking Way,<br />Richmond, BC V6V 1N6</p></li>
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
          <span>Built on a centralized production-ready content structure</span>
        </Bottom>
      </Inner>
    </Wrapper>
  )
}
