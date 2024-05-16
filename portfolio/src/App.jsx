import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Section from './components/secttion.jsx'
import Project from './components/projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Section />
      <Project />
    </>

  )
}

export default App
