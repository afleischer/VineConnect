import React from 'react'

//TODO: Build this out

import styled from 'styled-components'


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


		const ContactModalStyled = styled.div`
			display: ${state => state.opened ? "block" : "none"}, /* Hidden by default */
			position: absolute; /* Stay in place */
			z-index: 5; /* Sit on top */
			left: 0;
			top: 0;
			width: 100%; /* Full width */
			height: 100%; /* Full height */
			overflow: auto; /* Enable scroll if needed */
			background-color: rgba(0,0,0,0.4); /* Black w/ opacity */		
		`

		return(
			<div style={modalBackground} className="modal-container">
				<ContactModalStyled opened={this.state.opened}>
				<h2>Please contact: {this.props.SelectedJobUser} to get started!</h2>
				</ContactModalStyled>
				<div modalEntryBar>
					<div onClick={this.closeModal}>This will be the button.</div>
				</div>
			</div>
		)
	}
}


/**
 Modal styling
 */

//should take up 80% height and width

const modalBackground = {
	'width' : "80%",
	"height" : "80%",
	"background-color" : '#f7f2ef'
}

const modalEntryBar = {
	'background-color': '#9b9896'
}

export default ContactModal