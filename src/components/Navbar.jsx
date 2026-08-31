import { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { primaryNav, companyInfo } from '../content/siteData'

/**
 * Navbar
 * ------
 * 桌面:首页首屏透明,滚动后切换实体背景;Logo 尺寸变化控制在很小范围内,
 * 避免布局跳动。当前页(含服务/项目详情页的父级)始终高亮。
 * 移动:全视口覆盖菜单,锁定背景滚动,完整 focus trap(Tab/Shift+Tab
 * 只在菜单内循环,背景内容通过 inert 禁止获得焦点),支持 Escape 或
 * 顶部关闭按钮关闭,关闭后焦点归还到菜单按钮。
 *
 * 注:早期版本尝试过"点击遮罩关闭",但 Overlay 内容已铺满整个视口,
 * 用户几乎点不到 Overlay 自身(event.currentTarget)——因此该交互已移除,
 * 关闭菜单只能通过 Escape 或关闭按钮。
 */

function isActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

const Wrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${({ $scrolled }) => ($scrolled ? '0.9rem 2.5rem' : '1.15rem 2.5rem')};
  background: ${({ $transparent, $scrolled, theme }) =>
    $transparent && !$scrolled ? 'transparent' : theme.colors.canvas};
  color: ${({ $transparent, $scrolled, theme }) =>
    $transparent && !$scrolled ? theme.colors.textOnDark : theme.colors.ink};
  transition: padding 0.3s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid ${({ $transparent, $scrolled, theme }) =>
    $transparent && !$scrolled ? 'transparent' : theme.colors.border};

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
`

const LogoWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

/* 透明态与滚动态高度差控制在 8px 内,避免明显跳动 */
const LogoBase = styled.img`
  height: ${({ $big }) => ($big ? '46px' : '38px')};
  width: auto;
  display: block;
  transition: height 0.3s ease, opacity 0.25s ease;
`

const LogoOver = styled(LogoBase)`
  position: absolute;
  top: 0;
  left: 0;
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  list-style: none;

  @media (max-width: 900px) {
    display: none;
  }
`

const navLinkStyle = css`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0;
  position: relative;
  transition: opacity 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ $dark, theme }) => ($dark ? theme.colors.bronzeOnDark : theme.colors.bronzeText)};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease;
  }

  &:hover::after, &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

const NavLink = styled(Link)`
  ${navLinkStyle}
`

const NavCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.6rem 1.1rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid currentColor;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: ${({ $transparent, $scrolled, theme }) =>
      $transparent && !$scrolled ? theme.colors.textOnDark : theme.colors.ink};
    color: ${({ $transparent, $scrolled, theme }) =>
      $transparent && !$scrolled ? theme.colors.industrialDark : theme.colors.canvas};
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const Burger = styled.button`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: currentColor;
    transition: transform 0.25s ease, opacity 0.2s ease;
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.industrialDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  z-index: 200;
  display: flex;
  flex-direction: column;
`

const OverlayTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 1.75rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textOnDark};
`

const MenuBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.75rem 3rem;
  overflow-y: auto;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    display: block;
    padding: 0.6rem 0;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.75rem, 8vw, 2.5rem);
    font-weight: 500;
  }

  a.active {
    color: ${({ theme }) => theme.colors.bronzeOnDark};
  }
`

const MenuFooter = styled.div`
  padding: 1.5rem 1.75rem 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textOnDarkSecondary};
  }
`

const MenuPrimaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.canvas};
  color: ${({ theme }) => theme.colors.ink};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const burgerRef = useRef(null)
  const closeRef = useRef(null)
  const overlayRef = useRef(null)
  const navWrapperRef = useRef(null)

  const transparent = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  // 背景内容(桌面态 nav 本身 + <main> + <footer>)在移动菜单打开时设为
  // inert —— 既不可获得焦点,也不响应点击,是 focus trap 的第一道防线
  const setBackgroundInert = useCallback((isInert) => {
    const main = document.getElementById('main-content')
    const footer = document.querySelector('footer')
    ;[navWrapperRef.current, main, footer].forEach((el) => {
      if (!el) return
      if (isInert) {
        el.setAttribute('inert', '')
      } else {
        el.removeAttribute('inert')
      }
    })
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
    // 显式移除 inert(不依赖 effect 清理的时序),确保 focus() 生效
    setBackgroundInert(false)
    burgerRef.current?.focus()
  }, [setBackgroundInert])

  useEffect(() => {
    if (!open) return undefined

    document.body.classList.add('no-scroll')
    window.lenis?.stop()
    setBackgroundInert(true)
    closeRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
        return
      }

      if (event.key !== 'Tab' || !overlayRef.current) return

      // Tab / Shift+Tab 只在菜单内部循环(focus trap 第二道防线,
      // 对不支持 inert 的浏览器仍然有效)
      const focusables = Array.from(overlayRef.current.querySelectorAll(FOCUSABLE_SELECTOR))
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('no-scroll')
      window.lenis?.start()
      setBackgroundInert(false)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, closeMenu, setBackgroundInert])

  return (
    <>
      <Wrapper
        ref={navWrapperRef}
        $scrolled={scrolled}
        $transparent={transparent}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Inner>
          <Logo to="/" aria-label="JKCE Probuild homepage">
            <LogoWrap>
              <LogoBase
                src="/logo/logo-w.PNG"
                alt="JKCE Probuild"
                $big={transparent && !scrolled}
                style={{ opacity: transparent && !scrolled ? 1 : 0 }}
              />
              <LogoOver
                src="/logo/logo-g.png"
                alt=""
                aria-hidden="true"
                $big={transparent && !scrolled}
                style={{ opacity: transparent && !scrolled ? 0 : 1 }}
              />
            </LogoWrap>
          </Logo>
          <NavLinks>
            {primaryNav.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  $dark={transparent && !scrolled}
                  className={isActive(location.pathname, l.to) ? 'active' : ''}
                  aria-current={isActive(location.pathname, l.to) ? 'page' : undefined}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>
          <NavCta to="/contact" $transparent={transparent} $scrolled={scrolled}>
            Request a Quote
          </NavCta>
          <Burger
            ref={burgerRef}
            onClick={() => setOpen(true)}
            aria-label="Open site navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span /><span /><span />
          </Burger>
        </Inner>
      </Wrapper>

      <AnimatePresence>
        {open && (
          <Overlay
            ref={overlayRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <OverlayTop>
              <Logo to="/" aria-label="JKCE Probuild homepage">
                <img src="/logo/logo-w.PNG" alt="JKCE Probuild" style={{ height: '32px' }} />
              </Logo>
              <CloseButton ref={closeRef} onClick={closeMenu} aria-label="Close site navigation" type="button">
                ×
              </CloseButton>
            </OverlayTop>

            <MenuBody>
              <ul>
                {primaryNav.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={isActive(location.pathname, l.to) ? 'active' : ''}
                      aria-current={isActive(location.pathname, l.to) ? 'page' : undefined}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MenuBody>

            <MenuFooter>
              <MenuPrimaryCta to="/contact">Start a Project</MenuPrimaryCta>
              <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
              <a href={companyInfo.emailHref}>{companyInfo.email}</a>
            </MenuFooter>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  )
}
