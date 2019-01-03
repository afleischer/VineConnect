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

import firebase, {db} from './firebase_config'

import {connect} from 'react-redux'

import { NavLink, Switch, Route } from 'react-router-dom';

import {NavStyler, NavOption, NavOptionText, LogoText} from './styles/NavStyler'


class App extends React.Component {
  constructor(props){
    super(props);

    this.LogOut = this.LogOut.bind(this);
  }

  state ={
    test: "foo"
  }


  LogOut(){
      firebase.auth().signOut().then(function() {
            this.setState({
                user_docs: null,
                session : null
            })
      }).catch(function(error) {
          // An error happened.
      });

  }

    /**
     * Detect user Auth state change at app level
     */
  componentDidMount() {

      firebase.auth().onAuthStateChanged(user => {

        // User is signed in.
        var theUser;

        if (user) {
          console.log("user is logged in!");

          theUser = user;

          var fb_ref = db.collection('users');
            fb_ref.where("uid", "==", user.uid)
                .get()
                .then(querySnapshot => {
                  let docArr = ["foo"];
                  console.log("querySnapshot is:" + querySnapshot);
                  querySnapshot.forEach(doc => {
                    docArr.push(doc.data());
                  });
                  this.setState({
                    session: theUser,
                    user_docs: docArr
                  })
                })
        } else {
          // No user is signed in.
          console.log("user is not logged in!")
          theUser = null;
          this.setState({
            session: theUser,
              user_docs: null
          });
        }
      })
  }

  render() {

    var user = firebase.auth().currentUser;
    
    console.log("user is:"+user)


    return (
      <div className="App">

        <NavMenu UserData={this.state.user_docs} />
        <Routes UserData={this.state.user_docs} Session={this.state.session} LogOutFn={this.LogOut} />
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
