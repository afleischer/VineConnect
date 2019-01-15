import React from 'react'

import styled, { css } from 'styled-components'

import firebase from '../../firebase_config'
import { NavLink, Switch, Route } from 'react-router-dom';


const HamburgerSelector = (props) => {

    const ToggleMenu = props.ToggleMenu;

    const TopStyle = {
        position: "absolute",
        right: "50px",
        top: "calc(3vh - 20px)"
    }

    const style = {
        width: '35px',
        height: '5px',
        'background-color': 'white',
        margin: '6px 0'
    }

    return(
        <div onClick={ToggleMenu} style={TopStyle}>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
        </div>
    )
}


class Hamburger extends React.Component{
    constructor(props){
        super(props);
        this.ToggleBurger = this.ToggleBurger.bind(this);
        this.logOut = this.logOut.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    state= {
        Closed : true
    }

	ToggleBurger(){

        var openedState = this.state.Closed;

        if(openedState === false){
            this.setState({
                Closed: true
            })
        }
        else if (openedState === true){
            this.setState({
                Closed: false
            })
        }            
	}

    //Will either be opened or closed 


    logOut(){

        if(this.props.UserData){
            firebase.auth().signOut().then(function() {
                console.log("signed out!")
            })
        }

    }

    toggleMenu(e){
        this.setState(prevState => ({
            Closed : !prevState.Closed
        }))
    }

    render(){  
        /**
         * Hamburger menu styles 
         */

        const Menu = styled.div`
        top: 5vh
        background-color: #0e0e0e;
        height: 100vh;
        width:300px;
        position:absolute;
        transition: .2s ease-out;
        z-index: 5;
        opacity: 0.8;
           right: -17px;
        animation: ${state => state.Opened} 1s linear;
        display: ${state => state.Opened ? "inherit" : "none"};

        `     
        //        display: ${state => state.Opened ? "block" : "none"};

        const MenuItem = styled.div`

        `

        const MenuItemText = styled.div`
        font-family: "Nobile";
        color:white;
        text-decoration: none;
        `
        //pass props based on open/closed prop

        //Hamburger
        //settings
        //Register / Log In

        const textStyle = {
            color: 'white'
        }

        var session = this.props.UserData;
        var LoginOption;
        if(!session){
            LoginOption = (<MenuItemText><NavLink style={textStyle} to='/login'>Sign In or Sign Up</NavLink></MenuItemText>)
        }
        if(session){
            LoginOption = (null);
        }

        return(
            <div>
                <HamburgerSelector ToggleMenu={this.toggleMenu}  />
                    <Menu Opened={this.state.Closed}> 
                        <MenuItemText><NavLink style={textStyle} to='/profile'>Your Profile</NavLink></MenuItemText>
                        <MenuItemText><NavLink style={textStyle} to='/settings'>Settings</NavLink></MenuItemText>
                        {LoginOption}
                        <MenuItemText onClick={this.logOut}>Log Out</MenuItemText>
                    </Menu>
            </div>
        )

    }
    
}

export default Hamburger