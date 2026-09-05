import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'
import { homeContent } from '../content/home'

const { process } = homeContent

/* Surface 通栏 —— 流程/事实类内容,与前后 canvas 区块形成柔和区隔 */
const Section = styled.section`
  padding: ${({ theme }) => theme.section.paddingY} 2.5rem;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.section.paddingYTight} 1.5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
`

const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  gap: 3rem;
  margin-bottom: 2.5rem;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 1.5rem + 3vw, 3.5rem);
  line-height: 1.05;
`

const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Step = styled.div`
  padding: 2rem 1.75rem;
  background: ${({ theme }) => theme.colors.canvas};
`

const Num = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.bronzeText};
  margin-bottom: 1.25rem;
`

const StepTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`

const StepBody = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

export function DeliveryProcess() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Eyebrow>{process.eyebrow.en}</Eyebrow>
        </Reveal>
        <Head>
          <Title>
            <RevealText
              lines={[
                process.headingLines.en[0],
                process.headingLines.en[1],
                process.headingLines.en[2],
              ]}
            />
          </Title>
          <Reveal delay={0.12}>
            <Body>{process.body.en}</Body>
          </Reveal>
        </Head>

        <Grid>
          {process.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05} as="div">
              <Step>
                <Num>{step.step}</Num>
                <StepTitle>{step.title}</StepTitle>
                <StepBody>{step.body}</StepBody>
              </Step>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}
