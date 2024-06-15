import React, { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoriteContext';
import '../styles/Pages/productPage.css';


const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.some(cartItem => cartItem.id === product.id);

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.some(favorite => favorite.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const formattedDescription = product.description.split('.').map((sentence, index) => (
    <p key={index}>{sentence.trim()}.</p>
  ));

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.price} RUB</h3>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove' : 'Add'}
      </button>
      <button onClick={handleCartClick}>
        {isInCart ? 'Remove cart' : 'Add cart'}
      </button>
      <div className="product-description">
        <h2>Description:</h2>
        {formattedDescription}
      </div>
    </div>
  );
};

export default ProductPage;
