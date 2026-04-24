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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ProcessCard = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.25rem;

  h3 {
    font-size: 1.15rem;
    margin: 0.75rem 0 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
    font-size: 0.95rem;
  }
`

const StepNum = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.45;
`

const ICF_ADVANTAGES = [
  {
    num: '01',
    title: 'Superior Energy Efficiency',
    description:
      'ICF walls achieve R-values of 23+ — significantly higher than standard wood-frame construction — cutting heating and cooling costs year-round.',
  },
  {
    num: '02',
    title: 'Exceptional Structural Strength',
    description:
      'Reinforced concrete core withstands extreme wind loads, seismic events, and fire far beyond conventional framing standards.',
  },
  {
    num: '03',
    title: 'Sound Attenuation',
    description:
      'Solid concrete mass reduces airborne sound transmission by up to 60 dB, creating quieter, more comfortable interior environments.',
  },
  {
    num: '04',
    title: 'Faster Construction Timeline',
    description:
      'Factory-formed interlocking panels stack and brace quickly, compressing the framing and insulation phases into a single step.',
  },
  {
    num: '05',
    title: 'Pest & Mould Resistant',
    description:
      'Inorganic concrete and EPS foam provide no food source for pests and are impervious to rot, mould, and moisture intrusion.',
  },
  {
    num: '06',
    title: 'Long-Term Sustainability',
    description:
      'Dramatically reduced lifetime energy use, minimal maintenance, and a century-plus lifespan make ICF an environmentally responsible choice.',
  },
]

const HOW_IT_WORKS_STEPS = [
  {
    step: 'Step 01',
    title: 'Form Assembly',
    body: 'Interlocking EPS foam panels are stacked course by course and braced to hold alignment during the pour.',
  },
  {
    step: 'Step 02',
    title: 'Steel Reinforcement',
    body: 'Horizontal and vertical rebar is threaded through the hollow core to meet structural and seismic requirements.',
  },
  {
    step: 'Step 03',
    title: 'Concrete Pour',
    body: 'High-strength concrete is pumped into the forms in controlled lifts, consolidating around the rebar cage.',
  },
  {
    step: 'Step 04',
    title: 'Integrated Finishing',
    body: 'The foam forms stay in place permanently, serving as the insulation and substrate for interior drywall and exterior cladding.',
  },
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
            <div>
              <Reveal>
                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'inherit' }}>
                  Unlike traditional wood framing, ICF walls are built by stacking hollow foam
                  blocks or panels, placing rebar inside the cavity, and filling the core with
                  poured concrete. Once cured, the foam stays in place — providing continuous
                  insulation on both sides of a solid concrete wall.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p style={{ lineHeight: 1.8, color: 'inherit' }}>
                  The result is a monolithic, thermally efficient wall assembly that far
                  outperforms standard framing in strength, insulation, sound control, and
                  resilience. ICF is suitable for foundations, above-grade walls, and entire
                  building envelopes across residential and commercial applications.
                </p>
              </Reveal>
            </div>
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
          <ProcessGrid>
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <ProcessCard>
                  <StepNum>{item.step}</StepNum>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </ProcessCard>
              </Reveal>
            ))}
          </ProcessGrid>
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
          <Grid $columns={3}>
            {ICF_ADVANTAGES.map((item, index) => (
              <Reveal key={item.num} delay={index * 0.06}>
                <Card>
                  <IconBadge>{item.num}</IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
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
                <h3>Project Overview</h3>
                <PlainList>
                  <PlainItem>
                    <h3>Client</h3>
                    <p>Tlowitsis Nation</p>
                  </PlainItem>
                  <PlainItem>
                    <h3>Project Type</h3>
                    <p>Residential community housing — ICF construction</p>
                  </PlainItem>
                  <PlainItem>
                    <h3>Location</h3>
                    <p>British Columbia, Canada</p>
                  </PlainItem>
                  <PlainItem>
                    <h3>Scope</h3>
                    <p>
                      Full-envelope ICF construction for a multi-unit residential development
                      serving the Tlowitsis Nation community, including foundations, above-grade
                      walls, and structural coordination.
                    </p>
                  </PlainItem>
                </PlainList>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3>Outcomes</h3>
                <PlainList>
                  <PlainItem>
                    <h3>Energy Performance</h3>
                    <p>
                      ICF envelope delivers significantly reduced heating loads — critical for
                      a remote community where energy costs and reliability are primary concerns.
                    </p>
                  </PlainItem>
                  <PlainItem>
                    <h3>Structural Durability</h3>
                    <p>
                      Reinforced concrete construction ensures long service life with minimal
                      maintenance, protecting the community's housing investment for decades.
                    </p>
                  </PlainItem>
                  <PlainItem>
                    <h3>Build Quality</h3>
                    <p>
                      The precision of ICF formwork produced tight, consistent wall assemblies
                      that met and exceeded project specifications.
                    </p>
                  </PlainItem>
                </PlainList>
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
