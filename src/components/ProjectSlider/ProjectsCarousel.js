// import Drumkit from './img/Drumkit.png'
// import Login from './img/Login.png'
// import CRUD from './img/CRUD.png'
// import GroupProject from './img/GroupProject.png'
// import FacetedSearch from './img/FacetedSearch.png'
// import DarkMode from './img/DarkMode.png'
// import { useState } from 'react'
// import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
// import './Carousel.css'


// const ProjectScreenshots = [
//   {
//     image: Drumkit,
//     description: "The first time within development that I was happy with the final result, this was a solo project completed in 2 days during the 4th week of bootcamp.",
//     key: 1  
//   },
//   {
//     image: Login,
//     description: "It took me far too long to figure out this simple log in, oh the joy when I did!",
//     key: 2
//   },
//   {
//     image: CRUD,
//     description: "How the code looks for my first ever CRUD functions. The brief was to use one of each CRUD commands within a custom movies REST API, you'll see shortly how this has progressed...",
//     key: 3
//   },
//   {
//     image: GroupProject,
//     description: "An ecommerce website created towards the end of the bootcamp, this is a full stack project developed in a group. My role was the front-end lead.",
//     key: 4
//   },
//   {
//     image: FacetedSearch,
//     description: "Potentially the most taxing backend code I have written so far... As part of the MongoDB 220JS qualification that I started after the bootcamp, this screenshot shows most of the logic behind a faceted search option for the end user.",
//     key: 5
//   },
//   {
//     image: DarkMode,
//     description: "As a ex-salesperson, it felt satisfying to code a similar platform to what I used to live in. Following a tutorial but adding my own spin, I was particularly happy with the dark mode setting."
//   }
// ]

// const ProjectsCarousel = ({projects}) => {
//   const [pic, setPic] = useState(0);
//   const length = projects.length;

//   const nextPic = () => {
//     setPic(pic === length -1 ? 0 : pic + 1)
//   }
//   const prevPic = () => {
//     setPic(pic === 0 ? length -1 : pic -1)
//   }
//   return (

//     <div className="carouselContainer">
      
      
//       {ProjectScreenshots.map(({image, description}, index) => {
//         return(
//           <div className="carousel">
          
//           <div className={index===pic ? 'active pic' : 'pic'} key={index}>
//             {index===pic &&
            
//             (
//             <div>
//             <FaArrowAltCircleLeft className = "<Left" onClick={prevPic}/>
//             <div className="picPara">
//             <img className="cImage" src={image} alt="a screenshot of one of my projects"/>
//             <p className="description">{description}</p>
//             </div>
//             <FaArrowAltCircleRight className='>Right' onClick={nextPic}/>
//             </div>
            
//             )}
//           </div>

//           </div>
          
//         )
      
//       })}

//     </div>

//   )
// }

// export default ProjectsCarousel