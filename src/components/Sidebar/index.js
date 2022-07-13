import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import About from '../../pages/About';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import Arcade from '../../pages/Arcade'

const Sidebar = ({isOpen, toggle}) => {
  return (

    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to = "/About" onClick={toggle}>About</SidebarLink>
            <SidebarLink to = "/Projects" onClick={toggle}>Projects</SidebarLink>
            <SidebarLink to = "/Contact" onClick={toggle}>Contact</SidebarLink>
            <SidebarLink to = "/Arcade" onClick={toggle}>Arcade</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
            <SidebarRoute to = '/Demo'>Button</SidebarRoute>
        </SideBtnWrap>


    </SidebarWrapper>
    
            <Routes>
            <Route path ='/Home/*' element={<Home />} />
            <Route path ='/About' element={<About />} />
            <Route path ='/Projects' element={<Projects />} />
            <Route path ='/Contact' element={<Contact />} />
            <Route path ='/Arcade' element={<Arcade />} />
        </Routes>
    
    </SidebarContainer>

  )
}

export default Sidebar