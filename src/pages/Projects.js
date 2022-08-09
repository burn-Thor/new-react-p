import React from 'react'
import ProjectsCarousel from '../components/ProjectSlider/ProjectsCarousel'

const Projects = () => {
  return (
    <div>
      <h2>Screenshots of some of my favourite parts of projects to date:</h2>
      <ProjectsCarousel projects={ProjectsCarousel}/>
    </div>
  )
}

export default Projects