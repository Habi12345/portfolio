import React from 'react'
import '../components/header.css'
export default function header() {
  return (
    <div className='header'>
        <span>Habib Abdulkareem</span>
        <div className='mid-text'>
            <li><a href="">Development</a></li>
            <li><a href="">CV</a></li>
        </div>
        <div className='mid-text2'>
            <li><a href=""><i class="fa-brands fa-github"></i></a></li>
            <li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
        </div>
    </div>
  )
}
