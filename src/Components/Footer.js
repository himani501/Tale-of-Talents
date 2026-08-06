import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: linear-gradient(135deg, var(--gray-900), var(--gray-800));
    color: var(--text-inverse);
    padding: var(--spacing-lg) 0;
    position: relative;
    width: 100%;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-xl);
    text-align: center;
`;

const FooterText = styled.p`
    font-size: var(--text-sm);
    margin: 0;
    opacity: 0.9;
    
    a {
        color: var(--primary-light);
        text-decoration: none;
        font-weight: var(--font-semibold);
        transition: color var(--transition-fast);
        
        &:hover {
            color: var(--accent-color);
        }
    }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    &copy; {currentYear} <a href="https://github.com/himani501/Tale-of-Talents" target="_blank" rel="noopener noreferrer">Tale of Talents</a> by Himani Bhardwaj. All Rights Reserved.
                </FooterText>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;
