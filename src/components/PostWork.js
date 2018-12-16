import React from 'react'


class PostWork extends React.Component{
    constructor(props){
        super(props);

        this.AddJob = this.AddJob.bind(this);
    }

    AddJob(){

    }

    render(){

        return(
            <div>PostWork works!

                <form onSubmit={this.AddJob}>
                    <label>Enter Job</label>
                    <input type="text"></input>
                    <label>When does the job begin?</label>
                    <input type="text"></input>
                    <label>When does the job end?</label>
                    <input type="text"></input>
                    <input type="checkbox" onChange={this.toggle}></input>
                    <input type="submit"></input>
                </form>


            </div>

        )
    }
}

export default PostWork