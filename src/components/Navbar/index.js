import React from 'react'
// import {GiThorFist} from 'react-icons/gi'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import {Routes, Route} from 'react-router-dom'
import About from '../../pages/About';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import Arcade from '../../pages/Arcade'




const Navbar = () => {
  return (
    <>

        <Nav>
            <NavbarContainer>
                <NavLogo to= '/Home' element={<Home />} >
                    OT
                </NavLogo>
                {/* <MobileIcon onClick={toggle}>
                    <GiThorFist />
                </MobileIcon>  */}
                <NavMenu>
                    <NavItem>
                        <NavLink to='/About'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Projects'>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Contact'>Contact</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Arcade">Arcade</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/About' element={<About />} />
            <Route path ='/Projects' element={<Projects />} />
            <Route path ='/Contact' element={<Contact />} />
            <Route path ='/Arcade' element={<Arcade />} />
        </Routes>
   
    </>
  )
}

export default Navbar
