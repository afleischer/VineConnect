import React from 'react'

//import {FullWidth} from '../styles/NavStyler'

/**
 * Styled components import
 */
import styled, { css } from 'styled-components';
import {FullWidth, FullWidth2, LeftOverlay, RightOverlay, MainHeader, InnerPadding} from '../styles/sharedStyledComponents.js';

import NavLink from "react-router-dom/es/NavLink";

class HomePage extends React.Component{

    render(){



        return(
            <div>
                <FullWidth>
                  <LeftOverlay> 
                      <InnerPadding>
                      <MainHeader>Connect with Growers.</MainHeader>
                      <MainHeader>Grow the Community.</MainHeader>
                      <p>VineConnect is a portal to connect local grape growers and 
vignerons with local help for seasonal work.</p>
                    <p>Are you a grower? <a href="/signup">Create an account</a> and we can help get you
the work you need.</p>
                    <p>Are you looking for work?  <a href="/signup">Create an account</a> and we’ll get 
you started.</p>
                        </InnerPadding>
                    </LeftOverlay>  

                </FullWidth>


                <FullWidth2>
                    <RightOverlay>
                        <MainHeader>Looking for vineyard work?</MainHeader>
                        <p><NavLink to={'/find_work'}>Click here</NavLink> to search for vineyard jobs in your community.</p>
                    </RightOverlay>
                </FullWidth2>

                <FullWidth>
                    <LeftOverlay>
                        <MainHeader>Need vineyard help?</MainHeader>
                        <p><NavLink to={'/post_work'}>Click here</NavLink> to post a job and get staffed up for the harvest.</p>
                    </LeftOverlay>
                </FullWidth>
            </div>
        )
    }
}

export default HomePage;