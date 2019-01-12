import React from 'react'

import styled, { css } from 'styled-components'

class Footer extends React.Component{
    constructor(props){
        super(props);


    }

    render(){

        const FooterContainer = styled.div`
            height: 10vh;
            background-color: #2f2f2f;
            width: 100vw;
        `

        return(
            <FooterContainer>


            </FooterContainer>
        )
    }

}

export default Footer;