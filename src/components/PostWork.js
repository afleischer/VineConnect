import React from 'react'

import '../styles/PostWork.css'

import styled from 'styled-components'

class PostWork extends React.Component{
    constructor(props){
        super(props);

        this.AddJob = this.AddJob.bind(this);
    }

    AddJob(){

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



                <form onSubmit={this.AddJob}>
                    <label>Enter Job</label>
                    <input type="text"></input>
                    <label>When does the job begin?</label>
                    <input type="text"></input>
                    <label>When does the job end?</label>
                    <input type="text"></input>
                    <label>No set end date</label>
                    <input type="checkbox" onChange={this.toggle}></input>
                    <input type="submit"></input>
                </form>


            </div>

        )
    }
}

export default PostWork