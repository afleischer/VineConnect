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
		this.renderMarkers = this.renderMarkers.bind(this);
		this.onMarkerClick = this.onMarkerClick.bind(this);
	}


	renderMarkers(){
		//for every job in this.props.Jobs
		var jobsArr = this.props.Jobs;

		/*
		if(jobsArr){
			var jALength = jobsArr.length;
			for(let i = 0; i < jALength; i++){
				let marker = new google.maps.Marker({
					position: jobsArr[i].job_location
				})

			}
		}
		*/
	}

	onMarkerClick(e){
		/**
		 * Open the infoWindow
		 * (InfoWindow has built-in closure method)
		 */


		//hopefully this should be the target element...
		var marker = e.target;
		var all_jobs = this.props.Jobs;
		//content string will be the job associated with the place
		var infoWineow;

		var job_latlng = marker.position;

		//get the job listing where the job_latlng matches the

		for (var item of all_jobs){
			if(item.job_location == job_latlng){
				infoWindow = new google.maps.InfoWindow({
					content : item.job_description,
					center : job_latlng
				})
			}
		}


	markerGenerate(){
			/***
			 * SPRINT THIS!!!
			 */

			//

		}



		//open a window (check the Google Maps API for how to do this
	}

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

		/**
		 * Fetch markers (do we do this here?)
		 */

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
					onGoogleApiLoaded={({map, maps}) => this.renderMarkers()}
					>
					{this.markerGenerate()}

				</Map>
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