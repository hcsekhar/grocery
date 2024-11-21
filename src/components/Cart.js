import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px', 
                borderBottom: '1px solid #ddd', 
                paddingBottom: '10px' 
              }}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover' }} 
              />
              <div style={{ flex: 1 }}>
                <p>{item.name} - ₹{item.price}</p>
              </div>
              <button onClick={() => onRemoveFromCart(index)} style={{ padding: '5px 10px' }}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
