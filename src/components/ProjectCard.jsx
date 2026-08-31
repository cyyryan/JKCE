import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Meta, TagRow, Tag } from './PageScaffold'

const CardWrapper = styled(Link)`
  display: block;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bronze};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    margin-bottom: 0.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.6;
    font-size: 0.92rem;
  }
`

const ImageWrap = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.04);
  }
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ViewLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkMuted};
`

const Arrow = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.inkMuted};
  transition: transform 0.2s ease, color 0.2s ease;

  ${CardWrapper}:hover & {
    transform: translateX(5px);
    color: ${({ theme }) => theme.colors.bronzeText};
  }
`

export function ProjectCard({ project, showImage = true }) {
  const coverImage = project.gallery?.[0]

  return (
    <CardWrapper
      to={`/projects/${project.slug}`}
      aria-label={`View details for ${project.title}`}
    >
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
      <CardFooter>
        <ViewLabel>View Project</ViewLabel>
        <Arrow>→</Arrow>
      </CardFooter>
    </CardWrapper>
  )
}
