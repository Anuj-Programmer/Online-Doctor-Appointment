import React, { useState } from "react";
import "./DoctorSettings.css";
import dashboardIcon from "./assets/dashboard.svg";
import appointmentsIcon from "./assets/Appointments.svg";
import scheduleIcon from "./assets/Schedule.svg";
import reviewIcon from "./assets/review.svg";
import settingsIcon from "./assets/settings.svg";
import logoutIcon from "./assets/logout.svg";
import uploadIcon from "./assets/upload-pic.svg";
import hideIcon from './assets/hide.svg';
import showIcon from './assets/show.svg';

function DoctorSettings() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialization: "",
    experience: "",
    feePerConsultation: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
            <div className="nav-item">
              <img src={scheduleIcon} alt="Schedule Timings" className="nav-icon" />
              <span>Schedule Timings</span>
            </div>
            <div className="nav-item">
              <img src={reviewIcon} alt="Reviews" className="nav-icon" />
              <span>Reviews</span>
            </div>
            <div className="nav-item active">
              <img src={settingsIcon} alt="Profile Settings" className="nav-icon" />
              <span>Profile Settings</span>
            </div>
            <div className="nav-item">
              <img src={logoutIcon} alt="Logout" className="nav-icon" />
              <span>Logout</span>
            </div>
          </nav>
        </div>
        
        <main className="settings-content">
          <div className="settings-container">
            <h1 className="settings-title">Doctor Settings</h1>
            
            <h2 className="section-label">Profile Photo</h2>
            <div className="profile-photo-section">
              <div className="upload-box">
                <div className="photo-placeholder">
                  <img src={uploadIcon} alt="Upload" className="upload-icon" />
                </div>
                <div className="upload-middle">
                  <a href="#" className="upload-btn">Upload New</a>
                  <p className="format-text">Format: jpg, png, svg</p>
                </div>
                <a href="#" className="remove-btn">Remove</a>
              </div>
            </div>

            <h2 className="section-label">Information</h2>
            <div className="form-section">
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number <span className="required">*</span></label>
                  <div className="phone-input">
                    <select className="country-code">
                      <option value="+977">+977</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Specialization <span className="required">*</span></label>
                  <select name="specialization" value={formData.specialization} onChange={handleInputChange}>
                    <option value="">Select Specialization</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Endocrinology">Endocrinology</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="General Surgery">General Surgery</option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Oncology">Oncology</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Pulmonology">Pulmonology</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Urology">Urology</option>
                    <option value="Dental">Dental</option>
                    <option value="ENT">ENT (Ear, Nose, and Throat)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Years of Experience <span className="required">*</span></label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Enter Years of Experience"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Fee Per Consultation <span className="required">*</span></label>
                  <div className="fee-input">
                    <span className="currency">$</span>
                    <input
                      type="text"
                      name="feePerConsultation"
                      value={formData.feePerConsultation}
                      onChange={handleInputChange}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Address <span className="required">*</span></label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    rows="3"
                    required
                  />
                </div>
              </div>
            </div>

            <h2 className="section-label">Password</h2>
            <div className="password-section">
              <div className="form-group">
                <label>Current Password <span className="required">*</span></label>
                <div className="password-input">
                  <input type={showCurrentPassword ? "text" : "password"} placeholder="Enter Current Password" />
                  <button 
                    type="button"
                    className="toggle-password" 
                    onClick={(e) => {
                      e.preventDefault();
                      setShowCurrentPassword(!showCurrentPassword);
                    }}
                  >
                    <img 
                      src={showCurrentPassword ? hideIcon : showIcon} 
                      alt={showCurrentPassword ? "Hide password" : "Show password"}
                      className="password-toggle-icon"
                    />
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>New Password <span className="required">*</span></label>
                <div className="password-input">
                  <input type={showNewPassword ? "text" : "password"} placeholder="Enter New Password" />
                  <button 
                    type="button"
                    className="toggle-password" 
                    onClick={(e) => {
                      e.preventDefault();
                      setShowNewPassword(!showNewPassword);
                    }}
                  >
                    <img 
                      src={showNewPassword ? hideIcon : showIcon} 
                      alt={showNewPassword ? "Hide password" : "Show password"}
                      className="password-toggle-icon"
                    />
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password <span className="required">*</span></label>
                <div className="password-input">
                  <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm New Password" />
                  <button 
                    type="button"
                    className="toggle-password" 
                    onClick={(e) => {
                      e.preventDefault();
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  >
                    <img 
                      src={showConfirmPassword ? hideIcon : showIcon} 
                      alt={showConfirmPassword ? "Hide password" : "Show password"}
                      className="password-toggle-icon"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="save-btn">Save Changes</button>
            </div>
          </div>
          <footer className="footer">
            <p>Copyright © 2025 Curely. All Rights Reserved</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default DoctorSettings; 