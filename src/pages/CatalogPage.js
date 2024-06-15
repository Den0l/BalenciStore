import React, { useState, useEffect } from 'react';
import ProductCard from '../componetns/ProductCard';
import SearchBar from '../componetns/SearchBar';
import CategoryFilter from '../componetns/CategoryFilter';
import '../styles/Pages/catalogPage.css';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => 
        product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="catalog-page">
      <SearchBar setSearchQuery={setSearchQuery} />
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
