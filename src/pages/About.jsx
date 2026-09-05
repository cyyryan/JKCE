import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  SectionLabelOnDark,
  SectionLeadOnDark,
  MediaFrame,
  Grid,
  Card,
  DividerList,
  DividerItem,
  StatementBlock,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { aboutContent, pageMeta } from '../content/siteData'
import { homeContent } from '../content/home'
import styled from 'styled-components'

const ImageTextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`

const Blockquote = styled.blockquote`
  margin: 2.5rem 0 0;
  padding: 2rem 2.5rem;
  border-left: 3px solid ${({ theme }) => theme.colors.bronze};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0 ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md} 0;

  p {
    font-family: ${({ theme }) => theme.fonts.display};
    font-style: italic;
    font-size: clamp(1.1rem, 1rem + 0.8vw, 1.5rem);
    font-weight: 500;
    line-height: 1.5;
    color: inherit;
    margin: 0 0 0.75rem;
  }

  cite {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.inkMuted};
    font-style: normal;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const CommitmentList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
  margin-top: 2rem;
`

const CommitmentItem = styled.div`
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};

  span:first-child {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.bronzeOnDark};
  }

  p {
    font-size: 0.92rem;
    line-height: 1.55;
    margin: 0;
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

        {/* Company Overview — 核心声明 + 真实图片 + 支撑说明 */}
        <Section>
          <Reveal>
            <MediaFrame $ratio="21 / 9">
              <img
                src="/images/icf/site-overview-crane.jpg"
                alt="JKCE job site overview with crane, excavation equipment, and framed structure"
                loading="lazy"
              />
            </MediaFrame>
          </Reveal>
          <div style={{ marginTop: '2rem' }}>
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
              <p style={{ lineHeight: 1.8, maxWidth: '68ch', color: 'inherit', marginBottom: '2rem' }}>
                {aboutContent.overview[0]}
              </p>
            </Reveal>
            <Reveal variant="side">
              <StatementBlock>
                From site planning and design to on-site management and quality control — one
                accountable team, every stage, to specification.
              </StatementBlock>
            </Reveal>
            <Reveal delay={0.1}>
              <Blockquote>
                <p>"Engineering is the art of directing the great sources of power in nature for the use and convenience of man."</p>
                <cite>— Thomas Tredgold</cite>
              </Blockquote>
            </Reveal>
          </div>
        </Section>

        {/* Strengths */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Why It Matters</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>What two decades of field experience gives every JKCE project.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={3}>
            {aboutContent.strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <Card>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        {/* Technical Capabilities */}
        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Technology-Assisted Delivery</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Design coordination and site work backed by modern tools — not a replacement
                for field experience, but a way to make it more accurate.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <DividerList>
              {aboutContent.capabilities.map((item) => (
                <DividerItem key={item}>{item}</DividerItem>
              ))}
            </DividerList>
          </Reveal>
        </Section>
      </PageInner>

      {/* Our Commitments — Dark Section,突出 accountable delivery */}
      <Section $tone="dark" $border={false}>
        <PageInner>
          <SectionHeader>
            <Reveal><SectionLabelOnDark>Our Commitments</SectionLabelOnDark></Reveal>
            <Reveal delay={0.1}>
              <SectionLeadOnDark>{aboutContent.promisesIntro}</SectionLeadOnDark>
            </Reveal>
          </SectionHeader>
          <Reveal variant="mask" as="div">
            <StatementBlock dark>
              {homeContent.whyChoose.advantages[0].body}
            </StatementBlock>
          </Reveal>
          <CommitmentList>
            {aboutContent.promises.map((item, i) => (
              <Reveal key={item} variant="side" delay={i * 0.05}>
                <CommitmentItem>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </CommitmentItem>
              </Reveal>
            ))}
          </CommitmentList>
        </PageInner>
      </Section>

      <PageInner>
        {/* Mission & Vision */}
        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Mission & Vision</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Grounded in quality, safety, and sustainability — built to serve Greater Vancouver.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <ImageTextGrid>
            <Reveal variant="side">
              <MediaFrame $ratio="4 / 3">
                <img
                  src="/images/about/mission-vision-team.webp"
                  alt="JKCE team reviewing material samples during a planning meeting"
                  loading="lazy"
                />
              </MediaFrame>
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
