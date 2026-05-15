import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  SplitPanel,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { aboutContent, pageMeta } from '../content/siteData'
import styled from 'styled-components'

const BannerImage = styled.div`
  width: 100%;
  height: 480px;
  overflow: hidden;
  border-radius: 1.5rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    height: 260px;
  }
`

const ImageTextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ImageFrame = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Blockquote = styled.blockquote`
  margin: 3rem 0 0;
  padding: 2.5rem 3rem;
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 0 1rem 1rem 0;

  p {
    font-family: ${({ theme }) => theme.fonts.display};
    font-style: italic;
    font-size: clamp(1.1rem, 1.8vw, 1.5rem);
    font-weight: 300;
    line-height: 1.55;
    color: inherit;
    margin: 0 0 0.75rem;
  }

  cite {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.75rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    font-style: normal;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`

const DividerList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`

const DividerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export default function About() {
  return (
    <PageWrapper>
      <Seo {...pageMeta.about} />
      <PageInner>
        <PageHero
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          titleItalic={aboutContent.titleItalic}
          body={aboutContent.intro}
        />

        {/* Company Overview — banner image + overview + Tredgold quote */}
        <Section>
          <Reveal>
            <BannerImage>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
                alt="JKCE construction site overview"
                loading="lazy"
              />
            </BannerImage>
          </Reveal>
          <SectionHeader>
            <Reveal><SectionLabel>Company Overview</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                JKCE is a full-service construction company built on over 20 years of experience,
                professionalism, quality, and integrity.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <p style={{ lineHeight: 1.8, maxWidth: '72ch', color: 'inherit' }}>
              {aboutContent.overview[0]}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Blockquote>
              <p>"Engineering is the art of directing the great sources of power in nature for the use and convenience of man."</p>
              <cite>— Thomas Tredgold</cite>
            </Blockquote>
          </Reveal>
        </Section>

        {/* Our Commitments — full width divider list */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Our Commitments</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{aboutContent.promisesIntro}</SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <DividerList>
              {aboutContent.promises.map((item, i) => (
                <DividerItem key={i}>{item}</DividerItem>
              ))}
            </DividerList>
          </Reveal>
        </Section>

        {/* Mission & Vision */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Mission & Vision</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Grounded in quality, safety, and sustainability — built to serve Greater Vancouver.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <ImageTextGrid>
            <Reveal>
              <ImageFrame>
                <img
                  src="/images/about/mission-vision-team.jpg"
                  alt="JKCE team reviewing material samples during a planning meeting"
                  loading="lazy"
                />
              </ImageFrame>
            </Reveal>
            <div>
              <Reveal>
                <div style={{ marginBottom: '2rem' }}>
                  <h3>Mission</h3>
                  <p style={{ marginTop: '0.5rem', color: 'inherit', lineHeight: 1.7 }}>{aboutContent.mission}</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <h3>Vision</h3>
                  <p style={{ marginTop: '0.5rem', color: 'inherit', lineHeight: 1.7 }}>{aboutContent.vision}</p>
                </div>
              </Reveal>
            </div>
          </ImageTextGrid>
        </Section>

        {/* CTA */}
        <Section $border={false}>
          <CTA>
            <div>
              <h3>{aboutContent.cta.title}</h3>
              <p>{aboutContent.cta.body}</p>
            </div>
            <CTAButton to={aboutContent.cta.to}>{aboutContent.cta.button}</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
