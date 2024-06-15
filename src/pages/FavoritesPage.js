import React, { useState, useEffect } from 'react';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/favoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/favorites')
      .then(response => response.json())
      .then(data => setFavorites(data));
  }, []);

  return (
    <div className="favorites-page">
      {favorites.length === 0 ? (
        <p className='empty'>EMPTY</p>
      ) : (
        <div className="product-list">
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
