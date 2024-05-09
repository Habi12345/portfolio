import React from 'react'
import '../components/header.css'
export default function header() {
  return (
    <div className='header'>
        <span>&lt;Habib Abdulkareem/&gt;</span>
        <div className='mid-text'>
            <li><a href="">development</a></li>
            <li><a href="">cv</a></li>
        </div>
        <div className='mid-text2'>
            <li><a href=""><i class="fa-brands fa-github"></i></a></li>
            <li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
        </div>
    </div>
  )
}
