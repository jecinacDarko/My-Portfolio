import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'  ;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {  
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      
      <Link to="/"></Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}> 
        <li><Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li><Link to="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        <li><Link to="/projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
        <li><Link to="/resume" spy={true} smooth={true} offset={50} duration={500}>Resume</Link></li>
        <li><Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>

      </ul>
      
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
