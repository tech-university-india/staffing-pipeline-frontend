import React from 'react';
import './footer.css';
import mckinseyLogo from '../../assets/logo/mckinsey-logo.png';

const index = () => {
  return (
    <div className='footer'>
      <img src={mckinseyLogo} alt="McKinsey and Company" />
    </div>
  );
};

export default index;