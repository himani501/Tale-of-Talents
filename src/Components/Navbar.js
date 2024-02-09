import React from "react";
import styled from "styled-components";
import profilePic from '../Images/himpic.jpeg';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {Link, Navigate} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  height: 100%;
`
const Left = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`
const Right = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: flex-end; // align items to the right
  margin-right: 30px;
`
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`

// Styled component for the enlarged image
const EnlargedImage = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2); /* Center the image and scale it */
  border-radius: 50%;
  overflow: hidden;
  padding: 10px;
  z-index: 1;
  transition: opacity 0.3s ease; /* Add transition for smooth opacity change */
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')}; /* Show the image if isVisible is true */
`

// Styled component for the original image
const Image = styled.img`
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  padding: 10px;

  &:hover + ${EnlargedImage} {
    opacity: 1; /* Show the enlarged image when hovering over the original image */
  }
`
const LinkWrapper = styled(Link)`
  cursor: pointer;
  margin-right: 45px;
  align-content: center;
  font-weight: 900;
  position: relative;
  display: inline-block;
  color: black; /* Default text color */
  text-decoration: none;

  &:hover {
    color: blue; /* Text color on hover */
    &:after {
      content: '';
      position: absolute;
      left: 50%; /* Position the underline in the middle */
      transform: translateX(-50%); /* Center the underline */
      bottom: -2px;
      width: 120%; /* Width of the underline */
      height: 2px;
      background-color: black;
    }
  }
`
export const Navbar =  () => {
    const [gotoContactPage, setContactPage] = React.useState(false);

    const handleClick = () => {
        setContactPage(prevState => !prevState);
    };

    if (gotoContactPage) {
        return <Navigate to="/contact" />;
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <ImageContainer>
                        <Image
                            src={profilePic}
                            alt="ProfilePic"
                        />
                        <EnlargedImage
                            src={profilePic}
                            alt="ProfilePic"
                        />
                    </ImageContainer>
                    <h4 style={{cursor: "pointer"}}>
                        <a href="https://github.com/himani501/Tale-of-Talents" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                        {"<Tale of Talents/>"}
                        </a>
                    </h4>
                </Left>
                <Right>
                    <LinkWrapper to="/">Home</LinkWrapper>
                    <LinkWrapper to="/about">About Me</LinkWrapper>
                    {/*<LinkWrapper to="/workexperience">Professional Experience</LinkWrapper>*/}
                    <LinkWrapper to="/projects">Personal Projects</LinkWrapper>
                    <LinkWrapper to="/blogs">Blogs</LinkWrapper>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon/>}
                        style={{fontWeight: 900, marginRight: '45px'}}
                        onClick={handleClick}
                    >
                        Get in Touch
                    </Button>
                </Right>
            </Wrapper>
        </Container>
    )
}
