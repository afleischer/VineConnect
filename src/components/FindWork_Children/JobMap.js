import React from 'react';

//import GoogleApi from '../GoogleApi.js';
import GoogleApiComponent from './GoogleApiComponent.js'

import Map from './Map.js'

class JobMap extends React.Component {
	constructor(props){
		super(props)
	}
	//var api_key = this.props.api_key;
	//var gMapsSrc = "https://maps.googleapis.com/maps/api/js?key="+{api_key}+"&callback=initMap";

	//To return: 
		//google maps script
		//

	render(){

		const style = {
			width: '30vw',
			height: '30vh'
		}

		if(!this.props.loaded){
			return <div>Map Loading...</div>
		}

		return(
			<div style={style}>
				<Map google={this.props.google} />
			</div>
		)
	}

}


/*===========
Component to handle:
1. Loading the Google Maps API
2. Handling access to Google API within the components
===========*/


//GoogleApiComponent passes "loaded" prop that is set to true when 
//the Google API is loaded
export default  GoogleApiComponent({apiKey: "AIzaSyAErtRuaQIRoW5HIO61S8rks4YuI0gZ4zA"})(JobMap)