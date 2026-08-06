import './App.css';
import React from 'react';
import styled from 'styled-components';
import { Navbar } from "./Components/Navbar";
import { Introduction } from "./pages/Introduction";
import { PageHeader } from "./Components/PageHeader";
import Footer from './Components/Footer';
import taleOfTalentsConfig from './taleOfTalentsConfig.json';
import BackgroundImage from './Images/background-1.jpeg';

const AppWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--bg-primary);
`;

const Section = styled.section`
  width: 100%;
  scroll-margin-top: 80px;
  
  &:first-of-type {
    scroll-margin-top: 0;
  }
  
  &#home {
    min-height: 100vh;
  }
`;

// About Section Styles
const AboutWrapper = styled.div`
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
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-top: var(--spacing-3xl);
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

const AboutSection = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
`;

const AboutDescription = styled.div`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  
  span {
    display: block;
    margin-bottom: var(--spacing-md);
  }
  
  b {
    color: var(--text-primary);
    font-weight: var(--font-semibold);
  }
`;

const SkillsSection = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
`;

const SectionTitle = styled.h3`
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

const SkillChip = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

// Projects Section Styles
const ProjectsWrapper = styled.div`
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
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--gray-100);
  position: relative;
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ContentWrapper = styled.div`
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0;
  line-height: var(--leading-tight);
`;

const ProjectDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0;
  flex: 1;
`;

const ProjectButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  border: none;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  margin-top: var(--spacing-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Blog Section Styles
const BlogWrapper = styled.div`
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
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
`;

const BlogsGrid = styled.div`
  display: grid;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
`;

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
`;

const BlogTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-md) 0;
  line-height: var(--leading-tight);
`;

const BlogDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--spacing-lg) 0;
`;

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
`;

// Contact Section Styles
const ContactWrapper = styled.div`
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
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
`;

const ContactFormWrapper = styled.div`
  margin-top: var(--spacing-3xl);
`;

const ContactForm = styled.form`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-3xl);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const Label = styled.label`
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
`;

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
`;

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
`;

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
`;

// Project Component
const ProjectWrapper = ({projectName, projectDescription, projectLink, projectImagePath}) => {
    const [imgSrc, setImageSrc] = React.useState(null)
    
    React.useEffect(() => {
        const importImage = async () => {
            try {
                const importedImage = await import(`./Images/${projectImagePath}`)
                setImageSrc(importedImage.default)
            } catch (e) {
                console.log('Error loading image', e)
            }
        }

        if(projectImagePath) {
            importImage()
        }
    }, [projectImagePath]);

    const showProject = (projectLink) => {
        window.open(projectLink, '_blank', 'noopener,noreferrer')
    }
    
    return (
        <ProjectCard>
            <ImageContainer>
                {imgSrc && <ImageItem src={imgSrc} alt={projectName} />}
            </ImageContainer>
            <ContentWrapper>
                <ProjectTitle>{projectName}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <ProjectButton onClick={() => showProject(projectLink)}>
                    View Project
                </ProjectButton>
            </ContentWrapper>
        </ProjectCard>
    )
}

// Blog Component
const BlogItem = ({blogTitle, blogLink, blogDescription}) => {
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

function App() {
  const projectInfo = taleOfTalentsConfig.personalProjects || [];
  const blogInfo = taleOfTalentsConfig.blogs || [];
  
  return (
    <AppWrapper>
      <Navbar />
      
      {/* Home Section */}
      <Section id="home">
        <Introduction />
      </Section>
      
      {/* About Section */}
      <Section id="about">
        <AboutWrapper>
          <Container>
            <PageHeader
              pageTitle="ABOUT ME"
              pageDescription="Learn more about my journey, expertise, and passion for building innovative software solutions."
              pageEndNote="Let's connect and explore opportunities to collaborate!"
            />
            <ContentGrid>
              <AboutSection>
                <AboutDescription>
                  <span>Welcome to my portfolio!</span>
                  <span dangerouslySetInnerHTML={{ __html: taleOfTalentsConfig.aboutMe }} />
                </AboutDescription>
              </AboutSection>
              <SkillsSection>
                <SectionTitle>Technical Skills</SectionTitle>
                <SkillsGrid>
                  {taleOfTalentsConfig.skills.map((skill, index) => (
                    <SkillChip key={index}>{skill}</SkillChip>
                  ))}
                </SkillsGrid>
              </SkillsSection>
            </ContentGrid>
          </Container>
        </AboutWrapper>
      </Section>
      
      {/* Projects Section */}
      <Section id="projects">
        <ProjectsWrapper>
          <Container>
            <PageHeader
              pageTitle="PROJECTS"
              pageDescription="Explore my portfolio of projects showcasing my technical expertise and creative problem-solving."
              pageEndNote="Each project represents a unique challenge and learning experience."
            />
            <ProjectsGrid>
              {projectInfo.map((project, index) => (
                <ProjectWrapper
                  key={index}
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectLink={project.projectLink}
                  projectImagePath={project.projectImagePath}
                />
              ))}
            </ProjectsGrid>
          </Container>
        </ProjectsWrapper>
      </Section>
      
      {/* Blog Section */}
      <Section id="blogs">
        <BlogWrapper>
          <BlogContainer>
            <PageHeader
              pageTitle="BLOG"
              pageDescription="Insights, tutorials, and thoughts on software engineering, technology, and professional development."
              pageEndNote="I'd love to hear your thoughts and feedback!"
            />
            <BlogsGrid>
              {blogInfo.map((blog, index) => (
                <BlogItem
                  key={index}
                  blogTitle={blog.blogTitle}
                  blogLink={blog.blogLink}
                  blogDescription={blog.blogDescription}
                />
              ))}
            </BlogsGrid>
          </BlogContainer>
        </BlogWrapper>
      </Section>
      
      {/* Contact Section */}
      <Section id="contact">
        <ContactWrapper>
          <ContactContainer>
            <PageHeader
              pageTitle="GET IN TOUCH"
              pageDescription={`Have a question or want to work together? Feel free to reach out at ${taleOfTalentsConfig.email}`}
              pageEndNote="I'll get back to you as soon as possible!"
            />
            <ContactFormWrapper>
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
            </ContactFormWrapper>
          </ContactContainer>
        </ContactWrapper>
      </Section>
      
      <Footer />
    </AppWrapper>
  );
}

export default App;

// Made with Bob
