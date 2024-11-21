import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}><Link to="/">BigBasket Clone</Link>                                                                               </h2>
      <div style={navLinksStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/contact">Contact Us</Link>        
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#00cc99',
  color: 'white',
};

const navLinksStyle = {
  display: 'flex',
  gap: '15px',
};

export default Navbar;
