import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import { InnerPagePlaceholder } from './pages/InnerPagePlaceholder'

/**
 * ScrollToTop
 * -----------
 * 路由切换时重置滚动位置到顶部。
 * 必须用 lenis.scrollTo(0) 而不是 window.scrollTo,
 * 否则会和 Lenis 的内部状态冲突。
 */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

/**
 * AppShell
 * --------
 * 在 Router 内部调用 useSmoothScroll —— 确保 Lenis 只初始化一次。
 */
function AppShell() {
  useSmoothScroll()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 内页占位 - 第 2 阶段实现 */}
          <Route path="/about" element={
            <InnerPagePlaceholder
              eyebrow="About"
              title="A team obsessed"
              titleItalic="with the craft."
              hint="This page will feature the JKCE story, philosophy, leadership team, and project timeline. Coming in stage 2."
            />
          } />
          <Route path="/homes" element={
            <InnerPagePlaceholder
              eyebrow="Homes"
              title="Residences"
              titleItalic="by JKCE."
              hint="A grid of all past and current projects with filtering by neighborhood, status, and home type. Coming in stage 2."
            />
          } />
          <Route path="/homes/:slug" element={
            <InnerPagePlaceholder
              eyebrow="Project"
              title="Project detail"
              titleItalic="page."
              hint="Individual home/project pages with gallery, floor plans, features, and registration form. Coming in stage 2."
            />
          } />
          <Route path="/community" element={
            <InnerPagePlaceholder
              eyebrow="Community"
              title="Giving back"
              titleItalic="where we build."
              hint="Community initiatives, philanthropic programs, and local partnerships. Coming in stage 2."
            />
          } />
          <Route path="/homeowner" element={
            <InnerPagePlaceholder
              eyebrow="Homeowner Care"
              title="Support that"
              titleItalic="lasts."
              hint="Warranty info, service requests, homeowner resources. Coming in stage 2."
            />
          } />
          <Route path="/career" element={
            <InnerPagePlaceholder
              eyebrow="Career Hub"
              title="Build what"
              titleItalic="endures."
              hint="Open positions, culture, and application flow. Coming in stage 2."
            />
          } />
          <Route path="/contact" element={
            <InnerPagePlaceholder
              eyebrow="Contact"
              title="Let's"
              titleItalic="connect."
              hint="Contact form, office map, general inquiries. Coming in stage 2."
            />
          } />

          {/* 404 兜底 */}
          <Route path="*" element={
            <InnerPagePlaceholder
              eyebrow="404"
              title="Page not"
              titleItalic="found."
              hint="The page you're looking for doesn't exist. Head back to the homepage."
            />
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  )
}
