import React from "react";
import {Navbar} from "../Components/Navbar";
import {PageHeader} from "../Components/PageHeader";
import styled from "styled-components";
import BackgroundImage from '../Images/background-1.jpeg'
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-top: var(--spacing-3xl);
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`

const AboutSection = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
`

const AboutDescription = styled.div`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  
  span {
    display: block;
    margin-bottom: var(--spacing-md);
  }
  
  b {
    color: var(--text-primary);
    font-weight: var(--font-semibold);
  }
`

const SkillsSection = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
`

const SectionTitle = styled.h3`
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`

const SkillChip = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`
export const About = () => {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Container>
                    <PageHeader
                        pageTitle="ABOUT ME"
                        pageDescription="Learn more about my journey, expertise, and passion for building innovative software solutions."
                        pageEndNote="Let's connect and explore opportunities to collaborate!"
                    />
                    <ContentGrid>
                        <AboutSection>
                            <AboutDescription>
                                <span>Welcome to my portfolio!</span>
                                <span dangerouslySetInnerHTML={{ __html: taleOfTalentsConfig.aboutMe }} />
                            </AboutDescription>
                        </AboutSection>
                        <SkillsSection>
                            <SectionTitle>Technical Skills</SectionTitle>
                            <SkillsGrid>
                                {taleOfTalentsConfig.skills.map((skill, index) => (
                                    <SkillChip key={index}>{skill}</SkillChip>
                                ))}
                            </SkillsGrid>
                        </SkillsSection>
                    </ContentGrid>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    );
};
