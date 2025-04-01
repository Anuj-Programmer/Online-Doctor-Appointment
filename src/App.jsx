import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './Components/AboutPage'
import Homepage from './Components/Homepage'
import InputDesign from './Components/InputDesign'
import AppointmentsDashboard from './Components/AppointmentsDashboard';
import Cancelled from './Components/Cancelled';



function App() {



  return (
    // <AppointmentsDashboard/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/InputDesign" element={<InputDesign />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App
