import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
  SplitPanel,
  MediaFrame,
  DividerList,
  DividerItem,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import styled from 'styled-components'
import { Fragment } from 'react'
import { getProjectsByServiceSlug } from '../content/siteData'

const ImageTextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
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
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.canvas};
`

const FlowNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const FlowTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.5;
`

const FlowArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 1.25rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

/* ── Real jobsite photo strip ── */
const PhotoStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

/* ── Advantage rows ── */
const AdvantageRow = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  align-items: start;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
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

const AdvantageIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const AdvantageName = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

const AdvantageDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.inkSecondary};
  line-height: 1.7;
  margin: 0;
`

/* ── Case study panel ── */
const PanelTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkMuted};
  margin-bottom: 1.5rem;
`

const MetaRow = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.85rem;
  line-height: 1.5;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

const MetaLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkMuted};
  flex: 0 0 9rem;
  padding-top: 0.1rem;
`

const MetaValue = styled.span`
  color: inherit;
  flex: 1;
`

/* ── Suitable project types ── */
const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TypeCard = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.inkMuted};
  }
`

const ICF_ADVANTAGES = [
  { num: '01', title: 'Excellent Insulation', description: 'Easily reaches R-24, meeting or exceeding Step Code 4 standards.' },
  { num: '02', title: 'Fast Construction', description: 'Modular design allows the structural frame to be completed in as little as one week.' },
  { num: '03', title: 'Cost-Saving', description: 'No building wrap needed, saving on materials and labour costs.' },
  { num: '04', title: 'High Structural Strength', description: 'Reinforced with concrete and steel for better wind and seismic resistance.' },
  { num: '05', title: 'Outstanding Soundproofing & Airtightness', description: 'Reduces noise and air infiltration, improving indoor comfort significantly.' },
  { num: '06', title: 'Fire-Resistant', description: 'Foam is fire-rated, and concrete is naturally non-combustible.' },
]

const HOW_IT_WORKS_STEPS = [
  { step: '01', title: 'Rebars inside core for strength & quake safety' },
  { step: '02', title: 'Openings for doors & windows left during forming' },
  { step: '03', title: 'Stacking builds wall height quickly' },
  { step: '04', title: 'Two rigid insulation panels form each block' },
  { step: '05', title: 'Metal ties connect panels for stability' },
  { step: '06', title: 'Concrete poured in ≤1.2m layers to prevent damage' },
]

const REAL_WORK_PHOTOS = [
  { src: '/images/icf/crane-beam-lift-02.jpg', alt: 'Crane lifting a precast concrete beam onto ICF walls with exposed rebar' },
  { src: '/images/icf/mobile-crane-site.jpg', alt: 'Mobile crane positioned beside ICF wall construction on an active site' },
  { src: '/images/icf/concrete-pump-pour.jpg', alt: 'Concrete pump truck pouring into ICF forms while crew guides the pour' },
]

const ICF_PROJECT_TYPES = [
  { title: 'Community & Multi-Unit Housing', description: 'Approximately 50 standalone ICF homes delivered for the Tlowitsis Nation on Vancouver Island.' },
  { title: 'Cultural & Institutional Buildings', description: 'ICF structural work for the Ling Yen Mountain Temple expansion, built alongside an active heritage site.' },
  { title: 'Residential Construction', description: 'Crane-assisted ICF wall installation for a full-build low-rise residential project in Chilliwack.' },
]

export default function ICF() {
  const icfProjectCount = getProjectsByServiceSlug('icf').length

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
              <MediaFrame $ratio="4 / 3">
                <img
                  src="/images/icf/block-diagram.webp"
                  alt="ICF block structure — two foam panels with gap for concrete"
                  loading="lazy"
                />
              </MediaFrame>
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
            <MediaFrame $ratio="16 / 5" style={{ marginBottom: '2.5rem' }}>
              <img
                src="/images/icf/how-it-works-banner.webp"
                alt="ICF construction site — multiple homes under construction"
                loading="lazy"
              />
            </MediaFrame>
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
                    <FlowArrow key={`arrow-${item.step}`} aria-hidden="true">→</FlowArrow>
                  )}
                </Fragment>
              ))}
            </FlowRow>
          ))}
        </Section>

        {/* Real ICF work on site */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>ICF on Site</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Crane-assisted panel placement and concrete pours from active JKCE ICF builds.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <PhotoStrip>
            {REAL_WORK_PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.06}>
                <MediaFrame $ratio="4 / 3">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </MediaFrame>
              </Reveal>
            ))}
          </PhotoStrip>
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
                    <AdvantageIndex>{item.num}</AdvantageIndex>
                    <AdvantageName>{item.title}</AdvantageName>
                  </AdvantageLeft>
                  <AdvantageDesc>{item.description}</AdvantageDesc>
                </AdvantageRow>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Suitable Project Types */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Suitable Project Types</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                {icfProjectCount} JKCE project{icfProjectCount === 1 ? '' : 's'} delivered with ICF construction, across these project types.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <TypeGrid>
            {ICF_PROJECT_TYPES.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.06}>
                <TypeCard>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </TypeCard>
              </Reveal>
            ))}
          </TypeGrid>
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
            <MediaFrame $ratio="21 / 9" style={{ marginBottom: '2.5rem' }}>
              <img
                src="/images/icf/case-study-banner.webp"
                alt="Tlowitsis Nation ICF housing construction"
                loading="lazy"
              />
            </MediaFrame>
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
                  <MetaValue>Campbell River, BC</MetaValue>
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
