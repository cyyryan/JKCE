import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealText } from '../components/RevealText'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'

const { hero } = homeContent

const Section = styled.section`
  position: relative;
  height: 100vh;
  min-height: 640px;
  overflow: hidden;
  background: #000;
`

const VideoLayer = styled(motion.div)`
  position: absolute;
  inset: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.3) 0%,
      rgba(0,0,0,0.15) 40%,
      rgba(0,0,0,0.5) 100%
    );
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 6rem;
  color: ${({ theme }) => theme.colors.textOnDark};

  @media (max-width: 768px) {
    padding: 0 1.5rem 4rem;
  }
`

const Eyebrow = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8125rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2rem;
  opacity: 0.85;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 300;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 1;
  letter-spacing: -0.03em;
  max-width: 14ch;
  margin-bottom: 3rem;

  em {
    font-style: italic;
    font-weight: 300;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnDark};
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  .line {
    width: 1px;
    height: 32px;
    background: currentColor;
  }
`

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <Section ref={ref}>
      <VideoLayer style={{ y: videoY, opacity: videoOpacity }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        >
          <source src="/videos/banner-video-v2.mp4" type="video/mp4" />
        </video>
      </VideoLayer>

      <Content>
        <Eyebrow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {hero.eyebrow.en}
        </Eyebrow>

        <Title>
          <RevealText
            lines={[
              hero.titleLines.en[0],
              hero.titleLines.en[1],
              <em key="e">{hero.titleLines.en[2]}</em>,
            ]}
            delay={1}
            stagger={0.15}
          />
        </Title>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <ArrowLink to={hero.cta.to} dark>{hero.cta.en}</ArrowLink>
        </motion.div>
      </Content>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span>Scroll</span>
        <motion.span
          className="line"
          animate={{ scaleY: [1, 0.3, 1], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollIndicator>
    </Section>
  )
}
