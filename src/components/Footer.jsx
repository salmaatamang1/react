import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/" className='logo'>
            <img src={Logo} alt="Footer Logo" />
          </Link>
        </div>
        <div>
          <h5 className="follow-principle">Lets follow 3R Principle</h5>
          <div className="footer__socials">
            <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><AiFillFacebook/></a>
            <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
            <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
          </div>
        </div>
      </div>
        <div className="centered-content">
          <small>2023 SafaSahar Website &copy; All Rights Reserved</small>
        </div>
      
    </footer>
  );
};

export default Footer;
