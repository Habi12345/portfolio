import React, { useEffect } from 'react'
import '../components/main.css'
import { animateScroll as scroll } from 'react-scroll'

const Main = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div className='main'>
      <div className='txt'>
        <span><b>hi</b></span>
        <span>my name is <b>Habib</b></span>
        <span className='dev'>a &lt;web developer/&gt;</span>
      </div>
      <div id="hire-me" className='button-container'>
        <button class="button-53" role="button">Hire Me</button>
      </div>
    </div>
  )
}

export default Main