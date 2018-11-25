import React from 'react'; 

import {NavStyler, NavOption, NavOptionText, LogoText} from '../styles/NavStyler'

import { NavLink} from 'react-router-dom';

import Hamburger from './Hamburger'


const NavMenu = () => {

	const styles= {
		color:"white",
		"text-decoration": "none"
	}

	return (

	<NavStyler>
		<NavOption>
			<NavOptionText>
				<LogoText><NavLink style={styles} to='/'>VineConnect</NavLink></LogoText>
			</NavOptionText>
		</NavOption>

		<NavOption>
			<NavOptionText><NavLink style={styles} to='/find_work'>Find Work</NavLink></NavOptionText>
		</NavOption>
		<NavOption>
			<NavOptionText><NavLink style={styles} to='/post_work'>Post Work</NavLink></NavOptionText>
		</NavOption>
		<Hamburger/>
	</NavStyler>
		)
}

export default NavMenu;