import React from 'react';

/**
 * Importing Components
 */

import JobList from './JobList';

/**
 * Google Maps API modules
 */

import {google, Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import {MapStyle} from '../../styles/NavStyler'

class JobMap extends React.Component {
	constructor(props){
		super(props);

		this.MapRef = React.createRef();
		this.renderMarkers = this.renderMarkers.bind(this);
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.markerGenerate = this.markerGenerate.bind(this);
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



	}

	markerGenerate(){
		/***
		 * Set the selected marker'
		 *
		 */


	}

	render(){

		const style = {
			width: '70vw',
			height: '70vh',
			border: '2px solid #555555',
			display: 'inline-block'

		}

		const InfoStyle = {
			width: '20px',
			height: '20px',
			border: '2px solid #44444'
		}
		//Initial GeoLocation
		

		if(!this.props.loaded){
			return <div>Map Loading...</div>
		}

		/**
		 * Fetch markers (do we do this here?)
		 */

		var MapMarkers = [];
		var InfoWindows = [];

		//for every job
		var allJobs = this.props.Jobs;
		if(allJobs){
			//iterate through...
			for(let job of allJobs){
				MapMarkers.push(<Marker  name={job.job_description}
										  position={{lat: job.job_location._lat, lng: job.job_location._long}}
										 onClick={(e) => this.onMarkerClick(e)}
				>
					<InfoWindow visible={false} content={job.job_description}  style={InfoStyle}>
						<h1>Test test test</h1>
					</InfoWindow>
				</Marker>)


			}

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
					onGoogleApiLoaded={({map, maps}) => this.renderMarkers()}
					>

					{MapMarkers}
					{InfoWindows}

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