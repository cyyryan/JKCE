import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  TwoColumnText,
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
          <TwoColumnText>
            {aboutContent.overview.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </TwoColumnText>
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Our Commitments</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>{aboutContent.promisesIntro}</SectionLead>
            </Reveal>
          </SectionHeader>
          <PlainList>
            {aboutContent.promises.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <PlainItem>
                  <p>{item}</p>
                </PlainItem>
              </Reveal>
            ))}
          </PlainList>
        </Section>

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

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Core Strengths</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Clients trust JKCE because the company combines proven construction fundamentals
                with modern technical capability.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={3}>
            {aboutContent.strengths.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <Card>
                  <IconBadge>{['01', '02', '03'][index]}</IconBadge>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Technology & Capability</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Modern tools only matter when they improve delivery in the field. JKCE pairs
                technical capability with practical construction experience.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <SplitPanel>
            <Reveal>
              <div>
                <h3>Technical Capability</h3>
                <PlainList>
                  {aboutContent.capabilities.map((item) => (
                    <PlainItem key={item}>
                      <p>{item}</p>
                    </PlainItem>
                  ))}
                </PlainList>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3>Service Promise</h3>
                <PlainList>
                  {aboutContent.promise.map((item) => (
                    <PlainItem key={item}>
                      <p>{item}</p>
                    </PlainItem>
                  ))}
                </PlainList>
              </div>
            </Reveal>
          </SplitPanel>

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
