import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  const closeMenu = () => setClick(false)
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>    
      <Link to="/" ></Link>
      <h1 className='logo'>DJ</h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}> 
        <li><LinkS to="home"spy={true} smooth={true} offset={0} duration={700} onClick={closeMenu} style={{cursor:'pointer'}} >Home</LinkS></li>
        <li><LinkS to="about" spy={true} smooth={true} offset={0} duration={700} onClick={closeMenu} style={{cursor:'pointer'}} >About</LinkS></li>
        <li><LinkS to="projects" spy={true} smooth={true} offset={0} duration={700} onClick={closeMenu} style={{cursor:'pointer'}} >Projects</LinkS></li>
        <li><LinkS to="techstack" spy={true} smooth={true} offset={-90} duration={700} onClick={closeMenu} style={{cursor:'pointer'}} >Techstack</LinkS></li> 
        <li><LinkS to="contact" spy={true} smooth={true} offset={0} duration={700} onClick={closeMenu} style={{cursor:'pointer'}} >Contact</LinkS></li>
        <li><Link to="//drive.google.com/file/d/1vf2PPXBSpRJYQEC6--cfzbthnhnNlg6l/view?usp=share_link" target='_blank'>Resume</Link></li>
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
