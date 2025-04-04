"use client";
import React, { useState } from "react";
import "./Schedule.css";
import dashboardIcon from "./assets/dashboard.svg";
import appointmentsIcon from "./assets/Appointments.svg";
import scheduleIcon from "./assets/Schedule.svg";
import reviewIcon from "./assets/review.svg";
import settingsIcon from "./assets/settings.svg";
import logoutIcon from "./assets/logout.svg";
import deleteIcon from "./assets/delete.svg";

function Schedule() {
  const [timeSlots, setTimeSlots] = useState([
    { startTime: "7:30", startPeriod: "AM", endTime: "7:30", endPeriod: "PM" },
    { startTime: "7:30", startPeriod: "AM", endTime: "7:30", endPeriod: "PM" },
    { startTime: "7:30", startPeriod: "AM", endTime: "7:30", endPeriod: "PM" },
    { startTime: "7:30", startPeriod: "AM", endTime: "7:30", endPeriod: "PM" },
    { startTime: "", startPeriod: "AM", endTime: "", endPeriod: "PM" },
  ]);

  const handleTimeChange = (index, field, value) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index] = { ...updatedSlots[index], [field]: value };
    setTimeSlots(updatedSlots);
  };

  const handlePeriodChange = (index, field, value) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index] = { ...updatedSlots[index], [field]: value };
    setTimeSlots(updatedSlots);
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, { startTime: "", startPeriod: "AM", endTime: "", endPeriod: "PM" }]);
  };

  const removeTimeSlot = (index) => {
    const newTimeSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(newTimeSlots);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="dashboard-container">
        <div className="sidebar-container">
          <div className="doctor-profile">
            <div className="profile-image-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/734139f1ce387c192d9fd781b4f57cfa703fc940"
                alt="Doctor profile"
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <h2 className="doctor-name">Dr. Darren Elder</h2>
              <p className="doctor-specialty">
                BDS, MDS - Oral & Maxillofacial Surgery
              </p>
            </div>
          </div>
          <nav className="sidebar-nav">
            <div className="nav-item">
              <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item">
              <img src={appointmentsIcon} alt="Appointments" className="nav-icon" />
              <span>Appointments</span>
            </div>
            <div className="nav-item active">
              <img src={scheduleIcon} alt="Schedule Timings" className="nav-icon" />
              <span>Schedule Timings</span>
            </div>
            <div className="nav-item">
              <img src={reviewIcon} alt="Reviews" className="nav-icon" />
              <span>Reviews</span>
            </div>
            <div className="nav-item">
              <img src={settingsIcon} alt="Profile Settings" className="nav-icon" />
              <span>Profile Settings</span>
            </div>
            <div className="nav-item">
              <img src={logoutIcon} alt="Logout" className="nav-icon" />
              <span>Logout</span>
            </div>
          </nav>
        </div>

        <main className="schedule-content">
          <h2 className="schedule-title">Available Time Slots</h2>
          <div className="schedule-container">
            <div className="time-slots">
              {timeSlots.map((slot, index) => (
                <div key={index} className="time-slot">
                  <div className="time-input-group">
                    <input
                      type="text"
                      value={slot.startTime}
                      onChange={(e) => handleTimeChange(index, 'startTime', e.target.value)}
                      placeholder="7:30"
                      className="time-input"
                    />
                    <select 
                      value={slot.startPeriod} 
                      onChange={(e) => handlePeriodChange(index, 'startPeriod', e.target.value)}
                      className="period-select"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  <span className="to-text">to</span>
                  <div className="time-input-group">
                    <input
                      type="text"
                      value={slot.endTime}
                      onChange={(e) => handleTimeChange(index, 'endTime', e.target.value)}
                      placeholder="7:30"
                      className="time-input"
                    />
                    <select 
                      value={slot.endPeriod}
                      onChange={(e) => handlePeriodChange(index, 'endPeriod', e.target.value)}
                      className="period-select"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  <button 
                    className="delete-slot"
                    onClick={() => removeTimeSlot(index)}
                  >
                    <img src={deleteIcon} alt="Delete" className="delete-icon" />
                  </button>
                </div>
              ))}
            </div>
            <button className="add-slot-btn" onClick={addTimeSlot}>
              <span className="plus-icon">+</span> Add Another Time Slot
            </button>
            <button className="save-changes-btn">Save Changes</button>
          </div>
          <footer className="footer">
            <p>Copyright © 2025 Curely. All Rights Reserved</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Schedule; 