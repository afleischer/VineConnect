import React from 'react';

/**
 * Styling imports
 */
import '../styles/PostWork.css'
import styled from 'styled-components'

//TODO: See if I made changes to the below shared Styled Components
    //If so, extend them.
//import {FullWidth, FullWidth2, LeftOverlay, RightOverlay, MainHeader, InnerPadding} from '../styles/sharedStyledComponents.js';

/**
 * Google Maps API
 */
import Autocomplete from 'react-google-autocomplete';

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

        /***
        * Conditional section that 
        */

        let loginCheck = null;

        if(this.props.Session){
            loginCheck = (
                <div>
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
                        <h4>Post it here and others can see where it is!</h4>
                        </InnerPadding>
                    </RightOverlay>  

                </FullWidth>


                {loginCheck}

            </div>

        )
    }
}

export default PostWork