import React from 'react';

/**
 * Importing Components
 */

import JobList from './JobList';

/**
 * Google Maps API modules
 */

import {google, Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';


/***
 * Styling imports
 */

import {MapStyle} from '../../styles/NavStyler'
import {thin} from '../../styles/sharedStyleConsts'

/**
 * Rolling my own InfoWindow
 */
/*
class InfoWindow extends React.Component{
	componentDidUpdate(prevProps, prevState){
		if(this.props.map !== prevProps.map){
			//...
		}

		if(this.props.children !== prevProps.children){
			this.updateContent();
		}
	}
	updateContent(){
		const content = this.renderChildren();
		this.infowindow
			.setContent(content);
	}

	renderChildren(){}
}
*/


class JobMap extends React.Component {
	constructor(props){
		super(props);

		this.MapRef = React.createRef();
		this.renderMarkers = this.renderMarkers.bind(this);
		this.onMarkerClick = this.onMarkerClick.bind(this);
	}

	state = {
		showingInfoWindow: false, //Hides/shows the infowindow
		activeMarker : {}, //shows the active marker upon click
		selectedPlace : {} //shows the infowindow to the selected place upon a marker
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

	onMarkerClick(props, marker, e){
		/**
		 * Open the infoWindow
		 * (InfoWindow has built-in closure method)
		 */

		this.setState({
			selectedPlace : props,
			activeMarker: marker,
			showingInfoWindow: true
		})

		/*
		let uId = e.children.key;
		let InfoWindowStateIdentifier = "showingInfoWindow_"+uId;
		var InfoWindowStateValue;
		try{
			InfoWindowStateValue= this.state.InfoWindowStateIdentifier
		}catch{}

		if(InfoWindowStateValue){
			this.setState(prevState => ({
				[InfoWindowStateIdentifier]: !prevState.InfoWindowStateIdentifier
			})	)
		}
		*/
		//e.children.props.visible = true;
		//set the state of its window to "displayed"

	}

	onClose = props => {
		if(this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}

	componentDidMount() {

	}

	render(){

		const style = {
			width: '70vw',
			height: '70vh',
			border: '2px solid #555555',
			display: 'inline-block',
			'grid-area' : 'one'

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

		//for every job
		var allJobs = this.props.Jobs;
		if(allJobs){
			//iterate through...

			const handleMarkerTap = (marker) => {
				//use the .open function on the InfoWindow
				let infoWindow = marker.children;
				infoWindow.open();
			}

			/** Old Map Marker method*/

			var i = 0;

			for(let job of allJobs){

				let InfoWindowStateIdentifier = "showingInfoWindow_"+i;

				var visibleState = () => {
					if(!this.state[InfoWindowStateIdentifier]){
						return false;
					}
					else{
						return this.state[InfoWindowStateIdentifier];
					}
				}

				MapMarkers.push(
					<Marker  name={job.job_name}
							 description={job.job_description}
					 	  position={{lat: job.job_location._lat, lng: job.job_location._long}}
							 start_date={job.job_start}
							 poster={job.job_poster}
						  onClick={this.onMarkerClick}
				/>)
						MapMarkers.push(
				)

				i++;
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
					<InfoWindow
						marker={this.state.activeMarker}
						onClose={this.onClose}
						visible={this.state.showingInfoWindow}


					>
						<div>
							<h1 style={thin}>Job: {this.state.selectedPlace.name}</h1>
							<h2>Description: {this.state.selectedPlace.description}</h2>
							<h2>Posted By: {this.state.selectedPlace.poster}</h2>
							<button>I'm Interested!</button>
						</div>
					</InfoWindow>
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