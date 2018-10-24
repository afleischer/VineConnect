import React from 'react';

import JobMap from './FindWork_Children/JobMap'
import JobList from './FindWork_Children/JobList'


class FindWork extends React.Component{
	constructor(props){
		super(props);


	//this.loadMap = this.loadMap.bind(this);
	}

	/*
	state = {
	userLocation : {
		lat : ,
		lng : 
	}

	}
	*/

/*
	loadMap(){
		//initiate the Google Maps API

	var map;
      var mapToLoad = function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},  //Will be the state of the userLocation
          zoom: 8
        });
      }

    return mapToLoad;
	}
*/
/*
TO ADD: 
	<JobList api_key = {this.props.api_key} />
*/
	render(){
		return(
			<div>
				<h1></h1>
				<JobMap />
			</div>
		);
	}
}


export default FindWork;