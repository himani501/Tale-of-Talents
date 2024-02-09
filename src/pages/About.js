import React from "react";
import {Navbar} from "../Components/Navbar";
import {PageHeader} from "../Components/PageHeader";
import styled from "styled-components";
import BackgroundImage from '../Images/background-1.jpeg'
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import Chip from '@mui/material/Chip';
import Footer from '../Components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  margin-top: 10px;
`
const ParentContainer = styled.div`
  display: flex;
  flex: 1; /* Take up remaining space */
  justify-content: center;
  align-items: center;
`
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  position: relative;
`
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  position: relative;
`
const AboutDescription = styled.p`
  position: absolute;
  top: 70px; 
  left: 150px;
  width: 600px; 
  margin: 0; 
  font-weight: normal;
  font-size: 18px;
  font-style: italic;
  box-sizing: border-box;
`
const SkillContainer = styled.div`
  position: absolute;
  top: 50px;
  left:150px;
`
export const About = () => {
    const skills = taleOfTalentsConfig.skills.map((skill, index) => (
        <div key={index} style={{ marginRight: "20px", marginBottom: "20px", fontWeight: "20px", display: "inline-block" }}>
            <Chip label={skill} />
        </div>
    ));
    return (
        <div>
            <Navbar />
            <Wrapper>
                <PageHeader
                    pageTitle="ABOUT ME"
                    pageDescription="Hello!! Discover insights about me, my endeavors, and my expertise, primarily focused on programming and technology."
                    pageEndNote="Hope to connect with you soon :)"
                />
                <ParentContainer>
                    <LeftContainer>
                        <AboutDescription>
                            <span>
                            Welcome to my Tale of Talents portfolio page!
                            </span>
                            <br/><br/>
                            <span dangerouslySetInnerHTML={{ __html: taleOfTalentsConfig.aboutMe }} />
                        </AboutDescription>
                    </LeftContainer>
                    <RightContainer>
                        <SkillContainer>
                            <h1 style={{alignContent: "center"}}>SKILLS</h1>
                            <br/><br/>
                            {skills}
                        </SkillContainer>
                    </RightContainer>
                </ParentContainer>
            </Wrapper>
            <Footer/>
        </div>
    );
};
