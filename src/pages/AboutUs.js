import React from 'react';

const AboutUs = () => {
  return (
    <div style={containerStyle}>
      <h2>About Us</h2>
      <section style={sectionStyle}>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide the best quality groceries at affordable prices, delivered to your doorstep with ease.
        </p>
      </section>

      <section style={sectionStyle}>
        <h3>Our Vision</h3>
        <p>
          We aim to be the top online grocery store, making grocery shopping convenient for people across the country.
        </p>
      </section>

      <section style={sectionStyle}>
        <h3>Our Values</h3>
        <ul>
          <p>Customer First</p>
          <p>Commitment to Quality</p>
          <p>Innovation and Sustainability</p>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3>Contact Information</h3>
        <p>Phone: +91-9999999999</p>
        <p>Email: sekhar@gmail.com</p>
        <p>Location: Hyderabad, India</p>
      </section>
    </div>
  );
};

// Styles for the About Us Page
const containerStyle = {
  padding: '20px',
  textAlign: 'center',
};

const sectionStyle = {
  marginBottom: '20px',
};

export default AboutUs;
