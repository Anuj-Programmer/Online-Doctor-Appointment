import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Admin from "./pages/Admin/Admin";
import AdminAppointment from "./pages/Admin/AdminAppointment";
import AdminPatients from "./pages/Admin/AdminPatients";
import AdminDoctor from "./pages/Admin/AdminDoctor";
import AdminRoute from "./Components/AdminRoute";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Help from "./pages/Help";
import DoctorDetail from "./pages/DoctorDetail";
import BookingPage from "./pages/BookingPage";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import UserAppointment from "./pages/UserAppointment";
import ReschedulePage from "./pages/ReschedulePage";
import SearchPage from "./pages/SearchPage";
import DoctorSchedule from "./pages/Doctor/DoctorSchedule";
import UserProfile from "./pages/UserProfile";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DashboardContent from "./pages/Doctor/DashboardContent";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LandingContact from "./pages/LandingPages/LandingContact";
import LandingAboutPage from "./pages/LandingPages/LandingAbout";
import LandingHelp from "./pages/LandingPages/LandingHelp";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            {/* Landing page as the default route */}
            <Route path="/" element={<LandingPage />} />
            
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applydoctor"
              element={
                
                  <ApplyDoctor />
               
              }
            />
            <Route
              path="/contact"
              element={
               
                  <Contact />
               
              }
            />
            <Route
              path="/help"
              element={
                
                  <Help />
               
              }
            />
            <Route
              path="/about"
              element={
               
                  <AboutPage />
            
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin-appointment"
              element={
                <AdminRoute>
                  <AdminAppointment />
                </AdminRoute>
              }
            />
            <Route
              path="/admin-patients"
              element={
                <AdminRoute>
                  <AdminPatients />
                </AdminRoute>
              }
            />
            <Route
              path="/admin-doctor"
              element={
                <AdminRoute>
                  <AdminDoctor />
                </AdminRoute>
              }
            />
            <Route path="/doctor/:doctorId" element={
              <ProtectedRoute>
                <DoctorDetail />
              </ProtectedRoute>
              } />
            <Route path="/booking/:doctorId" element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
              } /> 
            <Route path="/doctordashboard" element={
              <ProtectedRoute>
                <DoctorDashboard />
              </ProtectedRoute> 
              } />  
            <Route path="/profile" element={
              <ProtectedRoute>
                <UserProfile/>
              </ProtectedRoute> 
              } />  
            <Route path="/appointment" element={
              <ProtectedRoute>
                <UserAppointment />
              </ProtectedRoute>
              } />
            <Route path="/doctor/appointment" element={
              <ProtectedRoute>
                <DoctorAppointment/>
              </ProtectedRoute>
              } />
            <Route path="/doctor/dashboard" element={
              <ProtectedRoute>
                <DashboardContent/>
              </ProtectedRoute>
              } />
            <Route path="/reschedule/:doctorId" element={
              <ProtectedRoute>
                <ReschedulePage />
              </ProtectedRoute>
              } />
            <Route path="/search" element={
              <ProtectedRoute>  
              <SearchPage/>
              </ProtectedRoute>
            }/>
            <Route path="/doctor/schedule/:id" element={
              <ProtectedRoute>
                <DoctorSchedule />
              </ProtectedRoute>
            }/>
            <Route path="/AdminDashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute> 
              } />  
            <Route
              path="/LandingContact"
              element={
                
                  <LandingContact/>
               
              }
            />
            <Route
              path="/LandingAboutPage"
              element={
                
                  <LandingAboutPage />
               
              }
            />
            <Route
              path="/LandingHelp"
              element={
                
                  <LandingHelp />
               
              }
            />
            
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;