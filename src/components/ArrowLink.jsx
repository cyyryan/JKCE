import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * ArrowLink —— 带细箭头的链接,悬停时箭头右移。
 * 适合用在品牌站里的主 CTA 和二级跳转。
 */
const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDark : theme.colors.ink)};
  padding: 0.9rem 0;
  border-bottom: 1px solid currentColor;
  transition: color 0.2s ease, border-color 0.2s ease;
  position: relative;

  .arrow {
    display: inline-block;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    color: ${({ $dark, theme }) => ($dark ? theme.colors.bronzeOnDark : theme.colors.bronzeText)};
    border-bottom-color: ${({ $dark, theme }) => ($dark ? theme.colors.bronzeOnDark : theme.colors.bronzeText)};
    .arrow {
      transform: translateX(5px);
    }
  }
`

export function ArrowLink({ to = '#', children, dark = false, ...rest }) {
  return (
    <StyledLink to={to} $dark={dark} {...rest}>
      <span>{children}</span>
      <span className="arrow" aria-hidden>→</span>
    </StyledLink>
  )
}
