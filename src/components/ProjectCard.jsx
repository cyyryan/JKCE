import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card, Meta, TagRow, Tag } from './PageScaffold'

const CardLink = styled(Link)`
  display: inline-flex;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const ImageWrap = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export function ProjectCard({ project, showImage = true }) {
  const coverImage = project.gallery?.[0]

  return (
    <Card>
      {showImage && coverImage ? (
        <ImageWrap>
          <img
            src={coverImage.src}
            alt={coverImage.alt || `${project.title} project reference`}
            loading="lazy"
          />
        </ImageWrap>
      ) : null}

      <Meta>
        <span>{project.projectType}</span>
        <span>{project.location}</span>
        <span>{project.status}</span>
      </Meta>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <TagRow>
        {project.tags.slice(0, 2).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagRow>
      <CardLink to={`/projects/${project.slug}`} aria-label={`View details for ${project.title}`}>
        View Project
      </CardLink>
    </Card>
  )
}
