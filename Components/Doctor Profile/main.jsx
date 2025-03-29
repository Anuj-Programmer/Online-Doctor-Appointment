import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './DoctorProfile.module.css'
import App from './DoctorProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
