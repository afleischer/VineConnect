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

    /**
     * Detect user Auth state change at app level 
     */

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user is logged in!")
        this.setState({
          session: user
        })
        // User is signed in.
      } else {
        // No user is signed in.
        console.log("user is not logged in!")
      }
    });

  }


  render() {

    var user = firebase.auth().currentUser;
    
    console.log("user is:"+user)


    return (
      <div className="App">

        <NavMenu/>
        <Routes {...this.state} />

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
