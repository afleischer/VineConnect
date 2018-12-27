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

		this.toggleViewLock = this.toggleViewLock.bind(this);

		/*==========
		Get user position
		==========*/

		this.JobsRef = db.collection('jobs');

		db.collection("jobs").get().then((querySnapshot) => {
			var jobsArr = [];
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				jobsArr.push(doc.data())
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

	toggleViewLock(){
		this.setState(prevState => ({
			view_lock : !prevState.view_lock
		}))
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

		var map_outer_style = {
			display: 'inline-block'		
		}
	
		


		return(
			<div className="find_work_header">
				<h1 className='header_text'>Available Work</h1>
					<JobMap Jobs={this.state.displayedJobs} userLocation = {this.state.userLocation} />
					<JobList Jobs={this.state.displayedJobs} /> 
					<label>Show only jobs on map?</label>
				<input type="checkbox" onClick={this.toggleViewLock} />
			</div>
		);
	}
}


export default FindWork;