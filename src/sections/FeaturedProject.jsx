import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { featured } = homeContent

const Section = styled.section`
  padding: 0 2.5rem 12rem;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 768px) {
    padding: 0 1.5rem 6rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Head = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
`

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 400;
`

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 100px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgSecondary};
`

const ParallaxImg = styled(motion.img)`
  width: 100%;
  height: 115%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
`

const Info = styled.div`
  h2 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .loc {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 2.5rem;
    display: block;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.25rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 40ch;
    margin-bottom: 2.5rem;
  }
`

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const ServicePill = styled.span`
  padding: 0.9rem 1rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  div {
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.line};
  }

  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 300;
    margin-bottom: 0.4rem;
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export function FeaturedProject() {
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <Section>
      <Inner>
        <Head>
          <Reveal>
            <SectionTitle>{featured.eyebrow.en}</SectionTitle>
          </Reveal>
          <Reveal delay={0.15}>
            <Badge>{featured.badge.en}</Badge>
          </Reveal>
        </Head>

        <Grid>
          <Reveal y={60}>
            <ImageBox ref={imageRef}>
              <ParallaxImg
                src={featured.image}
                alt={featured.alt}
                style={{ y: imgY }}
              />
            </ImageBox>
          </Reveal>

          <Info>
            <h2>
              <RevealText text={featured.title.en} />
            </h2>
            <Reveal delay={0.1}>
              <span className="loc">{featured.location.en}</span>
            </Reveal>
            <Reveal delay={0.25}>
              <p>{featured.body.en}</p>
            </Reveal>
            <Reveal delay={0.32}>
              <ServiceList>
                {featured.services.map((service) => (
                  <ServicePill key={service}>{service}</ServicePill>
                ))}
              </ServiceList>
            </Reveal>
            <Reveal delay={0.36}>
              <StatRow>
                {featured.stats.map((stat) => (
                  <div key={stat.value}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label.en}</span>
                  </div>
                ))}
              </StatRow>
            </Reveal>
            <Reveal delay={0.4}>
              <ArrowLink to={featured.cta.to}>{featured.cta.en}</ArrowLink>
            </Reveal>
          </Info>
        </Grid>
      </Inner>
    </Section>
  )
}
