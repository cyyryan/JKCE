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
import OurWork from './pages/OurWork'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/projects" element={<OurWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

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
