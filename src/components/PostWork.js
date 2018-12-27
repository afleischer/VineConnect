import React from 'react'

import '../styles/PostWork.css'

import styled from 'styled-components'
import Autocomplete from 'react-google-autocomplete';


class PostWork extends React.Component{
    constructor(props){
        super(props);

        this.updateJob = this.updateJob.bind(this);
        this.updateJobStartDate = this.updateJobStartDate.bind(this);
        this.updateJobEndDate = this.updateJobEndDate.bind(this);
        this.toggleEndDate = this.toggleEndDate.bind(this);
        this.updateAddress = this.updateAddress.bind(this);

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

        return(
            <div>

                    <FullWidth>
                     <h2>Need help for a job?</h2>

                    </FullWidth>


                    <h4>If you need help with a job, post it here and others can see where it is!</h4>



                    <label>Enter Job</label>
                    <input onChange={(e) => this.updateJob(e)} type="text"></input>
                    <label>When does the job begin?</label>
                    <input onChange={(e) => this.updateJobStartDate(e)} type="text"></input>
                    <label>When does the job end?</label>
                    <input onChange={(e) => this.updateJobEndDate(e)} type="text"></input>
                    <label>No set end date?  Check here.</label>
                    <input type="checkbox" onChange={(e) => this.toggleEndDate(e)}></input>
                    <label>Where will the job be at? </label>
                    <Autocomplete
                        onChange={(e) => this.updateAddress(e)}
                        onPlaceSelected={(place) => console.log("place is:"+place)}
                    />

                    <input type="submit"></input>


            </div>

        )
    }
}

export default PostWork