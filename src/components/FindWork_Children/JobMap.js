import React from 'react';

/**
 * Importing Components
 */

import JobList from './JobList';

/**
 * Google Maps API modules
 */

import {google, Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

import {MapStyle} from '../../styles/NavStyler'

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

	onMarkerClick(e, hide, counter, test1){
		/**
		 * Open the infoWindow
		 * (InfoWindow has built-in closure method)
		 */
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
		//e.children.props.visible = true;
		//set the state of its window to "displayed"

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
		var InfoWindows = [];

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
					<Marker  name={job.job_description}
					 	  position={{lat: job.job_location._lat, lng: job.job_location._long}}
						  onClick={(e, props, addGeo) => this.onMarkerClick(e, props, addGeo)}
				>
					<InfoWindow
						marker={job.job_description}
						onCloseClick={(e) => handleMarkerTap(e)}
						visible={visibleState}
						key={i}
						content={job.job_description}
						style={InfoStyle}
						position={{lat: job.job_location._lat, lng: job.job_location._long}}

					>
						<div>
							<h1>Test test test</h1>
						</div>
					</InfoWindow>
				</Marker>)

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