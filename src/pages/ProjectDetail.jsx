import { Navigate, useParams } from 'react-router-dom'
import { ProjectPageTemplate } from '../components/ProjectPageTemplate'
import { Seo } from '../components/Seo'
import { getProjectBySlug, getProjectMeta, services } from '../content/siteData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const relatedServices = services.filter((service) => project.serviceSlugs.includes(service.slug))

  return (
    <>
      <Seo {...getProjectMeta(project)} />
      <ProjectPageTemplate project={project} relatedServices={relatedServices} />
    </>
  )
}
