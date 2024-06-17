import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/homePage.css';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


  return (
    <div className="home-page">
        <motion.div
        initial={{ opacity: 0 }}         
        animate={{ opacity: 1 }}         
        transition={{ duration: 0.8 }}>
      <div className="product-list">
        <div className="product-card special-card">
          <p>Balenciaga was a fashion house founded in 1919 by Spanish designer Cristóbal Balenciaga in San Sebastián and now based in Paris. Balenciaga closed in 1968 and reopened under a new owner in 1986. Balenciaga is now owned by the French fashion group Kering. Balenciaga's fashion shows showcase experimental clothing along with the excellent message on which the show is based.</p>
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
        </div>
        {products.slice(0, 10).map(product => (
          <motion.div
          key={product.id}
          initial={{ opacity: 0 }}         
          animate={{ opacity: 1 }}         
          transition={{ duration: 0.8 }}>
          <ProductCard key={product.id} product={product} />
          </motion.div>
        ))}
      </div>
          </motion.div>
    </div>
  );
};

export default HomePage;
