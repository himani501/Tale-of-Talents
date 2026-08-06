import React from "react";
import styled from "styled-components";
import profilePic from '../Images/himpic.jpeg';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
`
const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
`
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 3px solid var(--primary-color);
  transition: all var(--transition-normal);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
  }
`

const Logo = styled.div`
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  cursor: pointer;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary-color);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    display: none;
  }
`

const LinkWrapper = styled.a`
  cursor: pointer;
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  color: var(--text-secondary);
  text-decoration: none;
  position: relative;
  padding: var(--spacing-xs) 0;
  transition: color var(--transition-fast);

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width var(--transition-normal);
  }

  &:hover {
    color: var(--primary-color);
    
    &:after {
      width: 100%;
    }
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }
`
export const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <ImageContainer>
                        <Image
                            src={profilePic}
                            alt="Profile"
                            onClick={() => scrollToSection('home')}
                        />
                    </ImageContainer>
                    <Logo>
                        <a href="https://github.com/himani501/Tale-of-Talents" target="_blank" rel="noopener noreferrer">
                            {"<Tale of Talents/>"}
                        </a>
                    </Logo>
                </Left>
                <Right>
                    <NavLinks>
                        <LinkWrapper onClick={() => scrollToSection('home')}>Home</LinkWrapper>
                        <LinkWrapper onClick={() => scrollToSection('about')}>About</LinkWrapper>
                        <LinkWrapper onClick={() => scrollToSection('projects')}>Projects</LinkWrapper>
                        <LinkWrapper onClick={() => scrollToSection('blogs')}>Blog</LinkWrapper>
                    </NavLinks>
                    <CTAButton onClick={() => scrollToSection('contact')}>
                        Get in Touch
                        <SendIcon style={{ fontSize: '18px' }} />
                    </CTAButton>
                </Right>
            </Wrapper>
        </Container>
    )
}
