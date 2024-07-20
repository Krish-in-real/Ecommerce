import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo"><h2>Exclusive</h2></div>
    <div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
      <li><a href="/">Sign Up</a></li>
    </ul>
    </div>
    <div className="search-container">
      <input type="text" placeholder="what are you looking for?" />
    </div>
  </nav>
  );
}

export default Navbar;