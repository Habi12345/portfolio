import React from 'react'
import '../components/secttion.css'
import devTools from '../components/devTools'
import projects from '../components/projects'
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
                <span className='dev-header'> <strike>development</strike> <strong>Process</strong></span>
                <p>Lorem ipsum, oluptatum iure.</p>   
                {projects}
            </div>
        </>
    )
}
