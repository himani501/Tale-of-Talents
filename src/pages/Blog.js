import React from "react";
import {Navbar} from "../Components/Navbar";
import {PageHeader} from "../Components/PageHeader";
import BackgroundImage from '../Images/background-1.jpeg'
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import styled from "styled-components";
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
`

const BlogsGrid = styled.div`
  display: grid;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
`

const BlogCard = styled.article`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border-left: 4px solid transparent;
  
  &:hover {
    transform: translateX(8px);
    box-shadow: var(--shadow-xl);
    border-left-color: var(--primary-color);
  }
`

const BlogTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-md) 0;
  line-height: var(--leading-tight);
`

const BlogDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--spacing-lg) 0;
`

const BlogLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--primary-color);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  text-decoration: none;
  transition: all var(--transition-fast);
  
  &:after {
    content: '→';
    transition: transform var(--transition-fast);
  }
  
  &:hover {
    color: var(--primary-dark);
    
    &:after {
      transform: translateX(4px);
    }
  }
`

const BlogWrapper = ({blogTitle, blogLink, blogDescription}) => {
    return (
        <BlogCard>
            <BlogTitle>{blogTitle}</BlogTitle>
            <BlogDescription>{blogDescription}</BlogDescription>
            <BlogLink href={blogLink} target="_blank" rel="noopener noreferrer">
                Read Article
            </BlogLink>
        </BlogCard>
    )
}
export const Blog = () => {
    const blogInfo = taleOfTalentsConfig.blogs
    
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <Container>
                    <PageHeader
                        pageTitle="BLOG"
                        pageDescription="Insights, tutorials, and thoughts on software engineering, technology, and professional development."
                        pageEndNote="I'd love to hear your thoughts and feedback!"
                    />
                    <BlogsGrid>
                        {blogInfo.map((blog, index) => (
                            <BlogWrapper
                                key={index}
                                blogTitle={blog.blogTitle}
                                blogLink={blog.blogLink}
                                blogDescription={blog.blogDescription}
                            />
                        ))}
                    </BlogsGrid>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}