import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div >
          <About />
          <Projects />
          <Contact />
    </div>
  
  )
}

export default Home