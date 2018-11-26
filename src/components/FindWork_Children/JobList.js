import React from 'react';

import '../../styles/joblist.css';

import styled from 'styled-components';

//Firebase imports
import {db} from '../../firebase_config'

class JobList extends React.Component{
	constructor(props){
		super(props);

		this.populateList = this.populateList.bind(this);
	
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
	
	state ={
		displayedJobs : null
	}
	//Props: Jobs (which contain )
	/*
	Show all jobs available
	jobs : [
		<uID> : {
			job_name:
			job_description:
			job_poster:
			job_start_date:
			job_end_date:
			location:   //Challenge: Need Google to ID area
		},
		<uID> ...

	]

	//Get the dimensions of the 
	*/
	populateList(){
		//for each jobList item from Firebase
		var jobs = this.state.displayedJobs;

		var returnArray = []
		//populate a list of jobs
		if (this.state.displayedJobs !== null){
			for (let job of jobs){
				returnArray.push(<div>
					<h1>Job: {job.name}</h1>
					<h3>Posted by: {job.poster} </h3>
					<h3>Start date: {job.job_start}</h3>
					
					<p>{job.description}</p>
					
				</div>)
			}
		}


		return(
			<div>
				{returnArray}
			</div>
		)
	}
	//for each entry within the database

	 JobListItems() {
		//for each Job in Firebase, return: 
		var returnArray = []
		//for each job in jobs
			//push following to the returnArray as a JSX entry:
				//<h2 className = "job_name"> Job: </h2>
				//<h3 className = "job_description">Description:</h3>
				//<h3 className = "start_date"> Start Date: </h3>
				//<h3 className = "end_date"> End Date: </h3>
					//if ongoing instead substitute for <h3 className = "end_date"> Ongoing: </h3>
				//<h3 className = "week_day"></h3>
				//<button class = "get_details">Click for Details</button>

		return 

	}


	render(){

		/**
		 * Styled components
		 */

		const List = styled.div`
			height: 70vh;
			background-color: grey;
		`


		return(
			<List> 
				{this.populateList()}
			</List>
		)
	}
	//Will return JobListItems in a bit
	

}


export default JobList