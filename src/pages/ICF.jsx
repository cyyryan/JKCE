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

/* ── Step row for How It Works ── */
const StepRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const StepItem = styled.div`
  padding: 1.25rem 0 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  border-right: 1px solid ${({ theme }) => theme.colors.line};

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    &:nth-child(2) { border-right: none; }
    &:nth-child(3) { border-right: 1px solid ${({ theme }) => theme.colors.line}; }
  }
`

const StepNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.5rem;
  padding-right: 1.25rem;
`

const StepTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding-right: 1.25rem;
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
  { num: '01', title: 'Superior Energy Efficiency' },
  { num: '02', title: 'Exceptional Structural Strength' },
  { num: '03', title: 'Sound Attenuation' },
  { num: '04', title: 'Faster Construction Timeline' },
  { num: '05', title: 'Pest & Mould Resistant' },
  { num: '06', title: 'Long-Term Sustainability' },
]

const HOW_IT_WORKS_STEPS = [
  { step: 'Step 01', title: 'Form Assembly' },
  { step: 'Step 02', title: 'Steel Reinforcement' },
  { step: 'Step 03', title: 'Concrete Pour' },
  { step: 'Step 04', title: 'Integrated Finishing' },
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
          body="ICF combines the thermal performance of rigid foam insulation with the structural integrity of reinforced concrete — delivering buildings that are stronger, quieter, and more energy-efficient than conventional wood-frame construction."
        />

        {/* What is ICF */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>What is ICF</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Insulated Concrete Form (ICF) is a cast-in-place construction system using
                interlocking expanded polystyrene (EPS) foam panels as permanent formwork for
                reinforced concrete walls.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <ImageTextGrid>
            <Reveal>
              <ImageFrame>
                <img
                  src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=900&q=80"
                  alt="ICF concrete wall construction"
                  loading="lazy"
                />
              </ImageFrame>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ lineHeight: 1.8, color: 'inherit' }}>
                Unlike traditional wood framing, ICF walls are built by stacking hollow foam
                blocks or panels, placing rebar inside the cavity, and filling the core with
                poured concrete. Once cured, the foam stays in place — providing continuous
                insulation on both sides of a solid concrete wall. The result is a monolithic,
                thermally efficient assembly that outperforms standard framing in strength,
                insulation, sound control, and resilience.
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
                Four straightforward phases take a project from bare ground to a fully insulated,
                structural concrete envelope.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <ImageFrame style={{ marginBottom: '2.5rem', aspectRatio: '16/5', borderRadius: '1.5rem' }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
                alt="ICF construction site"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </ImageFrame>
          </Reveal>
          <Reveal>
            <StepRow>
              {HOW_IT_WORKS_STEPS.map((item) => (
                <StepItem key={item.step}>
                  <StepNumber>{item.step}</StepNumber>
                  <StepTitle>{item.title}</StepTitle>
                </StepItem>
              ))}
            </StepRow>
          </Reveal>
        </Section>

        {/* Why Choose ICF */}
        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Why Choose ICF</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Six performance advantages that make ICF the right choice for projects where
                durability, efficiency, and long-term value matter most.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <TwoColDivider>
              {[ICF_ADVANTAGES.slice(0, 3), ICF_ADVANTAGES.slice(3)].map((col, ci) => (
                <DividerList key={ci}>
                  {col.map((item) => (
                    <DividerItem key={item.num}>
                      <Badge>{item.num}</Badge>
                      {item.title}
                    </DividerItem>
                  ))}
                </DividerList>
              ))}
            </TwoColDivider>
          </Reveal>
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
                src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80"
                alt="Tlowitsis Nation housing development"
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
