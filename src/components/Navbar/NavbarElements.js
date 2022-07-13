import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkS} from 'react-router-dom';

export const Nav = styled.nav`
   
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1000;
    width: 100%;
    padding: 0 24px;
    background: #43BCCD;
    max-width: 11000px;
    border: 5px solid #2F3061;
    border-radius: 0px 0px 20px 20px;
`;

export const NavLogo = styled(LinkRouter)`
    color: #2F3061;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    margin-left: 2px;
    margin-top: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 18px;
    right: 20px;
    tranform: translate(-100%, 60%);
    font-size: 2.4rem;
    cursor: pointer;
    color: #2F3061;
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    @media screen and (max-width: 768px) {
        display:none;        
    }
`

export const NavItem = styled.li`
    height: 80px;
    
`

export const NavLink = styled(LinkS)`
    color: #2F3061;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #2F3061;
    white-space: nowrap;
    padding: 10px 22px;
    color: #9F9493;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &.hover {
        transition: all 0.2s ease-in-out;
        background: #9F9493;
        color: #533A71;
    }`