import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FashionGallery from './components/FashionGallery'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <FashionGallery />
    </>
  )
}

export default App