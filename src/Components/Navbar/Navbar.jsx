import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaHeart, FaSearch } from "react-icons/fa";
import { FaSquareInstagram } from 'react-icons/fa6';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='container'>
      <img src={logo} alt="logo" />

      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links + Icons */}
      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <ul>
          <li>HOME</li>
          <li>WOMEN'S</li>
          <li>MEN'S</li>
          <li>BLOGS</li>
          <li>PAGES</li>
          <li>CONTACT</li>
        </ul>

        {/* Icons now inside hamburger */}
        <div className="icons">
          <div>Login</div>
          <div>/</div>
          <div>Registration</div>
          <div><FaSquareInstagram/></div>
          <div><FaFacebookF/></div>
          <div><FaHeart/></div>
          <div className='search'><FaSearch/></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


