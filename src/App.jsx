import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Page'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <BrowserRouter>
      <div
        className='w-screen'
        data-theme={dark === true ? 'halloween' : 'fantasy'}>
        <Header setDark={setDark} dark={dark} />
        <Home />
        <Footer dark={dark} />
      </div>
    </BrowserRouter>
  )
}

export default App
