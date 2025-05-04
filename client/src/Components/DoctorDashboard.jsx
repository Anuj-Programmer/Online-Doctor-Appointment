"use client";
import React from "react";
import "./DoctorDashboard.css";
import dashboardIcon from "./assets/dashboard.svg";
import appointmentsIcon from "./assets/Appointments.svg";
import scheduleIcon from "./assets/Schedule.svg";
import reviewIcon from "./assets/review.svg";
import settingsIcon from "./assets/settings.svg";
import logoutIcon from "./assets/logout.svg";
import patientIcon from "./assets/Patient.svg";
import hospitalBedIcon from "./assets/Hospital bed.svg";
import appointmentIcon from "./assets/appointments.svg";
import viewIcon from "./assets/view.svg";
import acceptIcon from "./assets/accept.svg";
import cancelIcon from "./assets/cancel.svg";
import upcomingIcon from "./assets/upcoming.svg";
import calendarIcon from "./assets/calender.svg";

function DoctorDashboard() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600&display=swap"
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
            <div className="nav-item active">
              <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item">
              <img src={appointmentsIcon} alt="Appointments" className="nav-icon" />
              <span>Appointments</span>
            </div>
            <div className="nav-item">
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
        <main className="main-content">
          <div className="overview-cards">
            <div className="overview-card">
              <div className="card-icon-progress pink">
                <img src={patientIcon} alt="Total Patient" />
              </div>
              <div className="card-details">
                <div className="card-title">Total Patient</div>
                <div className="card-count">1500</div>
                <div className="card-date">Till Today</div>
              </div>
            </div>
            <div className="overview-card">
              <div className="card-icon-progress green">
                <img src={hospitalBedIcon} alt="Today Patient" />
              </div>
              <div className="card-details">
                <div className="card-title">Today Patient</div>
                <div className="card-count">160</div>
                <div className="card-date">06, Nov 2019</div>
              </div>
            </div>
            <div className="overview-card">
              <div className="card-icon-progress blue">
                <img src={calendarIcon} alt="Appointments" />
              </div>
              <div className="card-details">
                <div className="card-title">Appoinments</div>
                <div className="card-count">85</div>
                <div className="card-date">06, Apr 2019</div>
              </div>
            </div>
          </div>
          <div className="appointments-section">
            <h2 className="section-title">Patient Appointment</h2>
            <div className="filter-tabs">
              <button className="filter-tab active">Upcoming</button>
              <button className="filter-tab">Today</button>
              <button className="filter-tab">All</button>
            </div>
            <div className="appointments-table">
              <div className="table-header">
                <div>Patient Name</div>
                <div>Appt Date</div>
                <div>Purpose</div>
                <div>Amount</div>
                <div></div>
              </div>
              <div className="table-body">
                <div className="appointment-row">
                  <div className="patient-info">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f"
                      alt="Patient"
                      className="patient-image"
                    />
                    <div className="patient-details">
                      <div className="patient-name">Richard Wilson</div>
                      <div className="patient-id">#PT0016</div>
                    </div>
                  </div>
                  <div className="appointment-date">
                    <div className="date">11 Nov 2019</div>
                    <div className="time">10.00 AM</div>
                  </div>
                  <div className="appointment-purpose">General</div>
                  <div className="appointment-amount">$150</div>
                  <div className="appointment-actions">
                    <button className="btn-view">
                      <img src={viewIcon} alt="View" className="action-icon" />
                      View
                    </button>
                    <button className="btn-upcoming">
                      <img src={upcomingIcon} alt="Upcoming" className="action-icon" />
                      Upcoming
                    </button>
                  </div>
                </div>

                <div className="appointment-row">
                  <div className="patient-info">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f"
                      alt="Patient"
                      className="patient-image"
                    />
                    <div className="patient-details">
                      <div className="patient-name">Charlene Reed</div>
                      <div className="patient-id">#PT0017</div>
                    </div>
                  </div>
                  <div className="appointment-date">
                    <div className="date">12 Nov 2019</div>
                    <div className="time">11.00 AM</div>
                  </div>
                  <div className="appointment-purpose">General</div>
                  <div className="appointment-amount">$200</div>
                  <div className="appointment-actions">
                    <button className="btn-view">
                      <img src={viewIcon} alt="View" className="action-icon" />
                      View
                    </button>
                    <button className="btn-declined">
                      <img src={cancelIcon} alt="Declined" className="action-icon" />
                      Declined
                    </button>
                  </div>
                </div>

                <div className="appointment-row">
                  <div className="patient-info">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f"
                      alt="Patient"
                      className="patient-image"
                    />
                    <div className="patient-details">
                      <div className="patient-name">Travis Trimble</div>
                      <div className="patient-id">#PT0018</div>
                    </div>
                  </div>
                  <div className="appointment-date">
                    <div className="date">13 Nov 2019</div>
                    <div className="time">1.00 PM</div>
                  </div>
                  <div className="appointment-purpose">General</div>
                  <div className="appointment-amount">$175</div>
                  <div className="appointment-actions">
                    <button className="btn-view">
                      <img src={viewIcon} alt="View" className="action-icon" />
                      View
                    </button>
                    <button className="btn-accept">
                      <img src={acceptIcon} alt="Accept" className="action-icon" />
                      Accept
                    </button>
                    <button className="btn-cancel">
                      <img src={cancelIcon} alt="Cancel" className="action-icon" />
                      Cancel
                    </button>
                  </div>
                </div>

                <div className="appointment-row">
                  <div className="patient-info">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f"
                      alt="Patient"
                      className="patient-image"
                    />
                    <div className="patient-details">
                      <div className="patient-name">Travis Trimble</div>
                      <div className="patient-id">#PT0018</div>
                    </div>
                  </div>
                  <div className="appointment-date">
                    <div className="date">13 Nov 2019</div>
                    <div className="time">1.00 PM</div>
                  </div>
                  <div className="appointment-purpose">General</div>
                  <div className="appointment-amount">$175</div>
                  <div className="appointment-actions">
                    <button className="btn-view">
                      <img src={viewIcon} alt="View" className="action-icon" />
                      View
                    </button>
                    <button className="btn-accept">
                      <img src={acceptIcon} alt="Accept" className="action-icon" />
                      Accept
                    </button>
                    <button className="btn-cancel">
                      <img src={cancelIcon} alt="Cancel" className="action-icon" />
                      Cancel
                    </button>
                  </div>
                </div>

                <div className="appointment-row">
                  <div className="patient-info">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f"
                      alt="Patient"
                      className="patient-image"
                    />
                    <div className="patient-details">
                      <div className="patient-name">Travis Trimble</div>
                      <div className="patient-id">#PT0018</div>
                    </div>
                  </div>
                  <div className="appointment-date">
                    <div className="date">13 Nov 2019</div>
                    <div className="time">1.00 PM</div>
                  </div>
                  <div className="appointment-purpose">General</div>
                  <div className="appointment-amount">$175</div>
                  <div className="appointment-actions">
                    <button className="btn-view">
                      <img src={viewIcon} alt="View" className="action-icon" />
                      View
                    </button>
                    <button className="btn-accept">
                      <img src={acceptIcon} alt="Accept" className="action-icon" />
                      Accept
                    </button>
                    <button className="btn-cancel">
                      <img src={cancelIcon} alt="Cancel" className="action-icon" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="dashboard-footer">
        Copyright © 2025 Curely. All Rights Reserved
      </footer>
    </>
  );
}

export default DoctorDashboard;