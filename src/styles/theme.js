// 设计系统变量 —— 所有组件统一引用,方便整站调色调字体
// 配色思路:奶油米白背景 + 深森林绿主色 + 暖土褐色辅色,呈现自然、沉稳的地产品牌调性

export const theme = {
  colors: {
    // 背景
    bgPrimary: '#F5F1EA',      // 主背景:温暖米白
    bgSecondary: '#EAE4D8',    // 次背景:稍深
    bgDark: '#1F2A24',         // 深色板块:森林绿近黑
    bgAccent: '#2E3A32',       // 深色辅助

    // 文字
    textPrimary: '#1F2A24',    // 主文字:深森林绿,柔和的黑
    textSecondary: '#5A5951',  // 次文字:暖灰
    textMuted: '#8A8778',      // 弱化文字
    textOnDark: '#F5F1EA',     // 深底上的文字

    // 品牌色
    accent: '#6B7F5C',         // 橄榄绿:点缀色
    accentWarm: '#B8956A',     // 暖土褐:高光点缀
    line: '#D4CDBD',           // 分隔线
    lineDark: '#3A4540',
  },

  fonts: {
    // Fraunces 是带细节的现代 serif,作为显示字体
    // Cormorant Garamond 更经典优雅,作为备选
    // Archivo 是几何感的 sans-serif,做正文/导航
    display: `'Fraunces', 'Cormorant Garamond', Georgia, serif`,
    serif: `'Cormorant Garamond', Georgia, serif`,
    sans: `'Archivo', -apple-system, BlinkMacSystemFont, sans-serif`,
  },

  fontSize: {
    xs: '0.75rem',      // 12
    sm: '0.875rem',     // 14
    base: '1rem',       // 16
    md: '1.125rem',     // 18
    lg: '1.375rem',     // 22
    xl: '1.75rem',      // 28
    '2xl': '2.5rem',    // 40
    '3xl': '3.75rem',   // 60
    '4xl': '5rem',      // 80
    '5xl': '6.5rem',    // 104 - 超大 hero 标题
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
    '2xl': '9rem',
    '3xl': '12rem',
  },

  breakpoints: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1280px',
    wide: '1600px',
  },

  // 缓动曲线:优雅的缓入缓出,用于所有动画
  easing: {
    smooth: [0.25, 0.1, 0.25, 1],
    smoothOut: [0.22, 1, 0.36, 1],
    soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },

  // 过渡时长
  duration: {
    fast: 0.3,
    base: 0.6,
    slow: 1.2,
    lazy: 1.8,
  },

  // 内容最大宽度
  container: {
    maxWidth: '1600px',
    padding: '2rem',
  },
}

// 媒体查询辅助函数
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
}
