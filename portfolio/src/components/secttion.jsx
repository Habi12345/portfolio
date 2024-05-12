import React from 'react'
import '../components/secttion.css'
import devTools from '../components/devTools'
export default function secttion() {
    const showIcons = devTools.map((tool) =>(
        <div key={tool.id}>
            <span>{tool.icon}</span>
            <p>{tool.name}</p>
        </div>
    ))
  return (
    <div className='section'>
        <strike>development</strike> <strong>Tools</strong>
        <div className="dev-Icon">
            {showIcons}
        </div>
    </div>
  )
}
