import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/"><b>Balenci</b></Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
