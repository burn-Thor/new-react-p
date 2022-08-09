import React from 'react'
import {FaReact} from 'react-icons/fa'
import {SiMongodb, SiExpress, SiNodedotjs} from 'react-icons/si'
import styled from 'styled-components'


const About = () => {
  return (
    
    <Container>
    <div>
    <h2>Hello, I'm</h2>
    <br/>
    <h1>Olly</h1>
    <br/>
    <h3>Full stack software developer</h3>
    <br/>
    <p>A Manchester-based web developer who loves designing and building custom online experiences, through websites and web applications.</p>
    <br/>
    <p>A recent bootcamp graduate, most comfortable within the MERN stack <SiMongodb/><SiExpress/><FaReact/><SiNodedotjs/>, consistently building experience within this technology suite as well as learning new languages. Currently I am working through my 2nd Mongo DB accreditation (M220JS), beginning to learn C#, and building a Spotify clone in React using Spotify's brilliantly documented Web API.</p>
    <br/>
    <p>I am looking for an exciting role within an SMB or start-up, with a purpose-driven culture that is a long-term fit and will help me become the best developer possible. Ideally this would be a full stack position, however I am happy to specialise within the right environment.</p>
    <br/>
    <p>Having 7 years of succesful commercial sales experience, including managing small sales teams, I bring a different perspective to development. Amongst other things, this part of my career has given me an acute awareness of what is actually important to the end user, proved my resilience and perserverance, as well as forced me to become incredibly self-disciplined. Prioritisation and working smartly are two crucial skills within sales, I have already noticed their importance in the journey to become the best possible developer.</p>
    <br/>
    <p>Please take a look around this React portfolio, hopefully it gives you an idea of my capabilities as a developer.</p>
    </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: #A0A1A1;
  color: #2F3061;
  `

export default About