/**
 * Styling to be injected for styled components
 */


import styled from 'styled-components';

export const NavOptionLogo = styled.div`

`

export const NavOptionContainer = styled.div`
	border: 2px solid black;
	margin: auto;
`

export const NavStyler = styled.div`

	background-color: rgba(45,45,45,0.98);
	/* min-height: 75px; */ 
	height: 5vh;

    display: flex;
    height: 6vh;
`;

export const NavOption = styled.div`
    border: 2px solid black;
    display: flex;
    padding-left: 2vw;
    padding-right: 2vw;
`;


export const NavOptionText = styled.h2`
	font-family: Arial;
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