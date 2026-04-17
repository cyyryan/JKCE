import styled from 'styled-components'
import { motion } from 'framer-motion'

/**
 * RevealText
 * ----------
 * 标题文字的"逐行上移揭示"动效。
 * 这是高端品牌站最具辨识度的动效之一:
 * 文字从底部像"升起"一样进入画面,每行有细微的时间差。
 *
 * 实现原理:
 * 1. 外层 <Line> 作为遮罩:overflow: hidden
 * 2. 内层 <Inner> 从 y:100% 动到 y:0,产生"从下往上被揭开"的效果
 *
 * 用法:
 *   <RevealText lines={["第一行", "第二行"]} />
 *   <RevealText text="单行大字" />
 */
const Line = styled.span`
  display: block;
  overflow: hidden;
  line-height: 1.05;
`

const Inner = styled(motion.span)`
  display: inline-block;
  will-change: transform;
`

export function RevealText({ lines, text, delay = 0, stagger = 0.12 }) {
  const items = lines || (text ? [text] : [])

  return (
    <>
      {items.map((line, i) => (
        <Line key={i}>
          <Inner
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </Inner>
        </Line>
      ))}
    </>
  )
}
