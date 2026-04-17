import { Hero } from '../sections/Hero'
import { Intro } from '../sections/Intro'
import { FeaturedProject } from '../sections/FeaturedProject'
import { Dedication } from '../sections/Dedication'
import { Community } from '../sections/Community'

/**
 * Home 首页
 * ---------
 * 按原站顺序串联所有板块:
 *   Hero (视频)
 *   → Intro (品牌哲学)
 *   → FeaturedProject (Oakhaus)
 *   → Dedication (深色交付)
 *   → Community (社区)
 *
 * 深-浅-浅-深-浅 的节奏,形成视觉起伏。
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProject />
      <Dedication />
      <Community />
    </>
  )
}
