import { Navigate, useParams } from 'react-router-dom'
import { ServicePageTemplate } from '../components/ServicePageTemplate'
import { Seo } from '../components/Seo'
import { getProjectsByServiceSlug, getServiceBySlug, getServiceMeta } from '../content/siteData'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <Seo {...getServiceMeta(service)} />
      <ServicePageTemplate service={service} relatedProjects={getProjectsByServiceSlug(service.slug)} />
    </>
  )
}
