import React from 'react'


class Login extends React.Component{
	constructor(props){
		super(props);

	}

	state = {
		value_uid: '',
		value_pass: ''
	}


	/**
	* On login, verify if the user is present server-side
	**/

	validateUser(){
		
		//compare the entered state

		//encrypt the password and validate it on the server 
	}

	updateUID(event){
	    this.setState({value_id: event.target.value});
	}

	updatePass(event){
		this.setState({value_id: event.target.value});

		/***
		 * Need to set some type of timeout so that the client's password state
		 * is reset after a period of time- likely as long as the user is logged in
		 */
	}


	render(){

		return(

			<form onSubmit={this.validateUser}>
				<label for = "uname">username:</label>
					<input onChange = {this.updateUID} name="uname"></input>
				<label for = "pass">password:</label>
					<input onChange = {this.updatePass} namse = "pass" type = "password"></input>
				<input type="submit">SUBMIT</input>
			</form>

		);
	}

}

export default Login;