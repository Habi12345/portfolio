import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Main from "./components/body.jsx";
import Section from "./components/secttion.jsx";
import Project from "./components/projects.jsx";
import Footer from "./components/footer.jsx";

//Aos Library
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Header />
      <Main />
      <Section />
      <Project />
      <Footer />
    </Router>
  );
}

export default App;
