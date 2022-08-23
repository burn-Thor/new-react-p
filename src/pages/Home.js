import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingSection from '../components/FullStackLanding'
import InfoSection from '../components/InfoSection'
import {homeObjTechStack, homeObjCareerHighlight, homeObjNow, homeObjGitHub} from '../components/InfoSection/Data'
// import ProjectsCarousel from '../components/ProjectSlider/ProjectsCarousel'


const Home = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }


  return (
    <>

    <Navbar/>

    <LandingSection />
    
    <InfoSection {...homeObjGitHub}/>
    <InfoSection {...homeObjTechStack}/>
   
    <InfoSection {...homeObjCareerHighlight}/>
    <InfoSection {...homeObjNow}/>
    
    

    <Footer />
    
    </>
    
  )
}

export default Home