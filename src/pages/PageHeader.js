import React from "react";
import styled from "styled-components";

const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25vh;
  flex-direction: column;
`;
const ContainerTitle = styled.p`
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
export const PageHeader = (props) => {
    return (
        <div>
            <ContainerPage>
                <ContainerTitle>{props.pageTitle}</ContainerTitle>
                <h3 style={{bottom: "-30px", position: "relative"}}>
                    {props.pageDescription}
                </h3>
                <h4>{props.pageEndNote}</h4>
            </ContainerPage>
        </div>
    )
}