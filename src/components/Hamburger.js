import React from 'react'

import styled, { css } from 'styled-components'

import { NavLink, Switch, Route } from 'react-router-dom';


const HamburgerSelector = (props) => {



    const TopStyle = {
        position: "absolute",
        right: "50px",
        top: "20px"
    }

    const style = {
        width: '35px',
        height: '5px',
        'background-color': 'white',
        margin: '6px 0'
    }

    return(
        <div style={TopStyle}> 
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
    }

    state= {
        Closed : true
    }

	ToggleBurger(){

        /* 
		this.setState(prevState => ({
			Opened: !prevState.opened
		  }));
        */
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
        right: ${state => state.Opened ? "-300px" : "0"};
        animation: ${state => state.Opened} 1s linear;

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


        return(
            <div>
                <HamburgerSelector  />
                    <Menu Opened={this.state.Closed}> 
                        <MenuItemText><NavLink style={textStyle} to='/profile'>Your Profile</NavLink></MenuItemText>
                        <MenuItemText><NavLink style={textStyle} to='/settings'>Settings</NavLink></MenuItemText>
                        <MenuItemText><NavLink style={textStyle} to='/login'>Sign In or Sign Up</NavLink></MenuItemText>
                    </Menu>
                    <input type="button" onClick={this.ToggleBurger} /> 
            </div>
        )

    }
    
}

export default Hamburger