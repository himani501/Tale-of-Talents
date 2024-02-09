import React, {useEffect} from "react";
import {Navbar} from "../Components/Navbar";
import styled from "styled-components";
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import BackgroundImage from "../Images/background-1.jpeg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh; 
  overflow-y: auto;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  margin-top: 10px;
`;

const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25vh;
  flex-direction: column;
`;
const AboutTitle = styled.p`
  font-weight: 900;
  letter-spacing: 4px;
  font-size: 50px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -25px; // distance between heading and underline
    width: 30%;
    border-bottom: 10px solid blueviolet; 
    border-radius: 30%;
    left: 35%;
  }
`;
const ParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProjectContainer = styled.div`
  display: flex;
  margin: 40px;
`
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`
const ImageItem = styled.img`
  height: 40vh;
  width: auto;
  border: 3px solid black;
`
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`
const ProjectTitle = styled.h1`
  letter-spacing: 4px;
  font-size: 40px;
`
const ProjectDescription = styled.p`
  width: 80%;
  margin-bottom: 60px;
`
const ProjectButton = styled.button`
  cursor: pointer !important;
  padding: 20px;
  border: 3px solid black;
  border-radius: 5%;
  background-color: blueviolet;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  width: 50%;
`
const ProjectWrapper = ( {projectName, projectDescription , projectLink, projectImagePath}) => {
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
        window.open(projectLink, '_blank')
    }
    return (
        <ProjectContainer>
            <ImageContainer>
                {imgSrc && <ImageItem src={imgSrc} alt={projectName} /> }
            </ImageContainer>
            <ContentWrapper>
                <ProjectTitle>{projectName}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <ProjectButton onClick={() => showProject(projectLink)}>Project Link</ProjectButton>
            </ContentWrapper>
        </ProjectContainer>
    )
}
export const Projects = () => {
    const projectInfo = taleOfTalentsConfig.projects
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <AboutHeader>
                    <AboutTitle>PROJECTS</AboutTitle>
                    <h3 style={{bottom: "-20px", position: "relative"}}>
                        Check out my projects! Each has a link and a picture of what it looks like.
                    </h3>
                    <h4>Embark on this journey of inspiration with me :)</h4>
                </AboutHeader>
                <ParentContainer>
                        {projectInfo.map((project, index) => (
                            <ProjectWrapper
                            key={index}
                            projectName ={project.projectName}
                            projectDescription ={project.projectDescription}
                            projectLink ={project.projectLink}
                            projectImagePath ={project.projectImagePath}
                            />
                        ))}
                </ParentContainer>
            </Wrapper>
        </div>
    )
}