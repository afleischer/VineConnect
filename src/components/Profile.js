import React from 'react'

import firebase, {db} from '../firebase_config'


class Profile extends React.Component{
    constructor(props){
        super(props);

        this.fetchProfile = this.fetchProfile.bind(this);

        console.log("props received in Profile is"+props)
    }


    fetchProfile(){

    	//Logged-in user


    }

    render(){

        return(
            <div>
            	<UserProfile user={this.props.Session} />
            </div>
        )
    }
}


const UserProfile = (props) => {

	var user = props.user;

	//for each en

	if(user){
		var fb_ref = db.collection('users');

		var query = fb_ref.where("user_name", "==", user.uid);

		console.log("match is:"+match);

        //for each match 

        var match = (<div>{query.uid}</div>)
	}

	else{
		var match = "Log in to access your profile";
	}

	return match

}

export default Profile