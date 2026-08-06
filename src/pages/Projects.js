import React, {useEffect} from "react";
import {Navbar} from "../Components/Navbar";
import styled from "styled-components";
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import BackgroundImage from "../Images/background-1.jpeg";
import {PageHeader} from "../Components/PageHeader";
import Footer from '../Components/Footer';

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%),
              url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: var(--spacing-3xl) 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    z-index: 0;
  }
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--gray-100);
  position: relative;
`

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`

const ContentWrapper = styled.div`
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex: 1;
`

const ProjectTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0;
  line-height: var(--leading-tight);
`

const ProjectDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0;
  flex: 1;
`

const ProjectButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  border: none;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  margin-top: var(--spacing-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:active {
    transform: translateY(0);
  }
`
const ProjectWrapper = ({projectName, projectDescription, projectLink, projectImagePath}) => {
    const [imgSrc, setImageSrc] = React.useState(null)
    
    useEffect(() => {
        const importImage = async () => {
            try {
                const importedImage = await import(`../Images/${projectImagePath}`)
                setImageSrc(importedImage.default)
            } catch (e) {
                console.log('Error loading image', e)
            }
        }

        if(projectImagePath) {
            importImage()
        }
    }, [projectImagePath]);

    const showProject = (projectLink) => {
        window.open(projectLink, '_blank', 'noopener,noreferrer')
    }
    
    return (
        <ProjectCard>
            <ImageContainer>
                {imgSrc && <ImageItem src={imgSrc} alt={projectName} />}
            </ImageContainer>
            <ContentWrapper>
                <ProjectTitle>{projectName}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <ProjectButton onClick={() => showProject(projectLink)}>
                    View Project
                </ProjectButton>
            </ContentWrapper>
        </ProjectCard>
    )
}
export const Projects = () => {
    const projectInfo = taleOfTalentsConfig.personalProjects || []
    
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <Container>
                    <PageHeader
                        pageTitle="PROJECTS"
                        pageDescription="Explore my portfolio of projects showcasing my technical expertise and creative problem-solving."
                        pageEndNote="Each project represents a unique challenge and learning experience."
                    />
                    <ProjectsGrid>
                        {projectInfo.map((project, index) => (
                            <ProjectWrapper
                                key={index}
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                projectLink={project.projectLink}
                                projectImagePath={project.projectImagePath}
                            />
                        ))}
                    </ProjectsGrid>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}