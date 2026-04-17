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
          <SectionHeader>
            <Reveal><SectionLabel>Company Overview</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>JKCE is a full-service construction company built around quality, safety, and dependable delivery.</SectionLead>
            </Reveal>
          </SectionHeader>
          <TwoColumnText>
            {aboutContent.overview.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </TwoColumnText>
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Mission & Vision</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>JKCE’s approach is grounded in quality, integrity, safety, and long-term value for every client and project.</SectionLead>
            </Reveal>
          </SectionHeader>
          <SplitPanel>
            <Reveal>
              <div>
                <h3>Mission</h3>
                <p>{aboutContent.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3>Vision</h3>
                <p>{aboutContent.vision}</p>
              </div>
            </Reveal>
          </SplitPanel>
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Core Strengths</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Clients trust JKCE because the company combines proven construction fundamentals with modern technical capability.</SectionLead>
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
            <Reveal><SectionLabel>Modern Capability</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>Modern tools only matter if they improve delivery in the field.</SectionLead>
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
