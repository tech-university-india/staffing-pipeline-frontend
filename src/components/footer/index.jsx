import React from 'react';
import './Footer.css';
import mckinseyLogo from '../../assets/logo/mckinsey-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <img className='footer-img' src={mckinseyLogo} alt="McKinsey and Company" />
    </div>
  );
};

export default Footer;