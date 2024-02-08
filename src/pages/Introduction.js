import React from "react";
import styled, {keyframes} from "styled-components";
import taleOfTalentsConfig from '../taleOfTalentsConfig.json';
import {SocialMediaHandler} from "../Components/SocialMediaHandler";
import BackgroundImage from '../Images/background-1.jpeg'
/* Reset following imports according to you */
import Resume from '../Resume/Resume_HimaniBhardwaj.pdf';
import ProfilePic from '../Images/himpic.jpeg';

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  background-image: url(${BackgroundImage}); /* Set background image */
  background-size: cover; /* Cover the entire element with the background image */
  background-position: center; /* Center the background image */
  margin-top: 10px;
`

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  align-items: flex-start;
`
const Salutation = styled.a`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 20px;
  margin-left: 150px; /* Add left margin */
  margin-top: 0; /* Reset top margin */
  margin-right: 0; /* Reset right margin */
  margin-bottom: 20px; /* Reset bottom margin */
  letter-spacing: 2px;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Title = styled.a`
  font-weight: 900;
  letter-spacing: 4px;
  font-size: 50px;
  margin-bottom: 20px;
  animation: ${fadeIn} 5s ease; /* animation */
  margin-left: 150px;
  display: flex;
`

const Content = styled.a`
  margin-bottom: 60px;
  margin-left: 150px;
  font-weight: 700;
  font-size: 35px;
  letter-spacing: 4px;
`
const T1 = styled.div`
  margin-right: 15px;
`
const T2 = styled.div`
  color: blueviolet;
`
const ButtonWrapper = styled.div`
  display: flex;
`
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`
const Button1 = styled.button`
  cursor: pointer;
  margin-left: 150px;
  margin-right: -50px;
  padding: 20px;
  border: 3px solid black;
  border-radius: 5%;
  background-color: blueviolet;
  color: white;
  font-weight: bolder;
  font-size: 20px;

  animation: ${bounceAnimation} 1s ease-in-out infinite; /* Apply animation */
  transition: transform 0.3s ease;

  &:hover {
    background-color: mediumblue; /* Text color on hover */
    animation: none; /* Remove animation on hover */
    transform: scale(1.1);
  }

  animation-delay: 3s; /* Delay the animation start by 3 seconds */
`
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.div`
  height: 80%;
  width: 80%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 2.0);
`
const Image = styled.img`
  height: 70%;
  width: 70%;
  border-radius: 30%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.7);
`
const SocialMediaWrapper = styled.div`
  display: flex;
  margin-left: 150px;
  margin-top: 45px;
`
export const Introduction = () => {
    const openResume = () => {
        window.open(Resume, '_blank');
    }
    return (
        <Wrapper>
            <LeftContainer>
                <Salutation>Hi There</Salutation>
                <Title>
                    <T1>I'M </T1>
                    <T2>{taleOfTalentsConfig.portfolioName}</T2>
                </Title>
                <Content>
                    I am a {taleOfTalentsConfig.professionalTitle}
                </Content>
                <ButtonWrapper>
                    <Button1 onClick={openResume}>
                        Check my Resume
                    </Button1>
                </ButtonWrapper>
                <SocialMediaWrapper>
                    <SocialMediaHandler icon="LinkedInIcon" link={taleOfTalentsConfig.socialMediaLinks.linkedin}/>
                    <SocialMediaHandler icon="GitHubIcon" link={taleOfTalentsConfig.socialMediaLinks.github}/>
                    <SocialMediaHandler icon="CodeIcon" link={taleOfTalentsConfig.socialMediaLinks.code}/>
                    <SocialMediaHandler icon="EmailIcon" link={taleOfTalentsConfig.socialMediaLinks.gmail}/>
                    <SocialMediaHandler icon="FacebookIcon" link={taleOfTalentsConfig.socialMediaLinks.facebook}/>
                    <SocialMediaHandler icon="InstagramIcon" link={taleOfTalentsConfig.socialMediaLinks.instagram}/>
                </SocialMediaWrapper>
            </LeftContainer>
            <RightContainer>
                <ImageContainer>
                    <Image
                        src={ProfilePic}
                        alt="Profile picture"
                    />
                </ImageContainer>
            </RightContainer>
        </Wrapper>
    );
};
