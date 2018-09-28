import React, { Component } from 'react';
import './Content.css';
import Navbar from '../Navbar/Navbar';
import ThumbnailsList from '../ThumbnailsList/ThumbnailsList';

class Content extends Component {
  render() {
    return (
      <div className="contentContainer row mx-0">
        <Navbar/>
        <ThumbnailsList />
      </div>
    );
  }
}

export default Content;
