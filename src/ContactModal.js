import React from 'react'

//TODO: Build this out

class ContactModal extends React.Component{
	constructor(props){
		super(props);
	}

	state={
		opened : false
	}

	closeModal = () => {
		this.setState({
			opened: false
		})
	}

	render(){
		//if clicked, 
			//return a 
		return(
			<div className="modal-container">
				<div>
				<h2>Please contact:{this.props.contactInfo} to get started!</h2>
				</div>
				<div onClick={this.closeModal}>This will be the button.</div>
			</div>
		)
	}
}