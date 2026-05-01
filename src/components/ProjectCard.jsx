import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Meta, TagRow, Tag } from './PageScaffold'

const CardWrapper = styled(Link)`
  display: block;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 1.5rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textPrimary};
  }

  h3 {
    font-size: 1.55rem;
    margin-bottom: 0.9rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
  }
`

const ImageWrap = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.04);
  }
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`

const ViewLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Arrow = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: transform 0.2s ease;

  ${CardWrapper}:hover & {
    transform: translateX(5px);
    color: ${({ theme }) => theme.colors.textPrimary};
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
