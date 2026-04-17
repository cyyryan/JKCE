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
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { blogPosts } from '../content/siteData'

export default function Blog() {
  return (
    <PageWrapper>
      <PageInner>
        <PageHero
          eyebrow="Blog"
          title="Insights that support"
          titleItalic="better project decisions."
          body="The old repository included a dedicated blog section. This page restores that content type in the new codebase so the site architecture matches the earlier plan."
        />

        <Section $border={false}>
          <SectionHeader>
            <Reveal><SectionLabel>Articles</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>This is now a true routed page instead of a missing branch in the current project, which means the navigation and footer both point to a real content destination.</SectionLead>
            </Reveal>
          </SectionHeader>
          <Grid>
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 0.06}>
                <Card>
                  <Meta>
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </Meta>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
