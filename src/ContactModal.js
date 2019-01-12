import React from 'react'



class ContactModal extends React.Component{
	constructor(props){
		super(props);
	}

	state={
		clicked : false
	}

	render(){
		//if clicked, 
			//return a 
		return(
			<div className="modal-container">
				<div>
				<h2>Please contact:{this.props.contactInfo} to get started!</h2>
				</div>
			</div>
		)
	}
}