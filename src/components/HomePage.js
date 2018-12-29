import React from 'react'

//import {FullWidth} from '../styles/NavStyler'

import styled, { css } from 'styled-components'
import classNames from 'classnames/bind';
import NavLink from "react-router-dom/es/NavLink";

class HomePage extends React.Component{

    render(){



        const FullWidth = styled.div`
        width: 100vw;
        height: 500px;
        background-image: url(${process.env.PUBLIC_URL + '/grapes_first.jpg'});
        background-size: cover;
        background-position: -18%;

        `

        const FullWidth2 = styled.div`
        width: 100vw;
        height: 500px;
        background-image: url(${process.env.PUBLIC_URL + '/agriculture_clouds.jpg'});
        background-size: cover;
        background-position: -18%;
        `

        const LeftOverlay = styled.div`
        background-color: rgba(105, 116, 119, 0.55);
        color: white;
        position: relative;
        top: 15%;
        width: 50%;
        margin: auto;
        padding: 2%;
        transform: translateX(-23%);

        @media screen and (max-width: 824px){
            width: 100vw;
            transform: translateX(0%);
            padding:0;

        }

        @media screen and (min-width: 1640px){
            padding: 1%
        }
        `

        const RightOverlay = styled.div`
        background-color: rgba(105, 116, 119, 0.55);
        color: white;
        position: relative;
        top: 15%;
        left: 29%;
        width: 50%;
        margin: auto;
        padding: 2%;
        transform: translateX(-23%);

        @media screen and (max-width: 824px){
            width: 100vw;
            transform: translateX(0%);
            padding:0;

        }

        @media screen and (min-width: 1640px){
            padding: 1%
        }
        `

        const MainHeader = styled.h2`
        font-family: "EB Garamond";
        margin-bottom: 0;
        margin-top: 0;
        font-weight: 400;
        font-size: 42px;
        `

        const OverlayText = styled.p`
        font-family: "Nobile";

        `

        const InnerPadding = styled.div`
        padding: 4.2%;
        `

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