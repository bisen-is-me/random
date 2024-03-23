import './Navbar.scss';
import searchIcon from './imgs/icons8-search.svg';
import logoImage from './imgs/logo.png';
import React, { useState } from 'react';

const Navbar = ({ items = [] }) => {
  const visibleItems = items.slice(0, 7); 
  const hiddenItems = items.slice(7); 
  const [dropdownVisible, setDropdownVisible] = useState(false); 
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const [hoveredItem, setHoveredItem] = useState(null); 

  return (
    <nav className="navbar">
      <div className="left">
        <img src={logoImage} alt="Logo" className="logoImg" /> 
        <span className="logo">E-COMM</span>
        <ul className="visible-items">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
          {hiddenItems.length > 0 && (
            <li className="more" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="#">MORE</a>
              {dropdownVisible && (
                <ul className="hidden-items">
                  {hiddenItems.map((item, index) => (
                    <li key={index}>
                      <a href="#">{item}</a>
                      {hoveredItem === item && <span className="tick">&#10003;</span>}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
      <div className="right">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search something" className="search-input" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
