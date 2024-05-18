import React, { useEffect, useState } from "react";
import '../components/main.css'

const Main = () => {

  return (
    <div className='main'>
      <div className='txt'>
        <span><b>hi</b></span>
        <span>my name is <b>Habib</b></span>
        <span className='dev'>a &lt;web developer/&gt;</span>
      </div>
      <div id="hire-me" className='button-container'>
        <button className='button-53' role="button">Hire Me</button>
      </div>
    </div>
  )
}

export default Main