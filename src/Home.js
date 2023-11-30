import React from 'react'
import Navbar from './components/navbar/Navbar'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
