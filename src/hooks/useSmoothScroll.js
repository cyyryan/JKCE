import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * useSmoothScroll
 * ---------------
 * 初始化 Lenis 平滑滚动 —— 原站最核心的"丝滑感"来源。
 *
 * 实现要点:
 * 1. Lenis 接管浏览器原生滚动,用 requestAnimationFrame 驱动
 * 2. duration 越大越"重"越有惯性,1.2s 是高端品牌站的常用值
 * 3. easing 决定滚动曲线,这里用 exponential ease-out
 *
 * 在根组件调用一次即可,整站生效。
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // 将 lenis 实例挂到 window,方便其它组件(比如导航锚点跳转)调用
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      delete window.lenis
    }
  }, [])
}
