import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.nav}>
    
      <ul>
          <Link to="/">Home</Link>
          <Link to="/Information">About</Link>
          
      </ul>
    
    </div>
  );
}

export default Navbar;