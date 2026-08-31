import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { homeContent } from '../content/home'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const { hero } = homeContent

const POSTER = '/images/icf/concrete-pump-pour.jpg'

const Section = styled.section`
  position: relative;
  height: 100svh;
  min-height: 560px;
  overflow: hidden;
  background: #000;
`

const VideoLayer = styled(motion.div)`
  position: absolute;
  inset: 0;

  img, video {
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
      rgba(10,12,10,0.4) 0%,
      rgba(10,12,10,0.2) 40%,
      rgba(10,12,10,0.6) 100%
    );
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 7rem 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textOnDark};

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3.5rem;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const ServiceArea = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  opacity: 0.9;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bronzeOnDark};
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.hero};
  line-height: 1;
  letter-spacing: -0.01em;
  max-width: 12ch;
  margin-bottom: 1.75rem;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bronzeOnDark};
  }
`

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

const Summary = styled.div`
  max-width: 44rem;

  p {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: clamp(1.05rem, 1rem + 0.4vw, 1.25rem);
    line-height: 1.55;
    color: rgba(242,240,234,0.86);
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
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

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnDark};
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  .line {
    width: 1px;
    height: 26px;
    background: currentColor;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

export function Hero() {
  const ref = useRef(null)
  const reduceMotion = usePrefersReducedMotion()
  const [showVideo, setShowVideo] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const videoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90])
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  useEffect(() => {
    // 移动端不加载视频,降低加载压力,只展示 poster
    setShowVideo(window.innerWidth >= 768)
  }, [])

  return (
    <Section ref={ref}>
      <VideoLayer style={{ y: videoY, opacity: videoOpacity }}>
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            preload="metadata"
            poster={POSTER}
          >
            <source
              src="https://res.cloudinary.com/dqtbxjgsv/video/upload/f_mp4,q_auto:eco/banner-video-v2_qq8a1i.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <img src={POSTER} alt="" role="presentation" fetchpriority="high" />
        )}
      </VideoLayer>

      <Content>
        <Spacer />

        <ServiceArea
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {hero.serviceArea.en}
        </ServiceArea>

        <Title>
          {hero.titleLines.en.slice(0, 2).map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden', lineHeight: 1 }}>
              <motion.span
                style={{ display: 'inline-block' }}
                initial={reduceMotion ? false : { y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span style={{ display: 'block', overflow: 'hidden', lineHeight: 1 }}>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={reduceMotion ? false : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <em>{hero.titleLines.en[2]}</em>
            </motion.span>
          </span>
        </Title>

        <BottomRow>
          <Summary>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              {hero.body.en}
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
            >
              <Actions>
                <PrimaryButton to={hero.primaryCta.to}>{hero.primaryCta.en}</PrimaryButton>
                <ArrowLink to={hero.secondaryCta.to} dark>{hero.secondaryCta.en}</ArrowLink>
              </Actions>
            </motion.div>
          </Summary>
        </BottomRow>
      </Content>

      <ScrollIndicator
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span>Scroll</span>
        {!reduceMotion && (
          <motion.span
            className="line"
            animate={{ scaleY: [1, 0.3, 1], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </ScrollIndicator>
    </Section>
  )
}
