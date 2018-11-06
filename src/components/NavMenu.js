import React from 'react'; 

import {NavStyler, NavOption, NavOptionText, LogoText} from '../styles/NavStyler'



const NavMenu = () => {

	return (

	<NavStyler>
		<NavOption>
			<NavOptionText>
				<LogoText>VineConnect</LogoText>
			</NavOptionText>
		</NavOption>

		<NavOption>
			<NavOptionText>Find Work</NavOptionText>
		</NavOption>
		<NavOption>
			<NavOptionText>Post Work</NavOptionText>
		</NavOption>
	</NavStyler>
		)
}

export default NavMenu;