import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Help from './Components/Help'
import SearchResults from './Components/SearchResults'
import Settings from './Components/Setting'
import BookingPage from './pages/BookingPage.jsx'
function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Help/>} />
        <Route path="/b" element={<BookingPage/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<SearchResults/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
