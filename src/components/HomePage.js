import React from 'react'

//import {FullWidth} from '../styles/NavStyler'

import styled, { css } from 'styled-components'
import classNames from 'classnames/bind';

class HomePage extends React.Component{


    render(){
        var bg_img = '../img/grapes_first.jpg'
        const FullWidth = styled.div`
        width: 100vw;
        height: 500px;
        background-image: url(${process.env.PUBLIC_URL + '/grapes_first.jpg'});

        `

        const Button = styled.button``

        return(
            <div>
                <FullWidth>Foo</FullWidth>
                HomePage renders...
                <Button />
            </div>
        )
    }
}

export default HomePage;