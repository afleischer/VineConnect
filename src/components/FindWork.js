import React from 'react';

import JobMap from './FindWork_Children/JobMap'
import JobList from './FindWork_Children/JobList'

import styled from 'styled-components';
import classNames from 'classnames/bind';


import '../styles/index.css';

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
		//All the jobs that are available within a given area
	}

	fetchJobs(){

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

	}

	render(){

		return(
			<div>
				<h1 className='header_text'>FindWork</h1>
				<JobMap userLocation = {this.state.userLocation} />
				<JobList />
			</div>
		);
	}
}


export default FindWork;