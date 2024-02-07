import React from "react";
import styled, {keyframes} from "styled-components";
import ProfilePic from '../Images/himpic.jpeg';

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 250px;
  align-items: flex-start;
`;
const Salutation = styled.a`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 20px;
  margin-left: 150px; /* Add left margin */
  margin-top: 0; /* Reset top margin */
  margin-right: 0; /* Reset right margin */
  margin-bottom: 20px; /* Reset bottom margin */
  letter-spacing: 2px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Title = styled.a`
  font-weight: 900;
  letter-spacing: 4px;
  font-size: 50px;
  margin-bottom: 20px;
  animation: ${fadeIn} 5s ease; /* animation */
  margin-left: 150px;
  display: flex;
`;

const Content = styled.a`
  margin-bottom: 60px;
  margin-left: 150px;
  font-weight: 700;
  font-size: 35px;
  letter-spacing: 4px;
`;
const T1 = styled.div`
  margin-right: 15px;
`
const T2 = styled.div`
  color: blueviolet;
`
const ButtonWrapper = styled.div`
  display: flex;
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
  &:hover {
    background-color: mediumblue; /* Text color on hover */
  }
`
const Button2 = styled.button`
  cursor: pointer;
  margin-left: 150px;
  margin-right: -50px;
  padding: 20px;
  border: 3px solid black;
  border-radius: 5%;
  background-color: cornflowerblue;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  &:hover {
    background-color: mediumblue; /* Text color on hover */
  }
`
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 2.0);
`
const Image = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 30%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.7);
`
export const Introduction = () => {
    return (
        <Wrapper>
            <LeftContainer>
                <Salutation>Hi There</Salutation>
                <Title>
                    <T1>I'M </T1>
                    <T2>HIMANI BHARDWAJ</T2>
                </Title>
                <Content>
                    I am a Software Developer
                </Content>
                <ButtonWrapper>
                    <Button1>
                        Check my Resume
                    </Button1>
                    <Button2 >
                        Contact Me
                    </Button2>
                </ButtonWrapper>
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
