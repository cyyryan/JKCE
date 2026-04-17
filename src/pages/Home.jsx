import { Hero } from '../sections/Hero'
import { Intro } from '../sections/Intro'
import { CoreServices } from '../sections/CoreServices'
import { TechEdge } from '../sections/TechEdge'
import { WhyChoose } from '../sections/WhyChoose'
import { FeaturedProjectsHome } from '../sections/FeaturedProjectsHome'
import { FinalCTA } from '../sections/FinalCTA'
import { Seo } from '../components/Seo'
import { pageMeta } from '../content/siteData'

export default function Home() {
  return (
    <>
      <Seo {...pageMeta.home} />
      <Hero />
      <Intro />
      <CoreServices />
      <TechEdge />
      <WhyChoose />
      <FeaturedProjectsHome />
      <FinalCTA />
    </>
  )
}
