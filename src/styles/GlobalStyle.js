import { createGlobalStyle } from 'styled-components'

// 全局样式:重置 + 基础排版 + 无障碍辅助类
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: auto; /* 由 Lenis 接管平滑滚动,关闭浏览器原生 */
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Lenis 要求 */
  html.lenis, html.lenis body {
    height: auto;
  }
  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }
  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }
  .lenis.lenis-stopped {
    overflow: clip;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.ink};
    background-color: ${({ theme }) => theme.colors.canvas};
    overflow-x: hidden;
  }

  /* 移动菜单打开时锁定背景滚动 */
  body.no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ink};
    outline-offset: 3px;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.01em;
  }

  /* Display 字体只用于主要标题,由各标题组件显式声明 font-family */

  /* 选中颜色 */
  ::selection {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.canvas};
  }

  /* 自定义滚动条(Lenis 生效时通常看不见,这是 fallback) */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }

  /* 可复用 skip-link —— 键盘用户可跳过导航直达主内容 */
  .skip-link {
    position: absolute;
    left: -9999px;
    top: 1rem;
    z-index: 1000;
    padding: 0.75rem 1.25rem;
    background: ${({ theme }) => theme.colors.canvas};
    color: ${({ theme }) => theme.colors.ink};
    border: 1px solid ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .skip-link:focus {
    left: 1rem;
  }

  /* 屏幕阅读器专用文本 */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
