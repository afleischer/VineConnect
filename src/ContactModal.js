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
			<div style={modalBackground} className="modal-container">
				<div>
				<h2>Please contact:{this.props.contactInfo} to get started!</h2>
				</div>
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