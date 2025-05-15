import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import "../styles/Contact.css"

function Contact() {
  return (
    <div>
        <Nav/>
        <div className="contact-page">
     
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
                <div className="contact-icon contact-location-icon">
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
            src="https://i.ibb.co/HptL59RV/Chat-GPT-Image-May-12-2025-09-17-50-PM.png"
            className="map-image"
            alt="Location map"
          />
        </div>
      </div>
        <Footer/>
    </div>
    </div>
  )
}

export default Contact
