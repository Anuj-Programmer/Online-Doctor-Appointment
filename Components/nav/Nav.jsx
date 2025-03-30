import * as React from "react";
import { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import avatar from "./assets/User.png";
import notificationIcon from "./assets/notification.svg";
import messageIcon from "./assets/message.svg";
import userIcon from "./assets/doctor.svg";

function Nav() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav">
      <div className="logo-container">
        <div className="logo">
          <img
            src="src/assets/Logo.png"
            className="logo-image"
            alt="Logo"
          />
        </div>
      </div>
      <div className="nav-items">
        <div className="nav-links">
          <div className="nav-list">
            <div className="nav-item active" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="nav-item">Contact</div>
            <div className="nav-item">Help</div>
            <div className="nav-item" onClick={() => navigate("/about")}>
              About
            </div>
          </div>
        </div>
        <div className="user-actions">
          <div className="user-profile">
            <div
              className="user-profile-button"
              onClick={toggleDropdown}
            >
              <div className="user-icon">
                <img
                  src={userIcon}
                  className="user-icon-image"
                  alt="User"
                />
              </div>
              <div className="user-name">Apply as Doctor</div>
            </div>
          </div>
          <div className="notification-item">
            <button className="notification-button">
              <img
                src={notificationIcon}
                className="notification-image"
                alt="Notification"
              />
            </button>
          </div>
          <div className="message-item">
            <div className="message-button">
              <img
                src={messageIcon}
                className="message-image"
                alt="Messages"
              />
            </div>
          </div>
          <div className="avatar-item">
            <div className="avatar-link" onClick={toggleDropdown}>
              <img
                src={avatar}
                className="avatar-image"
                alt="Avatar"
              />
              {isDropdownOpen && (
                <div className="dropdown">
                   <div className="dropdown-arrow"></div>
                  <div className="dropdown-item">Edit Profile</div>
                  <div className="dropdown-item">My Appointments</div>
                  <div className="dropdown-item">Log Out</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
