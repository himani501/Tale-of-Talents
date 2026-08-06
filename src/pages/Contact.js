import React from "react";
import {Navbar} from "../Components/Navbar";
import {PageHeader} from "../Components/PageHeader";
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import styled from "styled-components";
import BackgroundImage from '../Images/background-1.jpeg'
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
`

const ContactWrapper = styled.div`
  margin-top: var(--spacing-3xl);
`

const ContactForm = styled.form`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-3xl);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`

const Label = styled.label`
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
`

const Input = styled.input`
  padding: var(--spacing-md);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-primary);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`

const TextArea = styled.textarea`
  padding: var(--spacing-md);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-primary);
  min-height: 150px;
  resize: vertical;
  font-family: var(--font-sans);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  border: none;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    align-self: stretch;
  }
`
export const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <Container>
                    <PageHeader
                        pageTitle="GET IN TOUCH"
                        pageDescription={`Have a question or want to work together? Feel free to reach out at ${taleOfTalentsConfig.email}`}
                        pageEndNote="I'll get back to you as soon as possible!"
                    />
                    <ContactWrapper>
                        <ContactForm
                            action={taleOfTalentsConfig.formspreeEndpoint}
                            method="POST"
                        >
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="username"
                                    placeholder="Your name"
                                    autoComplete="name"
                                    required
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="Email"
                                    placeholder="your.email@example.com"
                                    autoComplete="email"
                                    required
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="message">Message</Label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    placeholder="Your message here..."
                                    autoComplete="off"
                                    required
                                />
                            </FormGroup>
                            
                            <SubmitButton type="submit">Send Message</SubmitButton>
                        </ContactForm>
                    </ContactWrapper>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}