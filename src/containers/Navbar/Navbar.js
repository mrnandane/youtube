import React, { Component } from 'react';
import './Navbar.css';
import NavbarGroup from '../../containers/NavbarGroup/NavbarGroup';
import NavbarDetails from '../../assets/navigationDetails';

class Navbar extends Component {
  render() {
    const navGroupsArray = NavbarDetails.navGroups.map((navGroup)=>{
      return <NavbarGroup navGroupDetails={navGroup} />
    });
    return (
      <div className="NavWrapper col-md-3">
        {navGroupsArray}
      </div>
    );
  }
}

export default Navbar;

