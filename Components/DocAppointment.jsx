"use client";
import React from "react";
import "./DocAppointment.css";
import dashboardIcon from "./assets/dashboard.svg";
import appointmentsIcon from "./assets/Appointments.svg";
import scheduleIcon from "./assets/Schedule.svg";
import reviewIcon from "./assets/review.svg";
import settingsIcon from "./assets/settings.svg";
import logoutIcon from "./assets/logout.svg";
import searchIcon from "./assets/search.svg";
import viewIcon from "./assets/view.svg";
import acceptIcon from "./assets/accept.svg";
import cancelIcon from "./assets/cancel.svg";

function DocAppointment() {
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
            <div className="nav-item">
              <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item active">
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
          <header className="content-header">
            <h1 className="page-title">Patient Appoinment</h1>
            <div className="filter-tabs">
              <div className="filter-tab active">Upcoming</div>
              <div className="filter-tab">Today</div>
              <div className="filter-tab">All</div>
            </div>
            <div className="search-container">
              <input type="text" placeholder="Enter name" className="search-input" />
              <img src={searchIcon} alt="Search" className="search-icon" />
            </div>
          </header>
          <section className="appointments-table">
            <div className="table-header">
              <div className="header-patient">Patient Name</div>
              <div className="header-date">Appt Date</div>
              <div className="header-purpose">Purpose</div>
              <div className="header-amount">Amount</div>
              <div className="header-actions"></div>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
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
                  <button className="btn-view action-button">
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span>
                  </button>
                  <button className="btn-accept action-button">
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                  <button className="btn-cancel action-button">
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="dashboard-footer">
        Copyright © 2025 Curely. All Rights Reserved
      </footer>
    </>
  );
}

export default DocAppointment;
