import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Reveal 组件
 * -----------
 * 滚动进入视口时的揭示动效,统一页面节奏。三种变体:
 *
 *   <Reveal>...</Reveal>                           // up(默认): opacity + y 24px→0,普通内容
 *   <Reveal variant="side" direction="right">...</Reveal>
 *                                                   // side: opacity + x ±40px→0,只用于图文分栏/重点色块
 *   <Reveal variant="mask" as="h2">...</Reveal>     // mask: overflow-hidden 遮罩上移,只用于大标题/关键数字
 *
 * 实现要点:
 * - viewport.once = true 只触发一次,避免回滚再触发
 * - amount 默认 0.2(0.15–0.3 区间),元素部分可见时触发
 * - 缓动曲线 [0.22, 1, 0.36, 1],时长 0.55–0.8s,位移不超过 48px
 * - prefers-reduced-motion 时关闭位移与遮罩,直接渲染最终态
 */
export function Reveal({
  children,
  variant = 'up',
  direction = 'left',
  delay = 0,
  y = 24,
  x = 40,
  duration = 0.6,
  as = 'div',
  className,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  if (variant === 'mask') {
    const Tag = as
    const { style, ...restProps } = rest
    return (
      <Tag className={className} style={{ overflow: 'hidden', ...style }} {...restProps}>
        <motion.span
          style={{ display: 'block' }}
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: Math.max(duration, 0.6), delay, ease: EASE }}
        >
          {children}
        </motion.span>
      </Tag>
    )
  }

  if (variant === 'side') {
    const offsetX = direction === 'right' ? -x : x
    return (
      <MotionTag
        className={className}
        initial={{ opacity: 0, x: offsetX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration, delay, ease: EASE }}
        {...rest}
      >
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
