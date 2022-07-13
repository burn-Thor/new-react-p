import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #9F9493;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};


`

export const CloseIcon = styled(FaTimes)`
    color: #43BCCD;
  
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2 rem;
    right: 1.5 rem;
    background: transparent;
    font-size: 2 rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #2F3061;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }


`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #2F3061 ;
    cursor: pointer;
    
    &:hover {
        color: #43BCCD ;
        transition: 0.2s ease-in-out;
    }`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #43BCCD;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #43BCCD;
        color: #2F3061;
    }
    `

