import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorDashboard.css";
import "../styles/Sidebar.css";

import dashboardIcon from "../assets/dashboard.svg";
import appointmentsIcon from "../assets/appointment.png";
import scheduleIcon from "../assets/Schedule.svg";
import reviewIcon from "../assets/review.svg";
import settingsIcon from "../assets/settings.svg";
import logoutIcon from "../assets/logout.svg";

function SidebarDoctor({ activeTab, setActiveTab }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token || !user?._id) return;

        // First, get all doctors to find the one with matching userId
        const response = await axios.get("/api/v1/doctor/get-all-doctors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          // Find the doctor with matching userId
          const doctor = response.data.data.find(
            (doc) => doc.userId && doc.userId._id === user._id
          );
          if (doctor) {
            setDoctorData(doctor);
          }
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [user?._id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("author");
    dispatch(setUser(null));
    navigate("/login");
  };

  console.log("Doctordata:", doctorData);

  return (
    <>
      <div className="doctor-profile">
        <div className="profile-image-wrapper">
          {doctorData?.profile ? (
            <img
              src={doctorData.profile}
              alt="Doctor profile"
              className="profile-image"
            />
          ) : (
            <i className="fa-solid fa-user-doctor doctor-profile-icon"></i>
          )}
        </div>

        <div className="profile-info">
          <h2 className="doctor-name">
            Dr. {doctorData?.firstName} {doctorData?.lastName}
          </h2>
          <p className="doctor-specialty">{doctorData?.specialization}</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        <div
          className={`nav-item-doctor ${
            activeTab === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleTabClick("dashboard")}
        >
          <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
          <span>Dashboard</span>
        </div>
        <div
          className={`nav-item-doctor ${
            activeTab === "appointments" ? "active" : ""
          }`}
          onClick={() => handleTabClick("appointments")}
        >
          <img src={appointmentsIcon} alt="Appointments" className="nav-icon" />
          <span>Appointments</span>
        </div>
        <div
          className={`nav-item-doctor ${
            activeTab === "schedule" ? "active" : ""
          }`}
          onClick={() => handleTabClick("schedule")}
        >
          <img src={scheduleIcon} alt="Schedule Timings" className="nav-icon" />
          <span>Schedule Timings</span>
        </div>
        {/* <div 
              className={`nav-item-doctor ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => handleTabClick('reviews')}
            >
              <img src={reviewIcon} alt="Reviews" className="nav-icon" />
              <span>Reviews</span>
            </div> */}
        <div
          className={`nav-item-doctor ${
            activeTab === "settings" ? "active" : ""
          }`}
          onClick={() => handleTabClick("settings")}
        >
          <img src={settingsIcon} alt="Profile Settings" className="nav-icon" />
          <span>Profile Settings</span>
        </div>
        <div onClick={handleLogout} className="nav-item-doctor">
          <img src={logoutIcon} alt="Logout" className="nav-icon" />
          <span>Logout</span>
        </div>
      </nav>
    </>
  );
}

export default SidebarDoctor;
