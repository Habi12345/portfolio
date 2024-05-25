import React, { useEffect, useState } from "react";
import "../components/styles/body.css";

const Body = () => {
  return (
    <div className="body">
      <div data-aos="fade-right" className="txt">
        <span>
          <b>hi</b>
        </span>
        <span>
          my name is <b>Habib</b>
        </span>
        <span className="dev">a &lt;web developer/&gt;</span>
      </div>
      <div data-aos="fade-left" id="hire-me" className="button-container">
        <button className="button-53" role="button">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Body;
