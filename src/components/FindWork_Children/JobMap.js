import React from 'react';

/**
 * Importing Components
 */

import JobList from './JobList';

/**
 * Google Maps API modules
 */

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import {MapStyle} from '../../styles/NavStyler'

class JobMap extends React.Component {
	constructor(props){
		super(props);

		this.MapRef = React.createRef();
	}
	//var api_key = this.props.api_key;
	//var gMapsSrc = "https://maps.googleapis.com/maps/api/js?key="+{api_key}+"&callback=initMap";

	//To return: 
		//google maps script
		//



	render(){

		const style = {
			width: '70vw',
			height: '70vh',
			border: '2px solid #555555',
			display: 'inline-block'

		}
		//Initial GeoLocation
		

		if(!this.props.loaded){
			return <div>Map Loading...</div>
		}

		return(
				<Map 
					ref = {this.MapRef}
					google={this.props.google} 
					style = {style}
					center = {{
						lat: this.props.userLocation.lat,
						lng: this.props.userLocation.lng					
					}}
					initialCenter = {{
						lat: this.props.userLocation.lat,
						lng: this.props.userLocation.lng
					}}
					zoom = {12} 
					
					/>
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
export default  GoogleApiWrapper({apiKey: "AIzaSyDFDbA-j3YPpdACF2hWBzDC4l9abeP-Z1k"})(JobMap)