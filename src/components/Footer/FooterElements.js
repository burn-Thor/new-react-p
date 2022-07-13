import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #2F3061 ;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        padding-tio: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px){
        flex-direction: table-column;
    }
`

export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #43BCCD;

    @media screen and (max-width: 420px) {
            margin: 0;
            padding: 10px;
            width: 100%;
    }
    `

    export const FooterLinkTitle = styled.h1`
        font-size: 14px;
        margin-bottom: 16px;
    `

    export const FooterLink = styled(Link)`
        color: #9F9493;
        text-decoration: none;
        margin-bottom: 0.5rem;
        font-size: 14px;
    
    &:hover {
        color: #43BCCD;
        transition: 0.3s ease-out;
    }
    `

