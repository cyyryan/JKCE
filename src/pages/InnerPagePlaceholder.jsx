import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { RevealText } from '../components/RevealText'

/**
 * InnerPagePlaceholder
 * --------------------
 * 所有内页(About / Homes / Community / Homeowner / Career / Contact)
 * 的通用占位模板。第 2 阶段会分别替换为真实内容。
 *
 * 提供这个占位是为了让路由现在就能跑通、导航点击不报错,
 * 并且保持和首页一致的视觉语言(字体、配色、动效)。
 */

const Wrapper = styled.section`
  padding: 14rem 2.5rem 10rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 768px) {
    padding: 9rem 1.5rem 5rem;
  }
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  display: block;
  margin-bottom: 2.5rem;
`

const Title = styled.h1`
  font-size: clamp(3rem, 9vw, 8rem);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 3rem;

  em { font-style: italic; }
`

const Hint = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 56ch;
  padding-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`

export function InnerPagePlaceholder({ eyebrow, title, titleItalic, hint }) {
  return (
    <Wrapper>
      <Inner>
        <Reveal>
          <Eyebrow>— {eyebrow}</Eyebrow>
        </Reveal>
        <Title>
          <RevealText
            lines={[title, titleItalic ? <em key="i">{titleItalic}</em> : null].filter(Boolean)}
          />
        </Title>
        <Reveal delay={0.4}>
          <Hint>{hint}</Hint>
        </Reveal>
      </Inner>
    </Wrapper>
  )
}
