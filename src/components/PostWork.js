import React from 'react';

import JobList from './FindWork_Children/JobList'

/**
 * Styling imports
 */
import '../styles/PostWork.css'
import styled from 'styled-components'

    //If so, extend them.
//import {FullWidth, FullWidth2, LeftOverlay, RightOverlay, MainHeader, InnerPadding} from '../styles/sharedStyledComponents.js';

/**
 * Google Maps API
 */
import {geocodeByAddress} from 'react-places-autocomplete'
import LocationSearchInput from './AutocompleteField'
import PlacesAutocomplete from 'react-places-autocomplete';

import Autocomplete from 'react-google-autocomplete';
//import {google} from '../utils/GoogleApi'
//import {google} from 'google-maps-react';
import {db} from "../firebase_config";
import Geocode from "react-geocode";



//import {DateTime} from 'react-datetime'

const uuidv1 = require('uuid/v1');
const google = window.google;



/**
 * Page-Level component
 */
class PostWork extends React.Component{
    constructor(props){
        super(props);

        this.updateJob = this.updateJob.bind(this);
        this.updateJobStartDate = this.updateJobStartDate.bind(this);
        this.updateJobEndDate = this.updateJobEndDate.bind(this);
        this.toggleEndDate = this.toggleEndDate.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
        this.updateLatLng = this.updateLatLng.bind(this);

        this.handleAutoselect = this.handleAutoselect.bind(this);

        this.JobsRef = db.collection('jobs');
        this.addressRef = React.createRef();


        this.errorMessage = null;




/*

REFACTORING TO componentDidMount

        try{
            this.user= this.props.UserData[1].uid
        }
        catch{
            this.user=null;
        }
        if(this.user){

            db.collection("jobs").where("active", "==", true)
                .where("job_poster", "==", this.user)
                .get().then((querySnapshot) => {
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
    
*/    

    }

    state={
        form_error_message : "no_error",
        autoselected : false
    }


    updateName = (e) => {
        this.setState({
            job_name : e.target.value
        })
    }

    updateJob(e){
        this.setState({
            job_description : e.target.value
        })        
    }

    updateJobStartDate(e){
        this.setState({
            job_start : e.target.value
        })  
    }

    updateJobEndDate(e){
        this.setState({
            job_end : e.target.value
        })  
    }

    toggleEndDate(e){
        this.setState({
            job_endless : e.target.value
        })  
    }
    updateAddress(e){
        //validate the address with google autocomplete
        this.setState({
            job_address : e.target.value
        })

    }

    updateLatLng(latLng){
        this.setState({
            job_location : latLng
        })
    }
    loginCheck(e){

    }


