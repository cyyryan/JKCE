import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Meta } from './PageScaffold'

const CardWrapper = styled(Link)`
  display: block;
  height: 100%;
  padding: 1.15rem;
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bronze};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    margin-bottom: 0.55rem;
  }

  p {
    color: ${({ theme }) => theme.colors.inkSecondary};
    line-height: 1.55;
    font-size: 0.96rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

const ImageWrap = styled.div`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 0.9rem;

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
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ViewLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
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
      </Meta>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <CardFooter>
        <ViewLabel>View Project</ViewLabel>
        <Arrow>→</Arrow>
      </CardFooter>
    </CardWrapper>
  )
}
