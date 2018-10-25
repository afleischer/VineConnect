import React from 'react';

import JobMap from './FindWork_Children/JobMap'
import JobList from './FindWork_Children/JobList'


class FindWork extends React.Component{
	constructor(props){
		super(props);

		/*==========
		Get user position
		==========*/


	}

	state = {
		userLocation: {
			lat: 37.7749,
			lng: 122.4194
		}
	}

	componentWillMount(){
		navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					userLocation: {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					}
				});
			},
			error => console.log(error)
		);

	}


	componentDidMount(){

		/*==============
		Prompt the user to enter their geolocation data. 
		If location chosen, then update the maps to center on it.
		===============*/

		/*

		var location = {};

		function success(pos){
			var position = pos.coords;
			location = position;
			}

		function error(err){
		  console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(success, error)	
		}

		if(location != {} && location != undefined && location != null){
			this.setState({ 
				userLocation: {
					lat: location.lat,
					lng: location.lng
				}
			});	
		}
		*/
	}

	render(){
		return(
			<div>
				<h1></h1>
				<JobMap userLocation = {this.state.userLocation} />
			</div>
		);
	}
}


export default FindWork;