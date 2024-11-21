import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '10px', 
      margin: '10px', 
      width: '200px', 
      textAlign: 'center' 
    }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
      />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
