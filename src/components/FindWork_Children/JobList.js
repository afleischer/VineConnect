import React from 'react';

import '../../styles/joblist.css';

import styled from 'styled-components';

//Firebase imports
import {db} from '../../firebase_config'

class JobList extends React.Component{
	constructor(props){
		super(props);

		this.populateList = this.populateList.bind(this);
	



	}
	
	state ={
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
		var jobs = this.props.Jobs;

		var returnArray = []
		//populate a list of jobs
		if (this.props.Jobs !== null && this.props.Jobs !== undefined){
			for (let job of jobs){
				/**
				 * Handle job date (in seconds) and convert to dateTime
				 */
				var newDate = new Date(job.job_start.seconds*1000)
				var hours = newDate.getHours();
				var minutes = "0"+newDate.getMinutes();
				var seconds = "0"+newDate.getSeconds();
				var formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);

				const ItemStyle = {
					'border-bottom': '2px dotted black',
    				margin: '0 7% 0 11%'
				}

				/***
				 * Check to see if this is the PostWork JobList (that will only show
				 * the jobs the user Has entered
				 */

				var deleteJobButton;

				try{
					if(this.props.ManageFlag){
						deleteJobButton = (<input onClick ={this.props.DeleteJob} />)
					}

				}catch{}

				returnArray.push(<div style={ItemStyle} className="JobListItem">
					<h1>Job: {job.job_name}</h1>
					<h3>Posted by: {job.job_poster} </h3>
					<h3>Start date: {formattedTime}</h3>
					
					<p>{job.description}</p>
					{deleteJobButton}
				</div>)
			}
		}

		const map_outer_style = {
			display: 'inline-block'
		}



		return(
			<div>
				{returnArray}
			</div>
		)
	}

	render(){

		/**
		 * Styled components
		 */

		const List = styled.div`
	    height: 70vh;
	    background-color: grey;
	    width: 30vh;
	    float: right;
	    display: inline-block;
		`



		const GridAreaTwo = {
			"grid-area" : "two"
		}


		return(
			<List style={GridAreaTwo}>
				{this.populateList()}
			</List>
		)
	}
	//Will return JobListItems in a bit
	

}


export default JobList