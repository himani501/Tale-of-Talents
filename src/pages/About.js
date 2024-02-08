import React from "react";
import {Navbar} from "../Components/Navbar";
import styled from "styled-components";
import BackgroundImage from '../Images/background-1.jpeg'
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import Chip from '@mui/material/Chip';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
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

const ParentContainer = styled.div`
  display: flex;
  flex: 1; /* Take up remaining space */
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  position: relative;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  position: relative;
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
`;
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
                <AboutHeader>
                    <AboutTitle>ABOUT ME</AboutTitle>
                    <h3 style={{bottom: "-30px", position: "relative"}}>
                        Hello!! Discover insights about me, my endeavors, and my expertise, primarily focused on programming and technology.
                    </h3>
                    <h4>Hope to connect with you soon :)</h4>
                </AboutHeader>
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
        </div>
    );
};
