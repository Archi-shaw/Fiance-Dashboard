import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
// import Login from './Components/Login.jsx'
import Hero from './Components/Hero.jsx'
import Usecase from './Components/Usecase.jsx'
import Features from './Components/Features.jsx'
function App() {
  return (
    <div className='w-full min-h-full  text-white'>
      <Navbar />
      <Hero/>
      <Usecase />
       <Features /> 
    </div>
  )
}

export default App
