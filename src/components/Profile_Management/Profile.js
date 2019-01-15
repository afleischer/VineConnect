import React from 'react'

import '../../styles/grids.css'

import firebase from 'firebase';

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

    state= {

    }

    onUploadClick = (e) => {
        //send photo to firebase
        let userID = this.props.UserData[1].uid;
        var fileToUpload = e.target.files[0];

        //Send to firebase
        var storageRef = firebase.storage().ref().child("profileImages/"+userID+"/"+e.target.files[0].name);

        console.log("file object keys are:"+fileToUpload);
        storageRef.put(fileToUpload).then(() => {
            this.setState({
                uploadNotice : "success"
            })
        }).catch({
                uploadNotice : "failure"
        })
    }

    retrieveProfileImage = (e) => {
        if(this.props.UserData){
            let userID = this.props.UserData[1].uid;

            var profileImageRef = firebase.storage().ref().child("profileImages/"+userID+"/");
            var profileSource = profileImageRef.getDownloadURL();

            if (!profileSource){

            }
            else{
                this.setState({
                    profile_image_src : profileSource
                })            
            }

        }
        else {return 0;}

    }

    componentDidMount(){
        this.retrieveProfileImage();
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
                        <div><img src={this.state.profile_image_src ? this.state.profile_image_src : null} /></div>
                        <input type="file" onChange={(e) => this.onUploadClick(e)} /> 
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