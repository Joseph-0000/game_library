import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import HomePage from './pages/HomePage.jsx'


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