    onSubmit(){
        //if the job description, begin, end/checkbox, or location are missing, throw error

        var missingStates=[];

        if(!this.state.job_name){
            //Create a dialog that 
            missingStates.push("Job Description");
        }

        if(!this.state.job_start){
            missingStates.push("Start Date");

        }
        if(!this.state.job_end && !this.state.job_endless){
            missingStates.push("End Date");

        }
        if(!this.state.job_name){
            missingStates.push("Job Name");    
        }
        if(!this.state.job_address){
            missingStates.push("Address");
        }

        //Check the start date 
        if(this.state.job_start){

            let dateMilliseconds = Date.parse(this.state.job_start)
            let now = Date.now();
            if(dateMilliseconds < now){
                //The user has selected a time before today, throw error
            missingStates.push("Valid (non-past) Start Date")

            }
        }

        if(this.state.job_end && this.state.job_start){
            let dateStart = Date.parse(this.state.job_start); 
            let dateEnd = Date.parse(this.state.job_end); 
            let now = Date.now(); 
            if(dateEnd < dateStart){
                //The user has selected a time before today, throw error
                missingStates.push("Valid (before start) End Date");
            }
        }



        if (missingStates.length != 0){
            var combinedMessage ="";
            for(let i = 0; i < missingStates.length; i++){
                combinedMessage =combinedMessage+missingStates[i]+", ";
            }
            var errorMessage = "Required Fields "+combinedMessage+" not entered";
            this.setState({form_error_message: errorMessage})
        }
        if (missingStates.length == 0){

            this.setState({form_error_message: "no_error"})





            /**
             * Function to derive latitude and longitude from address
             */

            /**
             * Try a synchronous version
             * @returns {Promise<*>}
             * @constructor
             */

            const JobLocation = () =>{
                let address = this.state.job_address;

                let geocodedAddress = geocodeByAddress(address);
                console.log(geocodedAddress)
            }

            /*
            const JobLocation = async () =>{
                var address = this.state.job_address

                var geocodedAddress = await Geocode.fromAddress(address).then(
                    response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        var responseVal = []
                        responseVal[0] = lat;
                        responseVal[1] = lng;
                        return responseVal
                    },
                    error => {
                        console.error(error);
                    }
                );

                return geocodedAddress
            }
            */
                //TODO: find a way to force Autocomplete option

        //add in after troubleshooting:                  job_location: JobLocation()
           let addJob = async () => {
                let db_ref = db.collection("jobs");

               await db_ref.add({
                   job_uuid: uuidv1(),
                   active: true,
                   job_description: this.state.job_description,
                   job_name: this.state.job_name,
                   job_start: this.state.job_start,
                   job_end: this.state.job_end,
                   job_poster: this.props.UserData[1].user_name,
                   job_poster_id: this.props.UserData[1].uid,
                   job_address: this.state.job_address,
                   job_location: this.state.job_location
               })


               /**
                * Update the state to reflect a successful update
                */
               this.setState({
                   form_success_message : "Your job has been posted!"
               })
               setTimeout( () => {
                   this.setState({
                       form_success_message : "no_success"
                   })
               }, 2000);
           }

           addJob()

           }

        }


        handleAutoselect(address, value) {
            this.setState({
                job_address : address,
                autoselected : value
            })
        }

        handlePlaceChanged(){

        }

        componentDidMount() {

            Geocode.setApiKey("AIzaSyCwomCR76QqvAsziOJzvunlmlo7mveJQ0w");
            Geocode.enableDebug();


        }




