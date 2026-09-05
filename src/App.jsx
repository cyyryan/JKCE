import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { lazy, Suspense, useEffect, useRef } from 'react'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { OrganizationSchema } from './components/OrganizationSchema'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const ICF = lazy(() => import('./pages/ICF'))
const Careers = lazy(() => import('./pages/Careers'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))

const LoadingShell = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 8rem 1.5rem 4rem;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

function RouteLoading() {
  return <LoadingShell role="status" aria-live="polite">Loading page…</LoadingShell>
}

/**
 * ScrollToTop
 * -----------
 * 路由切换时重置滚动位置到顶部。
 * 必须用 lenis.scrollTo(0) 而不是 window.scrollTo,
 * 否则会和 Lenis 的内部状态冲突。
 */
function ScrollToTop() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    // 路由切换后将焦点移到主内容,便于屏幕阅读器用户感知页面已更新
    // 首次加载跳过,避免抢走浏览器默认的初始焦点
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      document.getElementById('main-content')?.focus()
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
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <OrganizationSchema />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/icf" element={<ICF />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
