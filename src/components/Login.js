import React from 'react'

import firebase from '../firebase_config'

import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


class Login extends React.Component{
	constructor(props){
		super(props);

		this.createUser = this.createUser.bind(this);
		this.updateUID = this.updateUID.bind(this);
		this.updatePass = this.updatePass.bind(this);
		this.populateError = this.populateError.bind(this);


		/**
		 * 
		 */

	}

	state = {
		value_uid: '',
		value_pass: '',
		error : null
	}


	/**
	* On login, verify if the user is present server-side
	**/

	createUser(){
		var email = this.state.value_uid;
		var password = this.state.value_pass;
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		  });
	}

	validateUser(e){
		var email = this.state.value_uid;
		var password = this.state.value_pass;

		/**
		 * Attempt to log user in
		 */

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

			this.setState({ 
				error: true,
				error_msg: errorMessage
			});


			console.log("error detected, code is:"+errorCode+errorMessage);

			// ...
		  });
		  

		//encrypt the password and validate it on the server 
	}

	updateUID(e){
		var test = e;
		this.setState({
			value_uid: e.target.value
		})
	}

	updatePass(e){
		var test = e;
		this.setState({
			value_pass: e.target.value
		})
	}

	populateError(){
		const Error = styled.div`
		color: red;
	`
		if(this.state.error != null){
			return (<Error><h2>{this.state.errorMessage}</h2></Error>)
		}



		
	}
	render(){


		/**
		 * Determine if any error was previously logged to localStorage
		 */
		(function(){
			var stored = window.localStorage
			if(window.localStorage){

			}

		}());


		return(

			<div>
			<h2>Don't have an account?<NavLink to="Signup"> Sign up.</NavLink></h2>

			<form onSubmit={(e) => this.validateUser(e)}>
				<label for = "uname">username:</label>
					<input onChange = {(e) => this.updateUID(e)} name="uname"></input>
				<label for = "pass">password:</label>
					<input onChange = {(e) => this.updatePass(e)} namse = "pass" type = "password"></input>
				<input type="submit"></input>
				{this.populateError()}
			</form>
			</div>
		);
	}

}

export default Login;