    render(){

        const FullWidth = styled.div`
        width: 100vw;
        height: 500px;
        background-image: url(${process.env.PUBLIC_URL + '/work.jpg'});
        background-size: cover;
        background-position: -18%;

        `
        const top_bg = {
            "background-image": "url(/work.jpg);" 
        }


        const LeftOverlay = styled.div`
        background-color: rgba(105, 116, 119, 0.55);
        color: white;
        position: relative;
        top: 15%;
        width: 50%;
        margin: auto;
        padding: 2%;
        transform: translateX(-23%);

        @media screen and (max-width: 824px){
            width: 100vw;
            transform: translateX(0%);
            padding:0;

        }

        @media screen and (min-width: 1640px){
            padding: 1%
        }
        `


        const InnerPadding = styled.div`
        padding: 4.2%;
        `

        const MainHeader = styled.h2`
        font-family: "EB Garamond";
        margin-bottom: 0;
        margin-top: 0;
        font-weight: 400;
        font-size: 42px;
        `

        const RightOverlay = styled.div`
        background-color: rgba(105, 116, 119, 0.55);
        color: white;
        position: relative;
        top: 15%;
        left: 29%;
        width: 50%;
        margin: auto;
        padding: 2%;
        transform: translateX(-23%);

        @media screen and (max-width: 824px){
            width: 100vw;
            transform: translateX(0%);
            padding:0;

        }

        @media screen and (min-width: 1640px){
            padding: 1%
        }
        `

        const JobForm = styled.div`
        padding: 20px 15%;
        `

        const JobAddDiv = {
            "height": "calc(100vh - 500px)",
            "width" : "50%",
            "background-color" : "rgb(250, 250, 250)"
        }

        const MyJobList = {
            "width" : "50%",
            "float" : "right",
            "height": "calc(100vh - 500px)",
            "background-color" : "rgb(247, 247, 247)"

        }


        /***
        * Conditional section that 
        */

        let loginCheck = null;


        /**
         * If a user is logged in...
         */

        if(this.props.Session){

            /**
            *Only pull in the Job list if the user is logged in
                       * TODO: Verify that this JobList is pulling correctly
            */
            var JobCheck;
            var Jobs = this.props.JobsList;

            const JobListStyle= {
                "width" : "99%"
            }

            if(Jobs){
                JobCheck = (<JobList Jobs={Jobs}
                                     DeleteJob={this.props.DeleteJob}
                                     UserData={this.props.UserData}
                                     style={JobListStyle}
                            />)
            }
            else{
                JobCheck = (<div> No Jobs to show.  Make sure you're logged in and have posted jobs before.</div>);
    
            }
            /*
            try{
                var Jobs= this.props.JobsList;
                JobCheck = (<JobList Jobs={Jobs}
                                     DeleteJob={this.props.deleteJob(Jobs.job_uuid)}
                                     UserData={this.props.UserData}
                            />)
            }
            catch{
                JobCheck = (<div> No Jobs to show.  Make sure you're logged in and have posted jobs before.</div>);
            }
            */

            var errorStyle = {
                    "color" : "red"

            }

            var successStyle = {
                    "color" : "green"
            }

            const NoTop = {
                "margin-top" : 0,
                "padding-top" : "5%"
            }

            var errorMessage = null;
            if(this.state.form_error_message != "no_error"){
                errorMessage = (<div style={errorStyle}>{this.state.form_error_message}</div>)
            }

            var successMessage = null;
            if (this.state.form_success_message != "no_success"){
                successMessage = (<div style={successStyle}>{this.state.form_success_message}</div>)
            }

            loginCheck = (
                <div>

                <div style={MyJobList}>
                    <h2>Work You've Posted</h2>
                    {JobCheck}
                    

                </div>

                <div style={JobAddDiv}>
                    <h2 style={NoTop}> Job Post form</h2>

                    <p>
                        <label>What's the name of the job?</label><br/>
                        <input onChange={(e) => this.updateName(e)}></input>
                    </p>
                    <p>
                        <label>Describe the job:</label><br/>
                        <input onChange={(e) => this.updateJob(e)} type="text"></input>
                    </p>
                    <p>
                        <label>When does the job begin?</label><br/>
                    <input type="datetime" onChange={(e) => this.updateJobStartDate(e)} type="datetime-local"></input>
                    </p>

                    <p>
<label>When does the job end?</label><br/>
                    <input type="datetime" onChange={(e) => this.updateJobEndDate(e)} type="datetime-local"></input>
                    </p>

                    <p>
<label>No set end date?  Check here.</label>
                    <input type="checkbox" onChange={(e) => this.toggleEndDate(e)}></input>
                    </p>
                    
                    <p>
                        <label>Where will the job be at? </label>

                        
                        <LocationSearchInput
                            handleAutoselect={this.handleAutoselect}
                            updateLatLng={this.updateLatLng}
                        />

                    </p>

                    <input type="submit" onClick={this.onSubmit}></input>

                    {errorMessage}
                    {successMessage}
                </div>



                </div>
                )

            /** Old autocomplete

                    <Autocomplete
                        onChange={(e) => this.updateAddress(e)}
                        onPlaceSelected={(place) => console.log("place is:"+place)}
                        componentDidMount={this.AutocompleteInit}
                        ref={this.addressRef}
                        types={"address"}
                    />

             */
        }
        else if(!this.props.Session){

            loginCheck = (
                <div>
                    <h1>You must be <a href="/login">logged in</a> to post work.  Need an account?  <a href="/signup">Sign up.</a></h1>
                </div>
            )            
        }

        return(
            <div>

                <FullWidth>
                  <RightOverlay> 
                      <InnerPadding>
                      <MainHeader>Need workers for your vineyard?</MainHeader>
                        <p>Use the below form to post it so that others can see where it is!</p>
                        </InnerPadding>
                    </RightOverlay>  

                </FullWidth>

                {loginCheck}

            </div>

        )
    }
}

export default PostWork