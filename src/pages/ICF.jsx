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
import styled from 'styled-components'
import { Fragment } from 'react'

const ImageTextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
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

const CaseStudyImage = styled.div`
  width: 100%;
  height: 420px;
  overflow: hidden;
  border-radius: 1.5rem;
  margin-bottom: 3rem;

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

/* ── Shared divider list ── */
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

const Badge = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.line};
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  flex-shrink: 0;
`

/* ── Two-column divider list ── */
const TwoColDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

/* ── How It Works flowchart ── */
const FlowRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const FlowStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
`

const FlowNumber = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentWarm};
  color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  flex-shrink: 0;
`

const FlowTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.5;
`

const FlowArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.25rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

/* ── Advantage rows ── */
const AdvantageRow = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  align-items: start;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.line};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

const AdvantageLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const AdvantageName = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const AdvantageDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`

/* ── Case study panel title ── */
const PanelTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.5rem;
`

/* ── Case study label rows ── */
const MetaRow = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  font-size: 0.85rem;
  line-height: 1.5;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.line};
  }
`

const MetaLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: 0 0 9rem;
  padding-top: 0.1rem;
`

const MetaValue = styled.span`
  color: inherit;
  flex: 1;
`

const ICF_ADVANTAGES = [
  {
    num: '01',
    title: 'Excellent Insulation',
    description: 'Easily reaches R-24, meeting or exceeding Step Code 4 standards.',
  },
  {
    num: '02',
    title: 'Fast Construction',
    description: 'Modular design allows the structural frame to be completed in as little as one week.',
  },
  {
    num: '03',
    title: 'Cost-Saving',
    description: 'No building wrap needed, saving on materials and labour costs.',
  },
  {
    num: '04',
    title: 'High Structural Strength',
    description: 'Reinforced with concrete and steel for better wind and seismic resistance.',
  },
  {
    num: '05',
    title: 'Outstanding Soundproofing & Airtightness',
    description: 'Reduces noise and air infiltration, improving indoor comfort significantly.',
  },
  {
    num: '06',
    title: 'Fire-Resistant',
    description: 'Foam is fire-rated, and concrete is naturally non-combustible.',
  },
]

const HOW_IT_WORKS_STEPS = [
  { step: '01', title: 'Rebars inside core for strength & quake safety' },
  { step: '02', title: 'Openings for doors & windows left during forming' },
  { step: '03', title: 'Stacking builds wall height quickly' },
  { step: '04', title: 'Two rigid insulation panels form each block' },
  { step: '05', title: 'Metal ties connect panels for stability' },
  { step: '06', title: 'Concrete poured in ≤1.2m layers to prevent damage' },
]

export default function ICF() {
  return (
    <PageWrapper>
      <Seo
        title="ICF Construction | JKCE Probuild"
        description="JKCE delivers Insulated Concrete Form construction for commercial and residential projects across Greater Vancouver — superior strength, efficiency, and long-term value."
      />
      <PageInner>
        <PageHero
          eyebrow="ICF Construction"
          title="Insulated Concrete"
          titleItalic="Form Building."
          body="ICF is setting the standard for the future of sustainable building — combining insulation, soundproofing, and structural strength in one system. JKCE Probuild is one of the teams in the Greater Vancouver area with hands-on experience using this technology."
        />

        {/* What is ICF */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>What is ICF</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                ICF consists of two layers of high-density foam with a gap in between.
                During construction, this gap is filled with concrete.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <ImageTextGrid>
            <Reveal>
              <ImageFrame>
                <img
                  src="/images/icf/block-diagram.webp"
                  alt="ICF block structure — two foam panels with gap for concrete"
                  loading="lazy"
                />
              </ImageFrame>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ lineHeight: 1.8, color: 'inherit' }}>
                This forms walls that provide insulation, soundproofing, and structural strength.
                Beyond energy efficiency, ICF is setting the standard for the future of sustainable
                building. Unlike traditional wood framing, the foam forms stay in place permanently —
                providing continuous insulation on both sides of a solid concrete wall while
                eliminating the need for a building wrap.
              </p>
            </Reveal>
          </ImageTextGrid>
        </Section>

        {/* How it Works */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>How It Works</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Six key construction steps that make ICF walls strong, efficient, and fast to build.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <ImageFrame style={{ marginBottom: '2.5rem', aspectRatio: '16/5', borderRadius: '1.5rem' }}>
              <img
                src="/images/icf/how-it-works-banner.webp"
                alt="ICF construction site — multiple homes under construction"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </ImageFrame>
          </Reveal>
          {[HOW_IT_WORKS_STEPS.slice(0, 3), HOW_IT_WORKS_STEPS.slice(3)].map((row, ri) => (
            <FlowRow key={ri}>
              {row.map((item, i) => (
                <Fragment key={item.step}>
                  <Reveal key={item.step} delay={i * 0.08}>
                    <FlowStep>
                      <FlowNumber>{item.step}</FlowNumber>
                      <FlowTitle>{item.title}</FlowTitle>
                    </FlowStep>
                  </Reveal>
                  {i < row.length - 1 && (
                    <FlowArrow key={`arrow-${item.step}`}>→</FlowArrow>
                  )}
                </Fragment>
              ))}
            </FlowRow>
          ))}
        </Section>

        {/* Why Choose ICF */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Why Choose ICF</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Six performance advantages — from R-24 insulation to fire resistance — that make
                ICF the right choice for durable, efficient, and sustainable building.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <div>
            {ICF_ADVANTAGES.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.05}>
                <AdvantageRow>
                  <AdvantageLeft>
                    <Badge>{item.num}</Badge>
                    <AdvantageName>{item.title}</AdvantageName>
                  </AdvantageLeft>
                  <AdvantageDesc>{item.description}</AdvantageDesc>
                </AdvantageRow>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Case Study: Tlowitsis Nation */}
        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Case Study</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Tlowitsis Nation — Residential ICF Housing Development
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <CaseStudyImage>
              <img
                src="/images/icf/case-study-banner.webp"
                alt="Tlowitsis Nation ICF housing construction"
                loading="lazy"
              />
            </CaseStudyImage>
          </Reveal>
          <SplitPanel>
            <Reveal>
              <div>
                <PanelTitle>Project Overview</PanelTitle>
                <MetaRow>
                  <MetaLabel>Client</MetaLabel>
                  <MetaValue>Tlowitsis Nation</MetaValue>
                </MetaRow>
                <MetaRow>
                  <MetaLabel>Type</MetaLabel>
                  <MetaValue>Residential community housing — ICF</MetaValue>
                </MetaRow>
                <MetaRow>
                  <MetaLabel>Location</MetaLabel>
                  <MetaValue>British Columbia, Canada</MetaValue>
                </MetaRow>
                <MetaRow>
                  <MetaLabel>Scope</MetaLabel>
                  <MetaValue>Full-envelope ICF, foundations, above-grade walls, structural coordination</MetaValue>
                </MetaRow>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <PanelTitle>Outcomes</PanelTitle>
                <DividerList>
                  <DividerItem>Energy Performance</DividerItem>
                  <DividerItem>Structural Durability</DividerItem>
                  <DividerItem>Build Quality</DividerItem>
                </DividerList>
              </div>
            </Reveal>
          </SplitPanel>

          <CTA>
            <div>
              <h3>Interested in ICF for your project?</h3>
              <p>
                Tell us about your build and we will walk you through whether ICF is the right
                system — and what it means for your timeline, budget, and long-term performance.
              </p>
            </div>
            <CTAButton to="/contact">Get in Touch</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
