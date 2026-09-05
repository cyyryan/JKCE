import { useId, useState } from 'react'
import styled from 'styled-components'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * DetailAccordion
 * ---------------
 * 用于 Scope of Work / FAQ / 技术细节等 Level 4 内容的渐进披露。
 * 原生 <button> 控制,自带键盘支持(Enter/Space);
 * aria-expanded + aria-controls + role="region" 满足基础无障碍语义。
 * 展开/收起用 CSS grid-template-rows 过渡,不做 JS 高度测量。
 */

const Wrapper = styled.div`
  border-top: 1px solid ${({ $dark, theme }) => theme.colors[$dark ? 'borderDark' : 'border']};
`

const Item = styled.div`
  border-bottom: 1px solid ${({ $dark, theme }) => theme.colors[$dark ? 'borderDark' : 'border']};
`

const Trigger = styled.button`
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 0;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.92rem;
  font-weight: 600;
  color: ${({ $dark, theme }) => theme.colors[$dark ? 'textOnDark' : 'ink']};
`

const Indicator = styled.span`
  flex-shrink: 0;
  position: relative;
  width: 1rem;
  height: 1rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ $dark, theme }) => theme.colors[$dark ? 'bronzeOnDark' : 'bronzeText']};
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &::before {
    width: 100%;
    height: 1.5px;
  }

  &::after {
    width: 1.5px;
    height: 100%;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: translate(-50%, -50%) ${({ $open }) => ($open ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`

const Panel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s ease;
`

const PanelInner = styled.div`
  overflow: hidden;
`

const PanelContent = styled.div`
  padding-bottom: 1.25rem;
  color: ${({ $dark, theme }) => theme.colors[$dark ? 'textOnDarkSecondary' : 'inkSecondary']};
  line-height: 1.65;
  font-size: 0.92rem;
  max-width: ${({ theme }) => theme.readingWidth};
`

export function DetailAccordion({ items, defaultOpenId = null, allowMultiple = false, dark = false, className }) {
  const baseId = useId()
  const reduceMotion = usePrefersReducedMotion()
  const [openIds, setOpenIds] = useState(() => new Set(defaultOpenId ? [defaultOpenId] : []))

  const toggle = (id) => {
    setOpenIds((current) => {
      const next = new Set(allowMultiple ? current : [])
      if (current.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <Wrapper $dark={dark} className={className}>
      {items.map((item, index) => {
        const id = item.id ?? String(index)
        const open = openIds.has(id)
        const buttonId = `${baseId}-trigger-${id}`
        const panelId = `${baseId}-panel-${id}`

        return (
          <Item key={id} $dark={dark}>
            <Trigger
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(id)}
              $dark={dark}
            >
              <span>{item.title}</span>
              <Indicator $open={open} $dark={dark} aria-hidden="true" />
            </Trigger>
            <Panel $open={open} style={reduceMotion ? { transition: 'none' } : undefined}>
              <PanelInner>
                <PanelContent
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  $dark={dark}
                >
                  {item.content}
                </PanelContent>
              </PanelInner>
            </Panel>
          </Item>
        )
      })}
    </Wrapper>
  )
}
