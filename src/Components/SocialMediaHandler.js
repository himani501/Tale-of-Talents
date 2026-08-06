import React from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const SocialMediaContainer = styled(motion.div)`
  display: inline-block;
`;

const IconContainer = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(-3px) scale(1.05);
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;

    svg {
      font-size: 1.3rem;
    }
  }
`;

export const SocialMediaHandler = (props) => {
  let iconComponent = null;
  
  const iconMap = {
    'LinkedInIcon': LinkedInIcon,
    'GitHubIcon': GitHubIcon,
    'CodeIcon': CodeIcon,
    'EmailIcon': EmailIcon,
    'FacebookIcon': FacebookIcon,
    'InstagramIcon': InstagramIcon
  };

  const IconComponent = iconMap[props.icon];

  if (IconComponent) {
    iconComponent = <IconComponent />;
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <SocialMediaContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <IconContainer
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {iconComponent}
      </IconContainer>
    </SocialMediaContainer>
  );
};

// Made with Bob
