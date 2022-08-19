import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarItems, SideBtnWrap, SidebarRoute } from './SidebarElements'
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
            <SidebarItems to = "/About" onClick={toggle}>About</SidebarItems>
            <SidebarItems to = "/Projects" onClick={toggle}>Projects</SidebarItems>
            <SidebarItems to = "/Contact" onClick={toggle}>Contact</SidebarItems>
            <SidebarItems to = "/Arcade" onClick={toggle}>Arcade</SidebarItems>
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