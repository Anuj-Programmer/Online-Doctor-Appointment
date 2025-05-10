"use client"

import { useState } from "react"
import "../../styles/AdminSettings.css"
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
// Import icons from assets folder
import DashboardIcon from "/src/assets/dashboard.svg";
import CalendarIcon from "/src/assets/appointments.svg";
import DoctorIcon from "/src/assets/doctor.svg";
import PatientsIcon from "/src/assets/patient.svg";
import SpecialtiesIcon from "/src/assets/specialities.svg";
import SettingsIcon from "/src/assets/profile-settings.svg";
import LogoutIcon from "/src/assets/logout.svg";
import EyeIcon from "/src/assets/Hide.svg";
import EyeOffIcon from "/src/assets/Show.svg";
import ImageIcon from "/src/assets/upload-photo.svg";

function AdminSettings() {
  const [profileImage, setProfileImage] = useState(null)
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleRemoveImage = () => {
    setProfileImage(null)
  }

  const handleSaveChanges = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form data submitted:", formData)
  }

  const handleCancel = () => {
    // Reset form or navigate away
    console.log("Cancelled")
  }

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    })
  }

  return (
    <div className="admin-profile-settings-page">
      <div className="content-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="user-profile">
            <div className="profile-image-container">
              <img src="/src/assets/profile.jpg" alt="Rajesh Maharjan" className="profile-image" />
            </div>
            <div className="user-name">Rajesh Maharjan</div>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={DashboardIcon || "/placeholder.svg"} className="nav-icon" alt="Dashboard" />
                  <span className="nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={CalendarIcon || "/placeholder.svg"} className="nav-icon" alt="Calendar" />
                  <span className="nav-text">Appointments</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={DoctorIcon || "/placeholder.svg"} className="nav-icon" alt="Doctors" />
                  <span className="nav-text">Doctors</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={PatientsIcon || "/placeholder.svg"} className="nav-icon" alt="Patients" />
                  <span className="nav-text">Patients</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={SpecialtiesIcon || "/placeholder.svg"} className="nav-icon" alt="Specialties" />
                  <span className="nav-text">Specialties</span>
                </a>
              </li>
              {/* Make sure only the active item has the blue filter applied */}
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  <img
                    src={SettingsIcon || "/placeholder.svg"}
                    className="nav-icon"
                    alt="Settings"
                    style={{
                      filter: "invert(46%) sepia(66%) saturate(2695%) hue-rotate(202deg) brightness(99%) contrast(96%)",
                    }}
                  />
                  <span className="nav-text">Profile Settings</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={LogoutIcon || "/placeholder.svg"} className="nav-icon" alt="Logout" />
                  <span className="nav-text">Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="settings-container">
            <div className="settings-header">Admin Settings</div>
            <form className="settings-form">
              {/* Profile Photo Section */}
              <div className="form-section">
                <h6 className="section-title">Profile Photo</h6>
                <div className="photo-upload-container">
                  <div className="photo-upload-box">
                    <input
                      type="file"
                      id="profile-photo"
                      className="hidden-input"
                      accept="image/jpeg,image/png,image/svg+xml"
                      onChange={handleImageUpload}
                    />
                    <label htmlFor="profile-photo" className="upload-placeholder">
                      {profileImage ? (
                        <img src={profileImage || "/placeholder.svg"} alt="Profile preview" className="preview-image" />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="gallery-icon"
                        >
                          <path d="M15 8h.01"></path>
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l5 5"></path>
                          <path d="m14 14 1-1c.928-.893 2.072-.893 3 0l3 3"></path>
                        </svg>
                      )}
                    </label>
                  </div>
                  <div className="photo-actions">
                    <div className="photo-actions-row">
                      <label htmlFor="profile-photo" className="upload-link">
                        Upload New
                      </label>
                      <button type="button" className="remove-link" onClick={handleRemoveImage}>
                        Remove
                      </button>
                    </div>
                    <div className="format-info">Format: jpg, png, svg</div>
                  </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="form-section">
                <h6 className="section-title">Information</h6>
                <div className="info-container">
                  <div className="name-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group email-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className="form-section">
                <h6 className="section-title">Password</h6>
                <div className="password-container">
                  <div className="form-group">
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password <span className="required">*</span>
                    </label>
                    <div className="password-input-container">
                      <input
                        type={showPassword.current ? "text" : "password"}
                        id="currentPassword"
                        name="currentPassword"
                        className="form-input"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility("current")}
                      >
                        {showPassword.current ? (
                          <img src={EyeOffIcon || "/placeholder.svg"} width={18} height={18} alt="Hide password" />
                        ) : (
                          <img src={EyeIcon || "/placeholder.svg"} width={18} height={18} alt="Show password" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword" className="form-label">
                      New Password <span className="required">*</span>
                    </label>
                    <div className="password-input-container">
                      <input
                        type={showPassword.new ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        className="form-input"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        required
                      />
                      <button type="button" className="password-toggle" onClick={() => togglePasswordVisibility("new")}>
                        {showPassword.new ? (
                          <img src={EyeOffIcon || "/placeholder.svg"} width={18} height={18} alt="Hide password" />
                        ) : (
                          <img src={EyeIcon || "/placeholder.svg"} width={18} height={18} alt="Show password" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password <span className="required">*</span>
                    </label>
                    <div className="password-input-container">
                      <input
                        type={showPassword.confirm ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-input"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility("confirm")}
                      >
                        {showPassword.confirm ? (
                          <img src={EyeOffIcon || "/placeholder.svg"} width={18} height={18} alt="Hide password" />
                        ) : (
                          <img src={EyeIcon || "/placeholder.svg"} width={18} height={18} alt="Show password" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings
