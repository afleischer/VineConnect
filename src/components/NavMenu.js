import React from 'react'; 

import { NavOptionLogo, NavOptionContainer, NavStyler, NavOption, NavOptionText} from '../styles/NavStyler'
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

import Hamburger from './Hamburger'


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
		color: white;
		margin: 0;
		transform: translateY(-46%);
		background-color: ${state => (state.link_selected == "home") ? "rgba(45,45,45,0.98)" : (state.link_selected != "home") ? "grey" : "red"}
	`;

		const NavOptionTextFindWork = styled.div`
		font-family: Arial;
		color: white;
		background-color: ${state => (state.link_selected == "find_work") ? "rgba(45,45,45,0.98)" : (state.link_selected != "find_work") ? "grey" : "red"}
	`;
	
		const NavOptionTextPostWork = styled.div`
		font-family: Arial;
		color: white;
		background-color: ${state => (state.link_selected == "post_work") ? "rgba(45,45,45,0.98)" : (state.link_selected != "post_work") ? "grey" : "red"}
	`;
		return (

			<NavStyler>
				<NavOptionLogo>
					<NavOptionText>
						<LogoText><NavLink onClick={() => this.setSelected("home")} style={styles} to='/'>VineConnect</NavLink></LogoText>
					</NavOptionText>
				</NavOptionLogo>
				<NavOption>
					<NavOptionText><NavLink onClick={() => this.setSelected("find_work")} to='/find_work'>Find Work</NavLink></NavOptionText>
				</NavOption>
				<NavOption>
					<NavOptionText><NavLink onClick={() => this.setSelected("post_work")} to='/post_work'>Post Work</NavLink></NavOptionText>
				</NavOption>
				<Hamburger ToggleBurger={this.toggleBurger} BurgerOpened={this.state.hamburger_open}/>
			</NavStyler>
				)
	}

}

export default NavMenu;