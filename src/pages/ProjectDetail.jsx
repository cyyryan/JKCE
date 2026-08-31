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

  const ICF_SERVICE = { slug: 'icf', name: 'ICF Construction', shortName: 'ICF' }
  const relatedServices = project.serviceSlugs
    .map((slug) => (slug === 'icf' ? ICF_SERVICE : services.find((service) => service.slug === slug)))
    .filter(Boolean)

  return (
    <>
      <Seo {...getProjectMeta(project)} />
      <ProjectPageTemplate project={project} relatedServices={relatedServices} />
    </>
  )
}
