import React from 'react'; 

import { NavStyler, NavOption, NavOptionText} from '../styles/NavStyler'
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

import Hamburger from './NavMenu_Child/Hamburger'


class NavMenu extends React.Component{
	constructor(props){
		super(props)

		this.toggleBurger = this.toggleBurger.bind(this)
	}


	state = {
		hamburger_open : false,
		link_selected : "home"
	}

	toggleBurger(){
		this.setState(prevState => ({
			hamburger_open: !prevState.hamburger_open
		  }));

		  console.log("Recognized!");
	}


	setSelected(code){
		var selected = code;

		this.setState(prevState => ({
			link_selected: selected
		}))
	}


	render(){

		const MainColor = "rgba(45,45,45,0.98)";

		var selectedColor = function(){
			var theStyle = this.state.link_selected;
			switch (theStyle){
				case 'home':

			}

			return theStyle;
		}

		const styles= {
			color:"white",
			"text-decoration": "none"
		}

		const LogoText = styled.h1`
		font-family: Nobile;
		color: #e2e2e2;
		margin: 0;
		transform: translateY(-46%);
		background-color: ${props => (props.LinkSelected == "home") ? "#585757" : (props.LinkSelected != "home") ? MainColor : "red"}
	`;


		const NavOptionTextFindWork = styled.div`
		font-family: Arial;
		color: white;
		background-color: ${props => (props.LinkSelected == "find_work") ? "#585757" : (props.LinkSelected != "find_work") ? MainColor : "red"}
	`;
	
		const NavOptionTextPostWork = styled.div`
		font-family: Arial;
		color: white;
		background-color: ${props => (props.LinkSelected == "post_work") ? "#585757" : (props.LinkSelected != "post_work") ? MainColor : "red"}
	`;

		const NavLinkStyle = {
			"color" : "inherit",
			"text-decoration" : "none"
		}

		const LogoLinkStyle = {
			"color" : "white",
			"text-decoration" : "none"
		}

		return (

			<NavStyler>
					<NavOptionText>
						<LogoText LinkSelected={this.state.link_selected}><NavLink style={LogoLinkStyle} onClick={() => this.setSelected("home")}  to='/'>VineConnect</NavLink></LogoText>
					</NavOptionText>
				<NavOption>
					<NavOptionTextFindWork LinkSelected={this.state.link_selected}><NavLink style={NavLinkStyle} onClick={() => this.setSelected("find_work")} to='/find_work'>Find Work</NavLink></NavOptionTextFindWork>
				</NavOption>
				<NavOption>
					<NavOptionTextPostWork LinkSelected={this.state.link_selected}><NavLink style={NavLinkStyle} onClick={() => this.setSelected("post_work")} to='/post_work'>Post Work</NavLink></NavOptionTextPostWork>
				</NavOption>
				<Hamburger  ToggleBurger={this.toggleBurger} BurgerOpened={this.state.hamburger_open} UserData={this.props.UserData}/>
			</NavStyler>
				)
	}

}

export default NavMenu;