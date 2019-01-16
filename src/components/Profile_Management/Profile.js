import React from 'react'

import '../../styles/grids.css'

import firebase from 'firebase';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.fetchProfile = this.fetchProfile.bind(this);

    }

    state = {
        profile_image_src : null
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
        profile_image_src : null
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

    //TODO: Create a "profile_image_ref" value when uploading an image, save it in a user collection, then reference it
     retrieveProfileImage = (userdata) => {
        if(userdata){
            let userID = userdata[1].uid;
            let userProfileRef = userdata[1].user_photo;
            var profileImageRef = firebase.storage().ref().child("profileImages/"+userID+"/"+userProfileRef).getDownloadURL()
                .then((returnedValue)=>{
                    let profileSource = returnedValue;
                    this.setState({
                        profile_image_src : profileSource
                    })
                })
        }
        else {
            //pass
        }

    }

    componentWillMount(){
        this.retrieveProfileImage();
    }

    componentDidMount() {
        this.retrieveProfileImage();
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if((!this.props.UserData) && (nextProps.UserData) ){
            let userdata = nextProps.UserData;
            this.retrieveProfileImage(userdata);
        }
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