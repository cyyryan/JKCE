import {
  PageWrapper,
  PageInner,
  PageHero,
  Section,
  SectionHeader,
  SectionLabel,
  SectionLead,
} from '../components/PageScaffold'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import styled from 'styled-components'

const ProseBlock = styled.div`
  max-width: 72ch;

  p {
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.1rem;
    margin: 2rem 0 0.75rem;
  }

  ul {
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <Seo
        title="Privacy Policy | JKCE Probuild"
        description="Privacy notice and social media policy for JKCE Probuild Contracting Corp."
      />
      <PageInner>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          titleItalic="& Social Media."
          body="JKCE Probuild is committed to protecting your personal information and maintaining respectful online communities."
        />

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Privacy Notice</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                How we collect, use, and protect your personal information.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <ProseBlock>
              <p>
                JKCE Probuild Contracting Corp. respects the privacy of every individual who
                visits our website or contacts us directly. By submitting your contact information
                through our website or via email, you consent to receive communications from our
                office regarding your inquiry or project.
              </p>
              <p>
                We are committed to using your contact details solely for the purpose of direct
                communication related to our construction services. We will not share, sell, or
                distribute your personal information to unaffiliated third parties without your
                explicit consent, except where required by law.
              </p>
              <p>
                If you have questions about how your information is handled, please contact us at{' '}
                <a href="mailto:info@jkceprobuild.com" style={{ textDecoration: 'underline' }}>
                  info@jkceprobuild.com
                </a>.
              </p>
            </ProseBlock>
          </Reveal>
        </Section>

        <Section>
          <SectionHeader>
            <Reveal><SectionLabel>Social Media Policy</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <SectionLead>
                Guidelines for engagement on our social media channels.
              </SectionLead>
            </Reveal>
          </SectionHeader>
          <Reveal>
            <ProseBlock>
              <p>
                JKCE Probuild maintains active accounts on Facebook, Instagram, and LinkedIn.
                Our goal is to foster open dialogue with those interested in construction,
                employment opportunities, and topics relevant to our industry. We welcome
                respectful sharing of thoughts and experiences on our pages.
              </p>
              <p>
                To maintain a constructive and respectful community, the following types of
                content are not permitted on our social media channels and will be removed
                at the discretion of our moderators:
              </p>
              <ul>
                <li>Hate speech, profanity, obscenity, or vulgarity</li>
                <li>Inappropriate profile pictures or nudity</li>
                <li>Defamatory statements or personal attacks against individuals or organizations</li>
                <li>Commercial solicitation or unsolicited advertising</li>
                <li>Content that infringes on copyright or trademark rights</li>
                <li>Spam or any content deemed inappropriate by our moderation team</li>
              </ul>
              <p style={{ marginTop: '1.25rem' }}>
                Repeat violations may result in users being blocked from our channels. We
                reserve the right to update these guidelines at any time.
              </p>
            </ProseBlock>
          </Reveal>
        </Section>

        <Section $border={false}>
          <Reveal>
            <ProseBlock>
              <p style={{ fontSize: '0.85rem' }}>
                Last updated: 2024. For questions, contact{' '}
                <a href="mailto:info@jkceprobuild.com" style={{ textDecoration: 'underline' }}>
                  info@jkceprobuild.com
                </a>{' '}
                or call{' '}
                <a href="tel:+16047296583" style={{ textDecoration: 'underline' }}>
                  (604) 729-6583
                </a>.
              </p>
            </ProseBlock>
          </Reveal>
        </Section>
      </PageInner>
    </PageWrapper>
  )
}
