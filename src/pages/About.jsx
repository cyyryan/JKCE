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
  Meta,
  CTA,
  CTAButton,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { aboutContent } from '../content/siteData'

export default function About() {
  return (
    <PageWrapper>
      <PageInner>
        <PageHero
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          titleItalic={aboutContent.titleItalic}
          body={aboutContent.intro}
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Story</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                The old unfinished site positioned JKCE as a contractor that bridges site work and managed construction delivery. That structure is now reflected here.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <TwoColumnText>
            {aboutContent.story.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </TwoColumnText>
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Values</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Three themes from the legacy project now anchor the new site’s company page and internal structure.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid>
            {aboutContent.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <Card>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Timeline</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>A compact version of the milestone narrative from the previous repository.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid $columns={4}>
            {aboutContent.milestones.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <Card>
                  <Meta><span>{item.year}</span></Meta>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>

          <CTA>
            <div>
              <h3>Need a team that can coordinate beyond the drawing set?</h3>
              <p>Use the new contact page to keep the old site’s inquiry path intact while we continue building out deeper content.</p>
            </div>
            <CTAButton to="/contact">Contact JKCE</CTAButton>
          </CTA>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
