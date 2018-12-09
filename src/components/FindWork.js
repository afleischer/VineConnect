import React from 'react';

import JobMap from './FindWork_Children/JobMap'
import JobList from './FindWork_Children/JobList'

import styled from 'styled-components';
import classNames from 'classnames/bind';

import {db} from '../firebase_config'



import '../styles/index.css';

class FindWork extends React.Component{
	constructor(props){
		super(props);

		/*==========
		Get user position
		==========*/

		this.JobsRef = db.collection('jobs');

		db.collection("jobs").get().then((querySnapshot) => {
			var jobsArr = [];
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				jobsArr.push(doc.data())
				console.log( doc.data());
				console.log("jobsArr is:"+jobsArr)
			});		

			this.setState({
				displayedJobs : jobsArr
			})
		});

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
				<h1 className='header_text'>View the map below to find work</h1>
				<JobMap userLocation = {this.state.userLocation} />
				<JobList />
			</div>
		);
	}
}


export default FindWork;