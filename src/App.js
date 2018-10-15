import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavMenu from './components/NavMenu'
import HomePage from './components/HomePage'
import FindWork from './components/FindWork'
import PostWork from './components/PostWork'
import ManageWork from './components/ManageWork'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavMenu /> 
        
        <HomePage />

        <FindWork />

        <PostWork />

        <Footer /> 

      </div>
    );
  }
}

export default App;
