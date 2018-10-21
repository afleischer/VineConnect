import React from 'react';


const JobMap = (props) => {
	//props: api_key, 


	//To return: 
		//google maps script
		//
	return(

	<script async defer
      src="https://maps.googleapis.com/maps/api/js?key="+{props.api_key}+"&callback=initMap">
    </script>

	)
}

export default JobMap