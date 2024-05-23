import React from 'react'
import { Route } from 'react-router-dom'
import '../components/styles/secttion.css'
import devTools from '../components/devTools' 


export default function secttion() {
   // const showIcons = devTools.map((tool) => (
      //  <div data-aos="flip-down" className="dev-Icon" key={tool.id}>
         //   <span>{tool.icon}</span>
         //   <p>{tool.name}</p>
       // </div>
   // ))
    return (
        <>
            <div data-aos="fade-down-right" className='section'>
                <span className='dev-header'> <strike>development</strike> <strong>Tools</strong></span>
                <div data-aos="zoom-in-up" className='dev-icon-wrapper'>
                    <div  data-aos="fade-right" className="dev-icon">
                        <span><i class="fa-brands fa-html5"></i></span>
                        <p>HTML</p>
                    </div>
                    <div  data-aos="flip-up" className="dev-icon">
                         <span> <i class="fa-brands fa-css3"></i></span>
                        <p>CSS</p>
                    </div>
                    <div  data-aos="flip-up" className="dev-icon">
                        <span><i class="fa-brands fa-sass"></i></span>
                        <p>SASS</p>
                    </div>
                    <div  data-aos="fade-left" className="dev-icon">
                        <span><i class="fa-brands fa-bootstrap"></i></span>
                        <p>BOOTSTRAP</p>
                    </div>
                    <div  data-aos="fade-up-right" className="dev-icon">
                        <span><i class="fa-brands fa-js"></i></span>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div  data-aos="flip-up" className="dev-icon">
                        <span><i class="fa-brands fa-react"></i></span>
                        <p>REACT</p>
                    </div>
                    <div  data-aos="fade-up-left" className="dev-icon">
                        <span><i class="fa-brands fa-git-alt"></i></span>
                        <p>GIT</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up-left" className='section'>
                <span className='dev-header'> <strike>developed</strike>  <strong>Apps</strong></span>
                <p> Few collection of my Projects and more projects on my <a href="">Github <i class="fa-brands fa-github"></i></a></p>
            </div>
        </>
    )
}
