import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import React from 'react'

function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
