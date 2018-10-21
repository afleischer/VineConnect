import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

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

const mapStateToProps = (state, ownProps) =>{
  //ex:
    /* return {
      PagesSnapshot : state.state.PageSnapshot

    } 
    */ 
}

const mapDispatchToProps = dispatch => {
  //ex:
    //calledFunction: (parameters) => dispatch(functionName(parameters))
      //where functionName is imported as an action from an actions file



}

export default connect(mapStateToProps, mapDispatchToProps)(App);
