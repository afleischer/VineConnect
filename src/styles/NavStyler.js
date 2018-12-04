/**
 * Styling to be injected for styled components
 */


import styled from 'styled-components';

export const NavStyler = styled.div`

	background-color: #555555;
	min-height: 75px;
	height: 5vh;

	display: flex;

`;

export const NavOption = styled.div`

`;


export const NavOptionText = styled.h2`
	font-family: Arial;
	color: white;

`;


export const LogoText = styled.h1`

	font-family: Nobile;
	color: white;

`;

export const MapStyle = styled.div`
	width: '70vw',
	height: '70vh'


	@media screen and (max-width < 700px){
		width: '100vw'
	}
`

export const FullWidth = styled.div`
	width: '100vw'
	height: '500px'
`