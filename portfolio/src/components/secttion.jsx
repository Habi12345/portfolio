import React from 'react'
import { Route } from 'react-router-dom'
import '../components/styles/secttion.css'
import devTools from '../components/devTools' 


export default function secttion() {
    const showIcons = devTools.map((tool) => (
        <div data-aos="flip-down" className="dev-Icon" key={tool.id}>
            <span>{tool.icon}</span>
            <p>{tool.name}</p>
        </div>
    ))
    return (
        <>
            <div data-aos="fade-down-right" className='section'>
                <span className='dev-header'> <strike>development</strike> <strong>Tools</strong></span>
                <div data-aos="zoom-in-up" className='dev-icon-wrapper'>
                    {showIcons}
                </div>
            </div>
            <div data-aos="fade-up-left" className='section'>
                <span className='dev-header'> <strike>developed</strike>  <strong>Apps</strong></span>
                <p> Few collection of my Projects and more projects on my <a href="">Github <i class="fa-brands fa-github"></i></a></p>
            </div>
        </>
    )
}
