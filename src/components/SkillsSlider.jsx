import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const SkillsSlider = (props) => {
 

    const slides = [1,2,3,4,5,6,7,8];

    const slideLeft=()=>{
        let slider =document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft+500
    }

    const slideRight=()=>{
        let slider =document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft-500
    }
  return (
      <>
    <div className='icon-slider-container'>
        <div id="icon-slider">
           <MdChevronLeft size ={40} className="slider-icon left" onClick={slideLeft}/>
           <div id="slider">
           <div className= "slider-card">
                           <div className ="slider-card-image" >
                               <img src="./assets/html.png" ></img>
                           </div>
                           <p className="slider-card-title">HTML</p>
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/css.png"  ></img>
                           </div>
                           <p className="slider-card-title">CSS</p>
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/javascript.png"  ></img>
                           </div>
                           <p className="slider-card-title">JAVASCRIPT</p>
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/react.png" ></img>
                           </div>
                           <p className="slider-card-title">REACT</p>
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/github.png" ></img>
                           </div>
                           <p className="slider-card-title">GITHUB</p>
                           
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/node.png" ></img>
                           </div>
                           <p className="slider-card-title">NODE JS</p>
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/mysql.svg.png"></img>
                           </div>
                           <p className="slider-card-title"> MYSQL</p>
                       </div>
                       <div className= "slider-card">
                           <div className ="slider-card-image" >
                           <img src="./assets/aws.png" ></img>
                           </div>
                           <p className="slider-card-title">AWS</p>
                       </div>
           </div>
           
           <MdChevronRight size ={40} className="slider-icon right" onClick={slideRight}/>
        </div>
        </div>
        {/* </div> */}
        </>
  )
}

export default SkillsSlider;