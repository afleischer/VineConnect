import React from 'react'

import firebase, {db} from '../firebase_config'


class Profile extends React.Component{
    constructor(props){
        super(props);

        this.fetchProfile = this.fetchProfile.bind(this);

        console.log("props received in Profile is"+props);



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

        /*
        firebase.auth().onAuthStateChanged(userdata => {
            var fb_ref = db.collection('users');
            if (props.user.uid != null) {
                fb_ref.where("uid", "==", props.user.uid)
                    .get()
                    .then(querySnapshot => {
                        let docArr = ["foo"];
                        console.log("querySnapshot is:" + querySnapshot);
                        querySnapshot.forEach(doc => {
                            docArr.push(doc.data());
                        });
                        this.setState({
                            user_docs: docArr
                        })
                    })
            }

        })
        */
    }

    /*

var user = props.user;

var fb_ref = db.collection('users');

try{
    var match = this.state.user_docs;
}catch{}

if(user){

    fb_ref.where("uid", "==", user.uid)
        .get()
        .then(querySnapshot => {
            let docArr= ["foo"];
            console.log("querySnapshot is:"+querySnapshot);
            querySnapshot.forEach(doc => {
                docArr.push(doc.data());
            });
            this.setState({
                user_docs: docArr
            })
        })

    console.log("match is:"+match);

    //for each match

}
*/

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
                <h2>Your Business:</h2>
                <h3>{returnValPre[1].user_business}</h3>
                <h2>Chat History:</h2>
                <h3>{returnValPre[1].user_chats}</h3>
                <h2>Jobs You've Accepted:</h2>
                <h3>{returnValPre[1].user_current_jobs}</h3>
                <h2>Profile Photo:</h2>
                <h3>{returnValPre[1].user_photo}</h3>
                <h2>Your Description:</h2>
                <h3>{returnValPre[1].user_profile_description}</h3>
            </div>)
        }catch(error){
            var returnVal = (<div> Nope nothing</div>);
        }

        return (
            returnVal
        )

    }
}

export default Profile