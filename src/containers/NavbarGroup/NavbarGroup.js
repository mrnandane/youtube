import React from 'react';
import './NavbarGroup.css';
import { NavbarItem } from '../../components/NavbarItem/NavbarItem';

const NavbarGroup = ({navGroupDetails}) => {
    const navItemsArray = navGroupDetails.navItems.map((navItem)=>{
      return (
        <li class="nav-item">
          <NavbarItem label={navItem.label} iconName={navItem.iconName}/>
        </li>
      )
    });
    return (
      <div className="NavbarGroupWrapper">
        {(navGroupDetails.label !=="") ? <p className="NavgroupLabel">{navGroupDetails.label}</p> : <span></span>}
        <div class="Nav-wrapper">
          <ul class="nav flex-column">
          {navItemsArray}
          </ul>
        </div>
      </div>
    );
}

export default NavbarGroup;
