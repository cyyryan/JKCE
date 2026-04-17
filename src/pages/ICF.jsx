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
          <TwoColumnText>
            <Reveal>
              <p>
                Unlike traditional wood framing, ICF walls are built by stacking hollow foam
                blocks or panels, placing rebar inside the cavity, and filling the core with
                poured concrete. Once cured, the foam stays in place — providing continuous
                insulation on both sides of a solid concrete wall.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                The result is a monolithic, thermally efficient wall assembly that far
                outperforms standard framing in strength, insulation, sound control, and
                resilience. ICF is suitable for foundations, above-grade walls, and entire
                building envelopes across residential and commercial applications.
              </p>
            </Reveal>
          </TwoColumnText>
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
          <PlainList>
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <PlainItem>
                  <h3>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5, marginRight: '0.75rem' }}>
                      {item.step}
                    </span>
                    {item.title}
                  </h3>
                  <p>{item.body}</p>
                </PlainItem>
              </Reveal>
            ))}
          </PlainList>
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
