import React, { useState } from 'react';
import "../styles/Header.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-container'>
      <div className='navbar'>
        <p className='logo'>LOGO</p>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>

        {/* Nav Links */}
        <div className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
          <ul className='list'>
            <li>Qualifications <IoMdArrowDropdown /></li>
            <li>Organizations <IoMdArrowDropdown /></li>
            <li>Research & Analysis <IoMdArrowDropdown /></li>
            <li>Lorem Ipsum <IoMdArrowDropdown /></li>
            <li>Lorem Ipsum <IoMdArrowDropdown /></li>
            <IoSearch size={24} style={{ cursor: "pointer"}} />
          </ul>
        </div>
   
        <button className='enrolment'>Enrolment</button>
      </div>
    </div>
  );
}

export default Header;
