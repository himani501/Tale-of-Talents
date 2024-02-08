import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const SocialMediaContainer = styled.div`
  margin-right: 30px;
`;

const IconContainer = styled.div`
  cursor: pointer;
  padding: 10px; 
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1); /* Zoom out by 10% on hover on icon*/
  }
`;

export const SocialMediaHandler = (props) => {
    let iconComponent = null;
    switch (props.icon) {
        case 'LinkedInIcon':
            iconComponent =
                <a href={props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                    <LinkedInIcon />
                </a>
            break;
        case 'GitHubIcon':
            iconComponent =
                <a href={props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                    <GitHubIcon />
                </a>
            break;
        case 'CodeIcon':
            iconComponent =
                <a href={props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                    <CodeIcon />
                </a>
            break;
        case 'EmailIcon':
            iconComponent =
                <a href={props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                    <EmailIcon />
                </a>
            break;
        case 'FacebookIcon':
            iconComponent =
                <a href={props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                    <FacebookIcon />
                </a>
            break;
        case 'InstagramIcon':
            iconComponent =
                <a href={props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                    <InstagramIcon />
                </a>
            break;
        default:
            iconComponent = null;
            break;
    }
    return (
        <SocialMediaContainer>
            <IconContainer>{iconComponent}</IconContainer>
        </SocialMediaContainer>
    );
};
