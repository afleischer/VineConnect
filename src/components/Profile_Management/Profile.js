import React from 'react'

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

    render() {

        var returnValPre = [];
        try{

            var returned = this.props.UserData;
            var returnedLength = returned.length;
            for(let i = 0; i < returnedLength; i++){
                returnValPre.push(returned[i]);
            }
            var returnVal = (<div>
                <h2>Your Username:</h2>
                <h3>{returnValPre[1].user_name}</h3>

                <h2>Profile Photo:</h2>
                <h3>{returnValPre[1].user_photo}</h3>

                <h2>Your Description:</h2>
                <h3>{returnValPre[1].user_profile_description}</h3>

                <h2>Your Business:</h2>
                <h3>{returnValPre[1].user_business}</h3>

                <div>
                    <h2>Chat History:</h2>
                    <h3>{returnValPre[1].user_chats}</h3>
                </div>
                <div>
                    <h2>Jobs You've Accepted:</h2>
                    <h3>{returnValPre[1].user_current_jobs}</h3>
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