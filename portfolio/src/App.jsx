import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Section from './components/secttion.jsx'
import Project from './components/projects.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Main />
      <Section />
      <Project />
      <Footer/>
    </Router>

  )
}

export default App
