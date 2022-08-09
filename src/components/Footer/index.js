import React from 'react'
import { FooterContainer, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      


                    <FooterLinksItems>
                    <FooterLinkTitle>OT</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Contact'>Contact</FooterLink>
                            <FooterLink to={{pathname:'https://burn-thor.github.io/SpaceInvada/'}}target="_blank">Space Invaders</FooterLink>
                            <FooterLink to='/Snake'>Snake</FooterLink>


                        
                    </FooterLinksItems>

  
    </FooterContainer>
  )
}

export default Footer