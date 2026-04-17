import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { services } from '../content/siteData'
import { homeContent } from '../content/home'

const { services: servicesContent } = homeContent

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

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 3rem;
  margin-bottom: 2.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.02;
  font-weight: 300;
`

const Body = styled.p`
  align-self: end;
  max-width: 28rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 1.5rem;

  h3 {
    font-size: 1.35rem;
    margin-bottom: 0.7rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.55;
    margin-bottom: 1rem;
  }
`

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
`

const ServiceLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

export function CoreServices() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{servicesContent.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText
              lines={[
                servicesContent.headingLines.en[0],
                servicesContent.headingLines.en[1],
                servicesContent.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.15}>
            <Body>{servicesContent.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <Card>
                <Icon>{service.icon}</Icon>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <ServiceLink to={`/services/${service.slug}`}>Learn More</ServiceLink>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}
