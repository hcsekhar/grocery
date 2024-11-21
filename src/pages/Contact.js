import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          ></textarea>
        </div>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>

      <div style={infoStyle}>
        <h3>Our Address</h3>
        <p>123 Grocery Street, Hyderabad, India</p>
        <p>Phone: +91-9999999999</p>
        <p>Email: sekhar@gmail.com</p>
      </div>
    </div>
  );
};

// Inline Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginBottom: '20px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  resize: 'none',
  height: '100px',
};

const buttonStyle = {
  backgroundColor: '#00cc99',
  color: 'white',
  border: 'none',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const infoStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default Contact;
