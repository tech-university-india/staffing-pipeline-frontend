import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="content-padding">
        <img src="./assets/McK_Logo.png" className="logo" />
        <div className="navbar">
          <button className="nav-button">Engagements</button>
          <button className="nav-button">People</button>
          <button className="nav-button">Case Studies</button>
        </div>
      </div>
    </div>
  );
}
