import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  Grid,
  Card,
  IconBadge,
  SplitPanel,
  PlainList,
  PlainItem,
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

const PanelTitle = styled.h3`
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.5rem;
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

const StrengthBadge = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.line};
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  flex-shrink: 0;
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

        {/* Company Overview — banner image + first paragraph only */}
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
        </Section>

        {/* Commitments + Core Strengths — merged split panel */}
        <Section>
          <SplitPanel>
            <Reveal>
              <div>
                <PanelTitle>Our Commitments</PanelTitle>
                <DividerList>
                  {aboutContent.promises.map((item, i) => (
                    <DividerItem key={i}>{item}</DividerItem>
                  ))}
                </DividerList>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <PanelTitle>Core Strengths</PanelTitle>
                <DividerList>
                  {aboutContent.strengths.map((s, i) => (
                    <DividerItem key={s.title}>
                      <StrengthBadge>0{i + 1}</StrengthBadge>
                      {s.title}
                    </DividerItem>
                  ))}
                </DividerList>
              </div>
            </Reveal>
          </SplitPanel>
        </Section>

        {/* Mission & Vision — unchanged */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Mission & Vision</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                JKCE's approach is grounded in quality, integrity, safety, and long-term value
                for every client and project.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <ImageTextGrid>
            <Reveal>
              <ImageFrame>
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80"
                  alt="JKCE team planning session"
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

        {/* CTA only — Technology & Capability section removed */}
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
