import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>


                    <FooterLinksItems>
                    <FooterLinkTitle>Footer</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Contact'>Contact</FooterLink>
                            <FooterLink to='/Random Fact'>Random Fact</FooterLink>
                            <FooterLink to='/Space Invaders'>Space Invaders</FooterLink>
                            <FooterLink to='/Snake'>Snake</FooterLink>


                        
                    </FooterLinksItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    
                    <FooterLinksItems>
                    <FooterLinkTitle>Footer</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Contact'>Contact</FooterLink>
                            <FooterLink to='/Random Fact'>Random Fact</FooterLink>
                            <FooterLink to='/Space Invaders'>Space Invaders</FooterLink>
                            <FooterLink to='/Snake'>Snake</FooterLink>

                        
                    </FooterLinksItems>


                

                </FooterLinksWrapper>

            </FooterLinksContainer>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer