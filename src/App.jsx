import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Banner'
import Footer from './components/Footer'
import Skill from './components/Skill'
import Project from './components/Project'

const App = () => {
  return (
    <div
      className='w-screen md:[overflow-anchor:none]'
      data-theme={'halloween'}>
      <Header />
      <Home />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}

export default App
