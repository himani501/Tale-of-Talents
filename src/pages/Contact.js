import React from "react";
import {Navbar} from "../Components/Navbar";
import {PageHeader} from "./PageHeader";
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import styled from "styled-components";
import BackgroundImage from '../Images/background-1.jpeg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  margin-top: 10px;
`
const ContactWrapper = styled.div`
  display: flex;
  height: 100%; /* Take full height of its parent */
  width: 100%; /* Take full width of its parent */
  margin-top: 20px;
  margin-left: 400px;
`
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: white;
  width: 900px;
  height: 500px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.7);
`
const UsernameInput = styled.input`
  padding: 10px;
`
const EmailInput = styled.input`
  padding: 10px;
`
const MessageInput = styled.textarea`
  height: 150px;
  resize: vertical;
  margin-bottom: 30px;
`
const SendButton = styled.button`
  cursor: pointer;
  width: 30%;
  border: 3px solid black;
  border-radius: 5%;
  background-color: blueviolet;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  padding: 14px;
`
export const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <PageHeader
                    pageTitle="CONTACT"
                    pageDescription={`Get in touch or shoot me an email directly on "${taleOfTalentsConfig.email}"`}
                    pageEndNote="I'll respond to you as soon as I can. Thank you for reaching out!"
                />
                <ContactWrapper>
                    <ContactForm
                        action={taleOfTalentsConfig.formspreeEndpoint}
                        method="POST" >
                        <h3>Name</h3>
                        <UsernameInput type="text" name="username" placeholder="Enter Your Name" autoComplete="off" required />
                        <h3>Email</h3>
                        <EmailInput type="email" name="Email" placeholder="Enter Your Email" autoComplete="off" required />
                        <h3>Message</h3>
                        <MessageInput name="message" placeholder="Enter Your Message" cols="30" rows="6" autoComplete="off" required/>
                        <SendButton>SUBMIT</SendButton>
                    </ContactForm>
                </ContactWrapper>
            </Wrapper>
        </div>
    )
}