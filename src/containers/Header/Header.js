import React, { Component } from 'react';
import './Header.css';
import {Logo} from '../../components/Logo/Logo';
import {Searchbox} from '../../components/Searchbox/Searchbox';
import {IconsTray} from '../../components/IconsTray/IconsTray';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header row shadow-sm bg-white rounded mx-0">
          <div className="col-md-2">
            <i className="fa fa-2x fa-bars hamberger-icon"></i>
            <Logo/>
          </div>
          <Searchbox />
          <IconsTray/>

        </header>
      </div>
    );
  }
}

export default Header;
