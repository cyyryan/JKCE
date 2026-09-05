import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { RevealText } from './RevealText'

/* ────────────────────────────────────────────────────────────
 * 布局原语 —— Container / Section / SectionHeader / Eyebrow
 * 全站统一的 section 间距、容器宽度、正文阅读宽度均来自 theme。
 * ──────────────────────────────────────────────────────────── */

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.container.padding};
  padding-right: ${({ theme }) => theme.container.padding};
`

export const PageWrapper = styled.div`
  padding-top: 7rem;
  padding-bottom: ${({ theme }) => theme.section.paddingY};

  ${({ theme }) => theme.breakpoints.md && ''}
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 6rem;
  }
`

export const PageInner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.container.padding};
  padding-right: ${({ theme }) => theme.container.padding};
`

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 3rem;
  padding-bottom: ${({ theme }) => theme.section.paddingYTight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  line-height: 1.05;
  letter-spacing: -0.01em;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bronzeText};
  }
`

export const HeroBody = styled.p`
  align-self: end;
  max-width: 34rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

/* ────────────────────────────────────────────────────────────
 * Section 色块系统 —— 四种视觉模式,通过 $tone 复用同一组件:
 *   canvas(默认)— 暖白,主叙述;嵌套在 PageInner/Container 内使用
 *   surface     — 暖灰,流程/事实/辅助信息;需要通栏时外面套 <Container>
 *   dark        — industrialDark,关键能力/成果/强 CTA;每页通常 ≤1–2 个
 * 通栏用法: <Section $tone="dark"><Container>...</Container></Section>
 * ──────────────────────────────────────────────────────────── */

const sectionTone = {
  canvas: { bg: 'transparent', color: null, border: 'border' },
  surface: { bg: 'surface', color: null, border: 'border' },
  dark: { bg: 'industrialDark', color: 'textOnDark', border: 'borderDark' },
}

export const Section = styled.section`
  padding: ${({ theme }) => theme.section.paddingY} 0;
  background: ${({ $tone = 'canvas', theme }) => {
    const key = sectionTone[$tone].bg
    return key === 'transparent' ? 'transparent' : theme.colors[key]
  }};
  color: ${({ $tone = 'canvas', theme }) => {
    const key = sectionTone[$tone].color
    return key ? theme.colors[key] : 'inherit'
  }};
  border-bottom: ${({ $border = true, $tone = 'canvas', theme }) =>
    $border ? `1px solid ${theme.colors[sectionTone[$tone].border]}` : 'none'};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.section.paddingYTight} 0;
  }
`

export const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`

export const SectionLabel = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronzeText};
  margin: 0;
`

export const SectionLead = styled.p`
  max-width: ${({ theme }) => theme.readingWidth};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

/* 深色 Section 内使用的标题/说明变体(bronzeText/inkSecondary 在深底对比度不足) */
export const SectionLabelOnDark = styled(SectionLabel)`
  color: ${({ theme }) => theme.colors.bronzeOnDark};
`

export const SectionLeadOnDark = styled(SectionLead)`
  color: ${({ theme }) => theme.colors.textOnDarkSecondary};
`

export const TwoColumnText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.75;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns = 3 }) => `repeat(${$columns}, minmax(0, 1fr))`};
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

/* ────────────────────────────────────────────────────────────
 * 卡片 / 徽章 / 标签 —— 圆角统一收敛到 theme.radius(不再用 1.5–2rem)
 * ──────────────────────────────────────────────────────────── */

export const Card = styled.article`
  padding: 1.75rem;
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.65;
  }
`

export const IconBadge = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  margin-bottom: 1rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.bronze};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.bronzeText};
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  margin-bottom: 0.8rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkMuted};
`

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
`

export const Tag = styled.span`
  padding: 0.4rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.inkSecondary};
`

/* ────────────────────────────────────────────────────────────
 * CTA 转化区块 —— 高对比度完整区块,不是漂浮圆角卡片
 * ──────────────────────────────────────────────────────────── */

export const CTA = styled.div`
  margin-top: ${({ theme }) => theme.section.paddingYTight};
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.industrialDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textOnDarkSecondary};
    max-width: 38rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1.5rem;
  }
`

export const SplitPanel = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const PlainList = styled.div`
  display: grid;
  gap: 1rem;
`

export const PlainItem = styled.div`
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.65;
  }
`

export const CompactList = styled.div`
  display: grid;
  gap: 0.65rem;
  margin-top: 1.25rem;
`

export const CompactItem = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 0.6rem;
  align-items: start;
  color: ${({ theme }) => theme.colors.inkSecondary};
  line-height: 1.55;

  span:first-child {
    color: ${({ theme }) => theme.colors.ink};
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`

/* ────────────────────────────────────────────────────────────
 * 分隔线列表 —— About / ICF / Careers 等页面共用,替代各自重复实现
 * ──────────────────────────────────────────────────────────── */

export const DividerList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const DividerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

/* ────────────────────────────────────────────────────────────
 * 媒体容器 —— 统一 aspect-ratio + object-fit,避免布局偏移
 * ──────────────────────────────────────────────────────────── */

export const MediaFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $ratio = '4 / 3' }) => $ratio};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  img, video, iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: 0;
  }
`

/* ────────────────────────────────────────────────────────────
 * 数据点 —— 用于能力带 / 事实栏
 * ──────────────────────────────────────────────────────────── */

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.ink};
    line-height: 1;
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.inkMuted};
  }
`

