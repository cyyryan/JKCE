import { Hero } from '../sections/Hero'
import { Intro } from '../sections/Intro'
import { CoreServices } from '../sections/CoreServices'
import { WhyChoose } from '../sections/WhyChoose'
import { FeaturedProjectsHome } from '../sections/FeaturedProjectsHome'
import { FinalCTA } from '../sections/FinalCTA'
import { Seo } from '../components/Seo'
import { pageMeta } from '../content/siteData'

/**
 * Home 首页
 * ---------
 * 首页保留现有设计方向,作为顶层 IA 的入口页。
 */
export default function Home() {
  return (
    <>
      <Seo {...pageMeta.home} />
      <Hero />
      <Intro />
      <CoreServices />
      <WhyChoose />
      <FeaturedProjectsHome />
      <FinalCTA />
    </>
  )
}
