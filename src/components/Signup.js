import React from 'react'

import firebase from '../firebase_config'

import styled from 'styled-components'
import {NavLink} from 'react-router-dom'



class Signup extends React.Component{
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
        try{
            firebase.auth().createUserWithEmailAndPassword(email, password);
        }catch(error){
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage + errorCode)

        }

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
                <h2>Already have an account? <NavLink to="Login">Log in.</NavLink></h2>

			<form onSubmit={(e) => this.createUser(e)}>
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

export default Signup;