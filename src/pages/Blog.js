import React from "react";
import {Navbar} from "../Components/Navbar";
import {PageHeader} from "./PageHeader";
import BackgroundImage from '../Images/background-1.jpeg'
import taleOfTalentsConfig from'../taleOfTalentsConfig.json'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  margin-top: 10px;
`
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const BlogTitle = styled.h1`
    margin-left: 150px;
`
const BlogLink = styled.a`
  margin-left: 150px;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: blue;
`
const BlogDescription = styled.p`
  margin-left: 150px;
  margin-right: 150px;
  letter-spacing: 1px;
`
const BlogWrapper = ( { blogTitle, blogLink, blogDescription } ) => {
    return (
        <BlogContainer>
            <BlogTitle>{blogTitle}</BlogTitle>
            <BlogLink href={blogLink} target="_blank" rel="noopener noreferrer" >Link to the blog</BlogLink>
            <BlogDescription>{blogDescription}</BlogDescription>
        </BlogContainer>
    )
}
export const Blog = () => {
    const blogInfo = taleOfTalentsConfig.blogs
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <PageHeader
                    pageTitle="BLOGS"
                    pageDescription="Discover my latest blog posts! From insightful analyses to captivating narratives, each post offers a unique perspective. "
                    pageEndNote="Let me know your thoughts :)"
                />
                { blogInfo.map((blog, index) => (
                    <BlogWrapper
                        key={index}
                        blogTitle={blog.blogTitle}
                        blogLink={blog.blogLink}
                        blogDescription={blog.blogDescription}
                    />
                )) }
            </Wrapper>
        </div>
    )
}