import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Header from './components/Header/Header'
import Hero from './components/Header/Hero/Hero'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </>
  )
}

export default App