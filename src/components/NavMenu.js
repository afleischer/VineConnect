import React from 'react'; 

import {NavStyler, NavOption, NavOptionText, LogoText} from '../styles/NavStyler'

import { NavLink} from 'react-router-dom';



const NavMenu = () => {

	return (

	<NavStyler>
		<NavOption>
			<NavOptionText>
				<LogoText><NavLink to='/'>VineConnect</NavLink></LogoText>
			</NavOptionText>
		</NavOption>

		<NavOption>
			<NavOptionText><NavLink to='/find_work'>Find Work</NavLink></NavOptionText>
		</NavOption>
		<NavOption>
			<NavOptionText><NavLink to='/post_work'>Post Work</NavLink></NavOptionText>
		</NavOption>
	</NavStyler>
		)
}

export default NavMenu;