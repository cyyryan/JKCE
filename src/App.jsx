import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

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
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '1rem',
          zIndex: 1000,
          padding: '0.75rem 1rem',
          background: '#f5f1e8',
          color: '#111',
        }}
        onFocus={(event) => {
          event.currentTarget.style.left = '1rem'
        }}
        onBlur={(event) => {
          event.currentTarget.style.left = '-9999px'
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
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
