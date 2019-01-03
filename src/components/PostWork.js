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
import Autocomplete from 'react-google-autocomplete';
import {db} from "../firebase_config";

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
        this.deleteJob = this.deleteJob.bind(this);

        this.JobsRef = db.collection('jobs');

        /***
         * TODO: For PostWork, get only the jobs that the user
         * has posted themselves
         */

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





    }

    updateJob(e){
        this.setState({
            job_name : e.target.value
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


    }
    loginCheck(e){

    }

    /**
     * TODO: build this function below
     */

    deleteJob(){

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
            "width" : "50%"
        }

        const MyJobList = {
            "width" : "50%",
            "float" : "right",
            "height": "calc(100vh - 500px)",

        }

        /***
        * Conditional section that 
        */

        let loginCheck = null;

        if(this.props.Session){
            loginCheck = (
                <div>

                <div style={MyJobList}>
                    <h2>Work You've Posted</h2>
                    <JobList Jobs={this.props.displayedJobs} DeleteJob={this.props.deleteJob}/>

                </div>

                <div style={JobAddDiv}>
                    <h2> Job Post form</h2>
                    <p>
                        <label>Describe the job:</label>
                        <input onChange={(e) => this.updateJob(e)} type="text"></input>
                    </p>
                    <p>
                        <label>When does the job begin?</label>
                    <input type="datetime-local" onChange={(e) => this.updateJobStartDate(e)} type="text"></input>
                    </p>

                    <p>
<label>When does the job end?</label>
                    <input type="datetime-local" onChange={(e) => this.updateJobEndDate(e)} type="text"></input>
                    </p>

                    <p>
<label>No set end date?  Check here.</label>
                    <input type="checkbox" onChange={(e) => this.toggleEndDate(e)}></input>
                    </p>
                    
                    <p>
                        <label>Where will the job be at? </label>
                        <Autocomplete
                            onChange={(e) => this.updateAddress(e)}
                            onPlaceSelected={(place) => console.log("place is:"+place)}
                        />
                    </p>

                    <input type="submit"></input>

                </div>



                </div>
                )

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
                      <MainHeader>Need help to find a job?</MainHeader>
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