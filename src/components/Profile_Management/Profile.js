import React from 'react'

import '../../styles/grids.css'

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.fetchProfile = this.fetchProfile.bind(this);
    }


    fetchProfile(){

    	//Logged-in user

    }

    render(){

        return(
            <div>
            	<UserProfile UserData={this.props.UserData} user={this.props.Session} />
            </div>
        )
    }
}


class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        /**
         * Listener for Profile data
         */
    }

    onUploadClick(){

    }

    render() {

        var returnValPre = [];
        try{

            var returned = this.props.UserData;
            var returnedLength = returned.length;
            for(let i = 0; i < returnedLength; i++){
                returnValPre.push(returned[i]);
            }
            var returnVal = (<div>
                <div className="profile_container">
                    <div>
                        <h2>Your Username:</h2>
                        <h3>{returnValPre[1].user_name}</h3>
                    </div>
                    <div className="profile_photo">
                        <h2>Profile Photo:</h2>
                        <h3>{returnValPre[1].user_photo}</h3>
                        <input onClick={this.onUploadClick} /> 
                    </div>
                    <div className="profile_description">
                        <h2>Your Description:</h2>
                        <h3>{returnValPre[1].user_profile_description}</h3>
                    </div>
                    <div className="profile_business">
                        <h2>Your Business:</h2>
                        <h3>{returnValPre[1].user_business}</h3>
                    </div>
                    <div className="profile_chat">
                        <h2>Chat History:</h2>
                        <h3>{returnValPre[1].user_chats}</h3>
                    </div>
                    <div className="profile_jobs_accepted">
                        <h2>Jobs You've Accepted:</h2>
                        <h3>{returnValPre[1].user_current_jobs}</h3>
                    </div>
                </div>


            </div>)
        }catch(error){
            var returnVal = (<div>Please <a href="/login">log in</a> to view your profile</div>);
        }

        return (
            returnVal
        )

    }
}

export default Profile