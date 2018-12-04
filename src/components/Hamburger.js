import React from 'react'

import styled, { css } from 'styled-components'

import { NavLink, Switch, Route } from 'react-router-dom';


const HamburgerSelector = () => {


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

    }

    //Will either be opened or closed 


    toggleOpen(){
        if (this.state.open === false){
            console.log("swapping to true")
            this.setState({open: true});
        }else if (this.state.open === true){
            console.log("swapping to false")
            this.setState({open: false});
        }

    }

    render(){

    
    /**
     * Hamburger menu styles 
     */

    const Menu = styled.div`
    background-color: #0e0e0e;
    height: 100vh;
    width:300px;
    position:absolute;
    right:0;
    z-index: 5;
    opacity: 0.8;
    display: ${props => props.OpenClosed ? "block" : "none"};

    `     

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
                <HamburgerSelector onClick={this.toggleOpen}  />
                    <Menu Open={this.state.OpenClosed}> 
                        <MenuItemText><NavLink style={textStyle} to='/profile'>Your Profile</NavLink></MenuItemText>
                        <MenuItemText><NavLink style={textStyle} to='/settings'>Settings</NavLink></MenuItemText>
                        <MenuItemText><NavLink style={textStyle} to='/login'>Sign In or Sign Up</NavLink></MenuItemText>
                    </Menu>
            </div>

        )

    }
    
}

export default Hamburger