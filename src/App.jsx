import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-screen' data-theme={'halloween'}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
