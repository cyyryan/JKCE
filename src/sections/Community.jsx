import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { responsibility } = homeContent

const Section = styled.section`
  padding: 12rem 2.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};

  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const Info = styled.div`
  h2 {
    font-size: clamp(2.5rem, 5.5vw, 5rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 2.5rem;
    em { font-style: italic; }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.25rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 42ch;
    margin-bottom: 2.5rem;
  }
`

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  display: block;
  margin-bottom: 2rem;
`

const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 5 / 4;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 900px) {
    order: -1;
  }
`

const ParallaxImg = styled(motion.img)`
  width: 100%;
  height: 115%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
`

const Checklist = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.9rem;
  margin-bottom: 2rem;

  li {
    padding-left: 1.25rem;
    position: relative;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;

    &::before {
      content: '';
      position: absolute;
      top: 0.62rem;
      left: 0;
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`

export function Community() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <Section>
      <Inner>
        <Grid>
          <Info>
            <Reveal>
              <Eyebrow>{responsibility.eyebrow.en}</Eyebrow>
            </Reveal>
            <h2>
              <RevealText
                lines={[
                  responsibility.headingLines.en[0],
                  <em key="e">{responsibility.headingLines.en[1]}</em>,
                ]}
              />
            </h2>
            <Reveal delay={0.2}>
              <p>{responsibility.body.en}</p>
            </Reveal>
            <Reveal delay={0.28}>
              <Checklist>
                {responsibility.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Checklist>
            </Reveal>
            <Reveal delay={0.35}>
              <ArrowLink to={responsibility.cta.to}>{responsibility.cta.en}</ArrowLink>
            </Reveal>
          </Info>

          <Reveal y={60}>
            <ImageBox ref={ref}>
              <ParallaxImg
                src={responsibility.image}
                alt={responsibility.alt}
                style={{ y: imgY }}
              />
            </ImageBox>
          </Reveal>
        </Grid>
      </Inner>
    </Section>
  )
}
