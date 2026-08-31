import { Hero } from '../sections/Hero'
import { TrustStrip } from '../sections/TrustStrip'
import { Intro } from '../sections/Intro'
import { CoreServices } from '../sections/CoreServices'
import { FeaturedCase } from '../sections/FeaturedCase'
import { TechCapability } from '../sections/TechCapability'
import { DeliveryProcess } from '../sections/DeliveryProcess'
import { MoreProjects } from '../sections/MoreProjects'
import { FinalCTA } from '../sections/FinalCTA'
import { Seo } from '../components/Seo'
import { pageMeta } from '../content/siteData'

export default function Home() {
  return (
    <>
      <Seo {...pageMeta.home} />
      <Hero />
      <TrustStrip />
      <Intro />
      <CoreServices />
      <FeaturedCase />
      <TechCapability />
      <DeliveryProcess />
      <MoreProjects />
      <FinalCTA />
    </>
  )
}
