import React from "react";
import './setting.css';
import Nav from "./Nav";

const Settings = () => {
    return (
      <div className="settings-container">
        <div className="header">
          <Nav />
        </div>
  
        <div className="settings">
          <h1>Settings</h1>
        </div>
  
        <div className="settings-card">
          {/* Profile Settings */}
          <h3>Profile Settings</h3>
  
          <div className="form-section">
            {/* Profile Photo */}
            <div className="profile-photo">
              <div className="photo-upload">
                <button className="upload-btn">Upload New</button>
                <button className="remove-btn">Remove</button>
              </div>
              <p className="text-gray-500 text-xs">Format: jpg, png, svg</p>
            </div>
  
           <div><h3>Information
            </h3>
             {/* User Information */}
             <div className="info-grid">
              <div>
                <label className="label">First Name *</label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="label">Last Name *</label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="label">Email Address *</label>
                <input type="email" className="input-field" />
              </div>
            </div>
          </div>
            
            </div>
  
          {/* Address and Password Sections */}
          <div className="address-password-container">
            {/* Address Section */}
            <div>
              <h3>Address</h3>
              <div className="address-section">
                <input type="text" className="input-field" placeholder="Address *" />
                <input type="text" className="input-field" placeholder="City *" />
                <input type="text" className="input-field" placeholder="State *" />
                <input type="text" className="input-field" placeholder="Country *" />
                <input type="text" className="input-field" placeholder="Pincode *" />
              </div>
            </div>
  
            {/* Password Section */}
            <div>
              <h3>Password</h3>
              <div className="password-section">
                <input type="password" className="input-field" placeholder="Current Password *" />
                <input type="password" className="input-field" placeholder="New Password *" />
                <input type="password" className="input-field" placeholder="Confirm Password *" />
              </div>
            </div>
          </div>
  
          {/* Buttons */}
          <div className="button-container">
            <button className="button cancel">Cancel</button>
            <button className="button save">Save Changes</button>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="footer">
          Copyright Â© 2025 Curely. All Rights Reserved
        </footer>
      </div>
    );
  };

export default Settings;
