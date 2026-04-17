import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Navbar
 * ------
 * 功能:
 * 1. 滚动超过 80px 时背景变实色 + 收缩高度(原站同款效果)
 * 2. 进入首屏(scroll=0)时背景透明,文字白色(视频 hero 上方)
 * 3. 非首页时默认深色文字 + 米色背景
 * 4. 移动端抽屉菜单
 */

const Wrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${({ $scrolled }) => ($scrolled ? '1rem 2.5rem' : '1.75rem 2.5rem')};
  background: ${({ $transparent, $scrolled, theme }) =>
    $transparent && !$scrolled
      ? 'transparent'
      : theme.colors.bgPrimary};
  color: ${({ $transparent, $scrolled, theme }) =>
    $transparent && !$scrolled ? theme.colors.textOnDark : theme.colors.textPrimary};
  transition: padding 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              background 0.4s ease,
              color 0.4s ease;
  border-bottom: 1px solid ${({ $transparent, $scrolled, theme }) =>
    $transparent && !$scrolled ? 'transparent' : theme.colors.line};

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
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  font-style: italic;
`

const NavLinks = styled.ul`
  display: flex;
  gap: 2.75rem;
  list-style: none;

  @media (max-width: 900px) {
    display: none;
  }
`

const navLinkStyle = css`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.25rem 0;
  position: relative;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover::after, &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

const NavLink = styled(Link)`
  ${navLinkStyle}
`

const Burger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 1px;
    background: currentColor;
    transition: transform 0.3s, opacity 0.3s;
  }

  &[data-open='true'] {
    span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  padding: 6rem 2rem 2rem;
  z-index: 99;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 2rem;
    font-weight: 300;
  }
`

const links = [
  { to: '/about', label: 'About' },
  { to: '/homes', label: 'Homes' },
  { to: '/community', label: 'In the Community' },
  { to: '/homeowner', label: 'Homeowner Care' },
  { to: '/career', label: 'Career Hub' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // 首页才使用透明 hero 风格
  const transparent = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // 路由切换时关闭菜单
  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <>
      <Wrapper
        $scrolled={scrolled}
        $transparent={transparent}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Inner>
          <Logo to="/">everglade</Logo>
          <NavLinks>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={location.pathname === l.to ? 'active' : ''}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>
          <Burger
            data-open={open}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </Burger>
        </Inner>
      </Wrapper>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  )
}
