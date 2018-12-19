import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

/***
 * App Child components imported
 */

import NavMenu from './components/NavMenu'
import HomePage from './components/HomePage'
import FindWork from './components/FindWork'
import PostWork from './components/PostWork'
import ManageWork from './components/ManageWork'
import Footer from './components/Footer'
import Routes from './Routes'
import Hamburger from './components/Hamburger'

import firebase from './firebase_config'

import {connect} from 'react-redux'

import { NavLink, Switch, Route } from 'react-router-dom';

import {NavStyler, NavOption, NavOptionText, LogoText} from './styles/NavStyler'





/*
To add back in as created:

        <NavMenu /> 

        <HomePage />
        <PostWork />

        <Footer /> 


*/

class App extends React.Component {
  constructor(props){
    super(props);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user is logged in!")
        // User is signed in.
      } else {
        // No user is signed in.
        console.log("user is not logged in!")
      }
    });

  }


  state = {
    user_session : null
  }

  render() {
    return (
      <div className="App">

        <NavMenu/>
        <Routes/>
        
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

export default App
