import React from 'react'

import firebase from '../firebase_config'


class Login extends React.Component{
	constructor(props){
		super(props);

		this.createUser = this.createUser.bind(this);
		this.validateUser = this.validateUser.bind(this);
		this.updateSession = this.updateSession.bind(this);
		this.updateUID = this.updateUID.bind(this);
		this.updatePass = this.updatePass.bind(this);
		
	}

	state = {
		login_or_signup : 'login',
		value_uid: '',
		value_pass: ''
	}


	updateSession(e){
		var login_or_signup = this.state.login_or_signup;
		if (login_or_signup === 'login'){
			this.validateUser(e);
		} else if (login_or_signup === 'signup'){
			this.createUser(e);
		}
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
		var dataRec = new FormData(e);

		/**
		 * Attempt to log user in
		 */

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

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
	render(){

		return(

			<form onSubmit={(e) => this.updateSession(e)}>
				<label for = "uname">username:</label>
					<input onChange = {(e) => this.updateUID(e)} name="uname"></input>
				<label for = "pass">password:</label>
					<input onChange = {(e) => this.updatePass(e)} namse = "pass" type = "password"></input>
				<input type="submit"></input>
			</form>

		);
	}

}

export default Login;