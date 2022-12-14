import "./Footer.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Valthornsvagen 61, Uppsala</p>
              <p>Sweden</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              073/23-33-091
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              darkojecinac@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>If you want to see more!? </h4>
          <p>
            Here are my social media links:
          </p>
          <div className='social'>
            <a href='//linkedin.com/in/darkojecinac/' target='_blank'>
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            /></a>
            <a href='//instagram.com/deejayconte/' target='_blank'>
            <FaInstagramSquare
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            /></a>
            <a href='//github.com/jecinacDarko'>
             <FaGithubSquare
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
