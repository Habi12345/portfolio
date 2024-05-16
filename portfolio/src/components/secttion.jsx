import React from 'react'
import '../components/secttion.css'
import devTools from '../components/devTools'
export default function secttion() {
    const showIcons = devTools.map((tool) => (
        <div className="dev-Icon" key={tool.id}>
            <span>{tool.icon}</span>
            <p>{tool.name}</p>
        </div>
    ))
    return (
        <>
            <div className='section'>
                <span className='dev-header'> <strike>development</strike> <strong>Tools</strong></span>
                <div >
                    {showIcons}
                </div>
            </div>
            <div className='section'>
                <span className='dev-header'> <strike>developed</strike> Apps<strong></strong></span>
                <p> Few collection of my Projects and more projects on my <a href="">Github <i class="fa-brands fa-github"></i></a></p>   
            </div>
        </>
    )
}
