import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', margin: 0 }}>&copy; {currentYear} Tale of talents by Himani Bhardwaj. All Rights Reserved.</p>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    // padding: '0.5rem 0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    minHeight: '7px',
};

export default Footer;
