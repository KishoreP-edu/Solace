import React from 'react';
import './navbar.css';
import img from './../../assets/icons/icon11.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img} alt="Solace" height={60} width={115} />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
      </ul>
      <div className="signin-btn">
      <button>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;