import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import NavMenu from './components/NavMenu'
import HomePage from './components/HomePage'
import FindWork from './components/FindWork'
import PostWork from './components/PostWork'
import ManageWork from './components/ManageWork'
import Footer from './components/Footer'

import {connect} from 'react-redux'

/*
To add back in as created:

        <NavMenu /> 

        <HomePage />
        <PostWork />

        <Footer /> 


*/

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <NavMenu />

        <FindWork />


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
    return state;
}

const mapDispatchToProps = dispatch => {
  //ex:
    //calledFunction: (parameters) => dispatch(functionName(parameters))
      //where functionName is imported as an action from an actions file

      return {

      };

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
