import React from "react";
import styled, {keyframes} from "styled-components";
import taleOfTalentsConfig from '../taleOfTalentsConfig.json';
import {SocialMediaHandler} from "../Components/SocialMediaHandler";
import BackgroundImage from '../Images/background-1.jpeg'
/* Reset following imports according to you */
import Resume from '../Resume/Himani Bhardwaj Resume.pdf';
import ProfilePic from '../Images/himpic.jpeg';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%),
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
    background: rgba(255, 255, 255, 0.9);
    z-index: 0;
  }
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  
  @media (max-width: 968px) {
    align-items: center;
  }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Salutation = styled.div`
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  color: var(--primary-color);
  letter-spacing: 2px;
  animation: ${fadeInUp} 0.6s ease-out;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-extrabold);
  line-height: var(--leading-tight);
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
  
  span {
    display: block;
  }
`

const NameHighlight = styled.span`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: var(--text-2xl);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.4s both;
  
  @media (max-width: 968px) {
    font-size: var(--text-xl);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  animation: ${fadeInUp} 0.6s ease-out 0.6s both;
  
  @media (max-width: 968px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  animation: ${fadeInUp} 0.6s ease-out 0.8s both;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  
  @media (max-width: 968px) {
    order: -1;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: var(--radius-2xl);
    z-index: -1;
    opacity: 0.2;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  transition: transform var(--transition-slow);
  
  &:hover {
    transform: scale(1.02);
  }
`
export const Introduction = () => {
    const openResume = () => {
        window.open(Resume, '_blank');
    }
    
    return (
        <Wrapper>
            <Container>
                <LeftContainer>
                    <Salutation>Hi There, I'm</Salutation>
                    <Title>
                        <NameHighlight>{taleOfTalentsConfig.portfolioName}</NameHighlight>
                    </Title>
                    <Subtitle>
                        {taleOfTalentsConfig.professionalTitle}
                    </Subtitle>
                    <ButtonWrapper>
                        <PrimaryButton onClick={openResume}>
                            View Resume
                        </PrimaryButton>
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
                            alt="Profile"
                        />
                    </ImageContainer>
                </RightContainer>
            </Container>
        </Wrapper>
    );
};
