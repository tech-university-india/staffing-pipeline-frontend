import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <div className="header">
      <div className="content-padding">
        <img src="./assets/McK_Logo.png" className="logo" />
        {props.hasNav && (
          <div className="navbar">
            <button className="nav-button">Engagements</button>
            <button className="nav-button">People</button>
            <button className="nav-button">Case Studies</button>
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  hasNav: PropTypes.bool,
};
