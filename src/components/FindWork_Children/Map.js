import React from 'react'
import ReactDOM from 'react-dom';

/**
 * Importing Components
 */

import JobList from './JobList';


class Map extends React.Component{
	constructor(props){
		super(props);

			const {lat, lng} = this.props.initialCenter;
			this.state = {
				currentLocation: {
					lat: lat,
					lng: lng
				}
			}
		this.renderChildren = this.renderChildren.bind(this);
	}


	componentDidUpdate(prevProps, prevState){
		if(prevProps.google !== this.props.google){
			this.loadMap();
		}
	}

	loadMap(){
		if(this.props && this.props.google){
			//google is available
			const {google} = this.props;
			const maps = google.maps;

			/*===========
			Create a reference to the map 
			and create a reference to the DOM's node
			so that we can insert the map directly into the DOM
			============*/	
			const mapRef = this.refs.map;
			const node = ReactDOM.findDOMNode(mapRef);

			/*===========
			Set the initial coordinates 
			============*/

			let {initialCenter, zoom} = this.props;
			const {lat, lng} = this.state.currentLocation;
			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign({}, {
				center: center,
				zoom: zoom
			})
			this.map = new maps.Map(node, mapConfig);
		}
	}

	/**
	 * Used for rendering Marker components
	 */
	renderChildren(){
		//for each latitude and longitude
		//in the JobList

		//

	}

	render(){
		return(
			<div ref='map'>
				Loading Map...
				{this.renderChildren()}
				<JobList />

			</div>
		)
	}
}
/*
	Map.propTypes = {
		google: React.PropTypes.object,
		zoom: React.PropTypes.number,
		initialCenter: React.PropTypes.object
	}
*/

	Map.defaultProps = {
		zoom: 13,
		//Walla Walla, by default
		initialCenter: {
			lat: 46.063883,
			lng: -118.338522
		}
	}

export default Map