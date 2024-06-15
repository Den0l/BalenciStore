import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cart')
      .then(response => setCart(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const addToCart = (product) => {
    axios.post('http://localhost:3001/cart', product)
      .then(response => {
        setCart([...cart, response.data]);
      })
      .catch(error => console.error('Error adding to cart:', error));
  };

  const removeFromCart = (productId) => {
    axios.delete(`http://localhost:3001/cart/${productId}`)
      .then(() => {
        setCart(cart.filter(product => product.id !== productId));
      })
      .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
