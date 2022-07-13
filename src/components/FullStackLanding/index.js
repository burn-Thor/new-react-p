import React, {useState} from 'react';
// import Video from '../../videos/dev.mp4';
import Image from '../../img/chipMicroTransistors&Circuits.jpg';
import { LandingContainer, FullStackBg, VideoBg, FullStackContent, FsH1, FsH2, FsP, FsBtnWrapper } from './FullStackElements';
import { Button } from '../ButtonElements';



const LandingSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };


  return (
    <LandingContainer>
        <FullStackBg>
            <VideoBg src={Image} type ='jpg' />
        </FullStackBg>

        <FullStackContent>
            <FsH1>Olly Thorburn</FsH1>
            
            <FsH2>Full Stack Developer</FsH2>
            
            <FsP>Disciplined, enthusiastic and creative, excited to start work as a Junior Dev.</FsP>

            <FsBtnWrapper>
            <Button
              to='contact'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              >Send CV</Button>
            </FsBtnWrapper>

        </FullStackContent>


    </LandingContainer>



  )
}

export default LandingSection