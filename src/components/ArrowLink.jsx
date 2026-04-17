import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * ArrowLink —— 带细箭头的链接,悬停时箭头右移。
 * 原站在 "About Everglade" / "Visit Oakhaus" 等 CTA 上用的都是这种风格。
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
  color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDark : theme.colors.textPrimary)};
  padding: 1rem 0;
  border-bottom: 1px solid currentColor;
  transition: opacity 0.3s ease;
  position: relative;

  .arrow {
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    opacity: 0.7;
    .arrow {
      transform: translateX(6px);
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
