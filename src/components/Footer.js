import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3>About Us</h3>
        <p>
          Customer First <br></br>
          Commitment to Quality  <br></br>
          Innovation and Sustainability
        </p>
      </div>

      <div style={sectionStyle}>
        <h3>Quick Links</h3>
        <ul style={listStyle}>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3>Follow Us</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© 2024 BigBasket Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Basic Styles
const footerStyle = {
  backgroundColor: '#00cc99',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  flexWrap: 'wrap',
};

const sectionStyle = {
  margin: '10px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

export default Footer;
