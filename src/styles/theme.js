// 设计系统变量 —— 所有组件统一引用
// 基调:工程图纸的秩序感 + 现场质感。暖白/炭黑为主,古铜金仅作结构性强调。

export const theme = {
  colors: {
    // 背景
    canvas: '#F2F0EA',        // 主背景:暖白
    surface: '#E7E4DC',       // 次背景/卡片底色
    surfaceAlt: '#EDEAE1',    // 极浅分区背景
    industrialDark: '#182124',    // 深色板块主色
    industrialDarkAlt: '#202A2D', // 深色板块内的卡片/次层

    // 兼容旧命名(部分组件仍引用,逐步淘汰)
    bgPrimary: '#F2F0EA',
    bgSecondary: '#E7E4DC',
    bgDark: '#182124',
    bgAccent: '#202A2D',

    // 文字
    ink: '#151A1C',            // 主文字:炭黑
    inkSecondary: '#52595A',   // 次文字:暖灰(对比度 ~6.3:1)
    inkMuted: '#6C6960',       // 弱化文字/meta 标签(对比度 ~4.8:1,仍达 AA)
    textOnDark: '#F2F0EA',
    textOnDarkSecondary: '#B9C0C0',

    // 兼容旧命名
    textPrimary: '#151A1C',
    textSecondary: '#52595A',
    textMuted: '#6C6960',

    // 品牌铜金 —— 结构性强调,不用于小号正文
    bronze: '#9A7142',         // 图标/边线/数字编号/深底文字
    bronzeOnDark: '#C79A66',   // 深底上的铜金文字(对比度达标)
    bronzeText: '#7A5934',     // 浅底铜金文字(eyebrow、链接,对比度达标)
    accent: '#7A5934',
    accentWarm: '#9A7142',

    // Safety 强调色 —— 仅用于必要状态(进行中/警示/关键数据)
    safety: '#B5451B',

    // 边框
    border: '#DAD4C6',
    borderStrong: '#C7BFAC',
    borderDark: '#2B3538',
    line: '#DAD4C6',
    lineDark: '#2B3538',
  },

  fonts: {
    // Playfair Display 仅用于主要标题(H1/大型 section 标题)
    display: `'Playfair Display', Georgia, serif`,
    // Archivo 承担正文、界面文字、导航
    sans: `'Archivo', -apple-system, BlinkMacSystemFont, sans-serif`,
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: 'clamp(1.2rem, 1.1rem + 0.5vw, 1.375rem)',
    xl: 'clamp(1.4rem, 1.2rem + 1vw, 1.75rem)',
    '2xl': 'clamp(1.75rem, 1.3rem + 2vw, 2.5rem)',
    '3xl': 'clamp(2.1rem, 1.4rem + 3.2vw, 3.5rem)',
    '4xl': 'clamp(2.5rem, 1.5rem + 4.5vw, 4.5rem)',
    hero: 'clamp(2.4rem, 1.5rem + 4.2vw, 5.25rem)',
  },

  spacing: {
    '2xs': '0.375rem',
    xs: '0.75rem',
    sm: '1.25rem',
    md: '2rem',
    lg: '3rem',
    xl: '4.5rem',
    '2xl': '6rem',
    '3xl': '9rem',
  },

  // 统一 section 上下留白(不再各文件各自硬编码)
  section: {
    paddingY: 'clamp(3.25rem, 2.5rem + 3vw, 5rem)',
    paddingYTight: 'clamp(2.25rem, 1.8rem + 2vw, 3.5rem)',
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  radius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '999px',
  },

  shadow: {
    sm: '0 1px 2px rgba(21, 26, 28, 0.07)',
    md: '0 12px 32px rgba(21, 26, 28, 0.12)',
  },

  easing: {
    smooth: [0.22, 1, 0.36, 1],
    soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },

  duration: {
    fast: 0.18,
    base: 0.3,
    slow: 0.6,
  },

  container: {
    maxWidth: '1440px',
    padding: 'clamp(1.25rem, 1rem + 1.5vw, 2.5rem)',
  },

  readingWidth: '66ch',
}

// 媒体查询辅助函数
export const media = {
  xs: `@media (max-width: ${theme.breakpoints.xs})`,
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (max-width: ${theme.breakpoints.xl})`,
  reducedMotion: `@media (prefers-reduced-motion: reduce)`,
}
