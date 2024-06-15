import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/homePage.css';

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
      <div className="product-list">
        <div className="product-card special-card">
          <p>Balenciaga — дом моды, основанный в 1919 году испанским дизайнером Кристобалем Баленсиагой в Сан-Себастьяне и в настоящее время базирующийся в Париже. Balenciaga закрылся в 1968 году и вновь открылся под управлением нового владельца в 1986 году. Ныне дом Balenciaga принадлежит французской модной группе Kering.</p>
          <Link to="/contact">
            <button>Связаться с нами</button>
          </Link>
        </div>
        {products.slice(0, 10).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
