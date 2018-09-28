import React from 'react';
import './NavbarItem.css';

export const NavbarItem = ({label, iconName}) => {
  return (
    <div className="navbarItem inlineBlock">
      <span><i class={"fa-2x "+ iconName}></i></span>
      <a class="nav-link inlineBlock">{label}</a>
    </div>
  )
};