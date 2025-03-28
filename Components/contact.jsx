import React from "react";
import "./contact.css";

// Conditionally import useNavigate to prevent errors if router isn't set up
let useNavigate;
try {
  useNavigate = require("react-router-dom").useNavigate;
} catch (error) {
  useNavigate = () => {};
}

function Contact() {
  // Use a try-catch to handle potential router issues
  let navigate;
  try {
    navigate = useNavigate();
  } catch (error) {
    navigate = (path) => {
      console.log(
        `Navigation to ${path} was attempted but router is not available`,
      );
    };
  }

  return (
    <div className="contact-page">
      {/* Nav Component - Integrated directly */}
      <div className="nav">
        <div className="logo-container">
          <div className="logo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7effc2efc000e217d729b40f023095b493410f06?placeholderIf./Absent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
              className="logo-image"
              alt="Logo"
            />
          </div>
        </div>
        <div className="nav-items">
          <div className="nav-links">
            <div className="nav-list">
              <button className="nav-item" onClick={() => navigate("/")}>
                Home
              </button>
              <button className="nav-item active">Contact</button>
              <button className="nav-item">Help</button>
              <button className="nav-item" onClick={() => navigate("/about")}>
                About
              </button>
            </div>
          </div>
          <div className="user-actions">
            <div className="user-profile">
              <div className="user-profile-button">
                <div className="user-icon">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f172ea07ecc84439ad6925d72a50ebd53c5fdac?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
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
                  src="https://cdn.discordapp.com/attachments/841652770389884930/1352912754192810025/notification-bing.png?ex=67dfbdb0&is=67de6c30&hm=7ad5bad670a1dd92119fa0bfe576650c0715745c717fad2875c931841233fff6&"
                  className="notification-image"
                  alt="Notification"
                />
              </button>
            </div>
            <div className="message-item">
              <div className="message-button">
                <img
                  src="https://cdn.discordapp.com/attachments/841652770389884930/1352913654307356672/message-text.png?ex=67dfbe87&is=67de6d07&hm=93ed3c00e5581ac0a8c17729a76c307205d9c1d236f43f1201b655fe57e5699d&"
                  className="message-image"
                  alt="Messages"
                />
              </div>
            </div>
            <div className="avatar-item">
              <div className="avatar-link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b70f1560e6c8a4c34d55e323bff3606d32b860?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  className="avatar-image"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Contact Content */}
      <div className="contact-content">
        <div className="contact-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="header-left-image"
            alt="Decorative left element"
          />
          <h1 className="contact-title">Contact Us</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="header-right-image"
            alt="Decorative right element"
          />
        </div>
        <div className="contact-container">
          <div className="contact-info-container">
            <div className="contact-heading-container">
              <p className="contact-subtitle">Get in touch</p>
              <h2 className="contact-heading">Have Any Question?</h2>
            </div>
            <div className="contact-card">
              <div className="contact-icon-container">
                <div className="contact-icon location-icon">
                  {/* Fallback icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0e82fd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
              <div className="contact-details">
                <h3 className="contact-detail-title">Address</h3>
                <p className="contact-detail-text">Naxal, Kathmandu</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon-container">
                <div className="contact-icon call-icon">
                  {/* Fallback icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0e82fd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <div className="contact-details">
                <h3 className="contact-detail-title">Phone Number</h3>
                <p className="contact-detail-text">+977 9801234567</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon-container">
                <div className="contact-icon email-icon">
                  {/* Fallback icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0e82fd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </div>
              <div className="contact-details">
                <h3 className="contact-detail-title">Email Address</h3>
                <p className="contact-detail-text">support@curely.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e2458d77e3eae407f72156244003defe6b8204a?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="map-image"
            alt="Location map"
          />
        </div>
      </div>
      <footer className="contact-footer">
        <div className="footer-copyright">
          Copyright © 2025 Curely. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Contact;
