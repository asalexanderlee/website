import React from 'react';
import './Header.css';

const Header = ({curPg, onPgChoice}) => {
  return(
    <div class="Header">
        <div class="name"><div>Ashley Alexander-Lee</div></div>
        <div class="menu">
          <div class="menu-item" onClick={onPgChoice} id="home">Home</div>
          <div class="menu-item" onClick={onPgChoice} id="resume">Resume</div>
          <div class="menu-item" onClick={onPgChoice} id="portfolio">Portfolio</div>
          <div class="menu-item" onClick={onPgChoice} id="contact">Contact</div>
        </div>
    </div>
  )
}

export default Header;
