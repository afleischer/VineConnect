import React from 'react';

import '../../styles/joblist.css';

const JobList = (props) => {
	//Props: Jobs (which contain )
	/*
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

	*/
	//for each entry within the database

	function JobListItems() {
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



	//Will return JobListItems in a bit
	return(
		{

		}
	)

}


export default JobList