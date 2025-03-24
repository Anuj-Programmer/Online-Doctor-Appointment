import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import Spinner from './Components/Spinner'
import ProtectedRoute from './Components/ProtectedRoute'
import PublicRoute from './Components/PublicRoute'
import ApplyDoctor from './pages/ApplyDoctor'


function App() {
  const {loading} = useSelector(state => state.alerts)

  return (
    <>
     <BrowserRouter>
     {loading ? (<Spinner />) : (
      <Routes>
        <Route path="/" 
        element={
        <ProtectedRoute>
        <HomePage/>
        </ProtectedRoute>
        } 
        />
        <Route path="/applydoctor" 
        element={
        <ProtectedRoute>
        <ApplyDoctor/>
        </ProtectedRoute>
        } 
        />
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>} />
      </Routes>
     )}
     </BrowserRouter>
    </>
  )
}

export default App
