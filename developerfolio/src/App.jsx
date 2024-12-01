import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import MainContent from './components/maincontent/MainContent'



function App() {


  return (
    <>
    <div className='container'>
      <Header />
      <MainContent />
    </div>
    </>
  )
}

export default App
