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
import Hamburger from './components/NavMenu_Child/Hamburger'

import firebase, {db} from './firebase_config'

import {connect} from 'react-redux'

import { NavLink, Switch, Route } from 'react-router-dom';

import {NavStyler, NavOption, NavOptionText, LogoText} from './styles/NavStyler'


class App extends React.Component {
  constructor(props){
    super(props);

    this.LogOut = this.LogOut.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
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
                  querySnapshot.forEach(doc => {
                    docArr.push(doc.data());
                  });
                  this.setState({
                    session: theUser,
                    user_docs: docArr
                  })

        //fetch jobs that the user has entered
        db.collection("jobs").where("active", "==", true)
                .where("job_poster_id", "==", user.uid)
                .get().then((querySnapshot) => {
                var jobsArr = [];
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    jobsArr.push(doc.data())
                });

                this.setState({
                    displayedJobs : jobsArr
                })
            });

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

    deleteJob(uuid){
        //in Firebase, set "active" on job to N

        let toChangeUID = this.state.user_docs[1].uid

        //Set the business id of what is passed on to false
            //???What will the id passed be? What will it look like?

    }

    highlightJob = (JobItem) => {
      //Need to retrieve the "jobs" document
        var received = JobItem.job_poster_id;

        return received;

    }


  render() {



    var user = firebase.auth().currentUser;
    
    console.log("user is:"+user)


    return (
      <div className="App">

        <NavMenu UserData={this.state.user_docs} />
        <Routes UserData={this.state.user_docs}
                Session={this.state.session}
                LogOutFn={this.LogOut}
                DeleteJob={this.deleteJob}
        JobsList={this.state.displayedJobs}

        />
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
