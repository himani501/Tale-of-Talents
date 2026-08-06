import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-2xl);
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-extrabold);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-md) 0;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: var(--radius-full);
  }
`;

const Description = styled.p`
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin: var(--spacing-xl) auto var(--spacing-md) auto;
  max-width: 700px;
  line-height: var(--leading-relaxed);
`;

const EndNote = styled.p`
  font-size: var(--text-base);
  color: var(--text-tertiary);
  font-style: italic;
  margin: 0;
`;

export const PageHeader = (props) => {
    return (
        <HeaderContainer>
            <Title>{props.pageTitle}</Title>
            <Description>{props.pageDescription}</Description>
            {props.pageEndNote && <EndNote>{props.pageEndNote}</EndNote>}
        </HeaderContainer>
    )
}