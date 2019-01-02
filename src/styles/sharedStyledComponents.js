import styled from "styled-components";

export const FullWidth = styled.div`
        width: 100vw;
        height: 500px;
        background-image: url(${process.env.PUBLIC_URL + '/grapes_first.jpg'});
        background-size: cover;
        background-position: -18%;

        `

export const FullWidth2 = styled.div`
        width: 100vw;
        height: 500px;
        background-image: url(${process.env.PUBLIC_URL + '/agriculture_clouds.jpg'});
        background-size: cover;
        background-position: -18%;
        `

export const LeftOverlay = styled.div`
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

export const RightOverlay = styled.div`
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
            left: 0;
        }

        @media screen and (min-width: 1640px){
            padding: 1%
        }
        `

export const MainHeader = styled.h2`
        font-family: "EB Garamond";
        margin-bottom: 0;
        margin-top: 0;
        font-weight: 400;
        font-size: 42px;
        `

export const OverlayText = styled.p`
        font-family: "Nobile";

        `

export const InnerPadding = styled.div`
        padding: 4.2%;
        `


/**
 * Grid systems
 */

export const BreakGrid = styled.div`
    @media screen and (max-width: 1068px){
        display: grid;
        grid-template-areas: "one one one" "two two two";
        grid-template-rows: 73vh;
    }    
    `