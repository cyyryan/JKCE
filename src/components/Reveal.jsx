import { motion } from 'framer-motion'

/**
 * Reveal 组件
 * -----------
 * 元素进入视口时的淡入 + 上移动画。
 * 通用的滚动进入视口揭示动效，用于统一页面节奏。
 *
 * 用法:
 *   <Reveal>...</Reveal>                // 默认
 *   <Reveal delay={0.2}>...</Reveal>    // 延迟触发(做错峰效果)
 *   <Reveal y={80}>...</Reveal>         // 更大的位移距离
 *   <Reveal as="h1">...</Reveal>        // 当作 h1 渲染
 *
 * 实现要点:
 * - viewport.once = true 只触发一次,避免回滚再触发
 * - amount = 0.2 表示元素 20% 可见时触发
 * - 缓动曲线 [0.22, 1, 0.36, 1] = 常用的 easeOutExpo,高端优雅
 */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.9,
  as = 'div',
  className,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
