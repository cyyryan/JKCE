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
  Meta,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { servicesContent } from '../content/siteData'

export default function Services() {
  return (
    <PageWrapper>
      <PageInner>
        <PageHero
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
          titleItalic={servicesContent.titleItalic}
          body={servicesContent.intro}
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Divisions</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>The previous project’s service model centered on two divisions. Those divisions are now represented as first-class content in this codebase.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={2}>
            {servicesContent.divisions.map((division, index) => (
              <Reveal key={division.title} delay={index * 0.08}>
                <Card>
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                  <ul style={{ marginTop: '1.25rem', paddingLeft: '1rem', color: 'inherit' }}>
                    {division.items.map((item) => (
                      <li key={item} style={{ marginBottom: '0.6rem', color: 'var(--service-item-color, inherit)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Process</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>The legacy site also framed delivery as a four-step process. We kept that content architecture so this section can expand naturally later.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={4}>
            {servicesContent.process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.08}>
                <Card>
                  <Meta><span>{item.step}</span></Meta>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>

          <CTA>
            <div>
              <h3>Want to see these divisions reflected in project work?</h3>
              <p>The new `Our Work` page now mirrors the legacy site’s role as the main index of completed and active capability examples.</p>
            </div>
            <CTAButton to="/our-work">View Our Work</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
