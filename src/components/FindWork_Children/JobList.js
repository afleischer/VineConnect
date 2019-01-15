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
		/**
		 * Prop shape of "Jobs"
		 *
		 * an array of:
		 * 	[0]
		 * 	...
		 */
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

				//var deleteJobButton;

				//if the u_id of the logged in user is the same as the user

				const JobListItemDiv = styled.div`
					'border-bottom': '2px dotted black',
    				margin: '0 7% 0 11%'
						`

				const deleteJobButton = () => {
					try{
						if(this.props.UserData[1].uid === job.job_poster_id){
							return (<button onClick={this.props.DeleteJob}>Delete Job</button>)
						}
					}catch(err){
						return null;
					}

				}

				/*
				try{
					if(this.props.ManageFlag){
						deleteJobButton = (<input onClick ={this.props.DeleteJob} />)
					}

				}catch{}
				*/
				returnArray.push(<div style={ItemStyle} className="JobListItem">
					<h1>Job: {job.job_name}</h1>
					<h3>Posted by: {job.job_poster} </h3>
					<h3>Start date: {formattedTime}</h3>
					
					<p>{job.description}</p>
					<button>I'm interested!</button>
					{deleteJobButton()}
				</div>)
			}
		}

		const map_outer_style = {
			display: 'inline-block'
		}

		const overflowStyle = {
			overflow: 'scroll'
		}

		return(
			<div style={overflowStyle}>
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



		const GridAreaTwoScroll = {
			"grid-area" : "two",
			"overflow" : 'scroll',
			'border-radius': '16px'
		}


		return(
			<List style={GridAreaTwoScroll}>
				<h3> Available Jobs </h3> 
				{this.populateList()}
			</List>
		)
	}
	//Will return JobListItems in a bit
	

}


export default JobList