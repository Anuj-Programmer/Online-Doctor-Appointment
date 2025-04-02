import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Admin from "./pages/Admin/Admin";
import AdminRoute from "./Components/AdminRoute";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Help from "./pages/Help";
import DoctorDetail from "./pages/DoctorDetail";
import BookingPage from "./pages/BookingPage";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applydoctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/help"
              element={
                <ProtectedRoute>
                  <Help />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <AboutPage />
                </ProtectedRoute>
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
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
