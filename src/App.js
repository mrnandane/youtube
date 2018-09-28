import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