/* ────────────────────────────────────────────────────────────
 * 按钮 —— 不使用大量胶囊按钮,统一收敛到 radius.sm
 * ──────────────────────────────────────────────────────────── */

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.9rem 1.75rem;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
`

export const PrimaryButton = styled(Link)`
  ${buttonBase}
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.ink};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.ink};
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

export const SecondaryButton = styled(Link)`
  ${buttonBase}
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.ink};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

/* 深底(CTA 面板等)专用主按钮变体 */
export const CTAButton = styled(Link)`
  ${buttonBase}
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.canvas};
  color: ${({ theme }) => theme.colors.ink};
  border: 1px solid ${({ theme }) => theme.colors.canvas};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.canvas};
    border-color: ${({ theme }) => theme.colors.canvas};
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

/* ────────────────────────────────────────────────────────────
 * StatementBlock —— 单句核心结论(Level 1),字号大于正文、小于 H1
 * ──────────────────────────────────────────────────────────── */

const StatementEyebrow = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.bronzeOnDark : theme.colors.bronzeText)};
`

const StatementText = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(1.35rem, 1.1rem + 1.4vw, 2.1rem);
  line-height: 1.3;
  max-width: 34ch;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDark : theme.colors.ink)};

  em {
    font-style: italic;
    color: ${({ $dark, theme }) => ($dark ? theme.colors.bronzeOnDark : theme.colors.bronzeText)};
  }
`

export function StatementBlock({ eyebrow, children, dark = false, className }) {
  return (
    <div className={className}>
      {eyebrow && <StatementEyebrow $dark={dark}>{eyebrow}</StatementEyebrow>}
      <StatementText $dark={dark}>{children}</StatementText>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
 * HighlightStat —— 单个真实数字/事实(Level 2),不得编造数据
 * ──────────────────────────────────────────────────────────── */

const HighlightStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .value {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 500;
    font-size: clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem);
    line-height: 1;
    color: ${({ $dark, theme }) => ($dark ? theme.colors.bronzeOnDark : theme.colors.ink)};
  }

  .unit {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 1rem;
    font-weight: 600;
    color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDarkSecondary : theme.colors.inkMuted)};
  }

  .label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDarkSecondary : theme.colors.inkMuted)};
  }

  .explanation {
    font-size: 0.88rem;
    line-height: 1.55;
    max-width: 26ch;
    color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDarkSecondary : theme.colors.inkSecondary)};
  }
`

export function HighlightStat({ value, unit, label, explanation, dark = false, className }) {
  return (
    <HighlightStatWrapper $dark={dark} className={className}>
      <span className="value">
        {value}
        {unit && <span className="unit">{unit}</span>}
      </span>
      {label && <span className="label">{label}</span>}
      {explanation && <span className="explanation">{explanation}</span>}
    </HighlightStatWrapper>
  )
}

/* ────────────────────────────────────────────────────────────
 * FactStrip —— 横向 Location / Year / Status / Services 事实栏
 * 移动端自然换行,不做成胶囊标签集合
 * ──────────────────────────────────────────────────────────── */

const FactStripWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem 3rem;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ $dark, theme }) => (theme.colors[$dark ? 'borderDark' : 'border'])};
  border-bottom: 1px solid ${({ $dark, theme }) => (theme.colors[$dark ? 'borderDark' : 'border'])};

  @media (max-width: 640px) {
    gap: 1.25rem 2rem;
  }
`

const FactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 6rem;

  span {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ $dark, theme }) => (theme.colors[$dark ? 'textOnDarkSecondary' : 'inkMuted'])};
  }

  strong {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ $dark, theme }) => (theme.colors[$dark ? 'textOnDark' : 'ink'])};
  }
`

export function FactStrip({ items, dark = false, className }) {
  return (
    <FactStripWrapper $dark={dark} className={className}>
      {items.map((item) => (
        <FactItem key={item.label} $dark={dark}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </FactItem>
      ))}
    </FactStripWrapper>
  )
}

/* ────────────────────────────────────────────────────────────
 * PullQuote —— 从已有文案提炼的品牌声明,不伪装成客户评价
 * 不加引号,不加署名
 * ──────────────────────────────────────────────────────────── */

const PullQuoteWrapper = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-style: italic;
  font-size: clamp(1.3rem, 1.05rem + 1.3vw, 2rem);
  line-height: 1.4;
  max-width: 28ch;
  padding-left: 1.25rem;
  border-left: 2px solid ${({ $dark, theme }) => (theme.colors[$dark ? 'bronzeOnDark' : 'bronze'])};
  color: ${({ $dark, theme }) => (theme.colors[$dark ? 'textOnDark' : 'ink'])};
`

export function PullQuote({ children, dark = false, className }) {
  return (
    <PullQuoteWrapper as="p" $dark={dark} className={className}>
      {children}
    </PullQuoteWrapper>
  )
}

export function PageHero({ eyebrow, title, titleItalic, body }) {
  return (
    <Hero>
      <div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <HeroTitle>
          <RevealText
            lines={[title, titleItalic ? <em key="italic">{titleItalic}</em> : null].filter(Boolean)}
          />
        </HeroTitle>
      </div>
      <Reveal delay={0.15}>
        <HeroBody>{body}</HeroBody>
      </Reveal>
    </Hero>
  )
}
