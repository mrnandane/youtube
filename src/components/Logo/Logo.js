import React from 'react';
import logo from './logo.png';
import './Logo.css';

export const Logo = () => {
    return (
      <div className="col-md-1 logoWrapper inlineBlock">
        <img src={logo} alt="youtube logo" className="logo"/>
      </div>
    );
};

