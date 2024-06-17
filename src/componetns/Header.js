import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';
import { motion } from 'framer-motion';

const Header = () => (
  <header>
    <div className='container'> 
    <motion.nav>
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/"><b>Balenci</b></Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/catalog">Catalog</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/favorites">Favorites</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/cart">Cart</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/order">Order</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/contact">Contact</Link>
      </motion.div>
    </motion.nav>
    </div>
  </header>
);

export default Header;
