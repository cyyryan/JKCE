import { Hero } from '../sections/Hero'
import { Intro } from '../sections/Intro'
import { FeaturedProject } from '../sections/FeaturedProject'
import { Dedication } from '../sections/Dedication'
import { Community } from '../sections/Community'

/**
 * Home 首页
 * ---------
 * 首页由品牌引导、工作方式、服务范围、流程方法与场地责任五个板块组成。
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
