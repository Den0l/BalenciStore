import React, { useState, useEffect } from 'react';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/cartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then(response => response.json())
      .then(data => setCart(data));
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total += product.price, 0);
  };

  return (
    <div className="cart-page">
      <div className="total-price">
        <p>: {getTotalPrice()} RUB</p>
      </div>
    {cart.length === 0 ? (
      <p className='empty'>EMPTY</p>
    ) : (
      <div className="product-list">
        {cart.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
    </div>
  );
};

export default CartPage;
