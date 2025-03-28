import React, { useState } from 'react';
import './DocRegister.css';

function DocRegister() {
  const [timeSlots, setTimeSlots] = useState([{ id: 1 }]);

  const addTimeSlot = () => {
    const newSlot = {
      id: timeSlots.length + 1
    };
    setTimeSlots([...timeSlots, newSlot]);
  };

  const removeTimeSlot = (id) => {
    if (timeSlots.length > 1) {
      setTimeSlots(timeSlots.filter(slot => slot.id !== id));
    }
  };

  return (
    <div className="doc-register-container">
      {/* Main Content */}
      <main className="main-content">
        <div className="form-container">
          <h2 className="form-title">Apply as a Doctor</h2>
          <p className="form-subtitle">Join our network of healthcare professionals</p>

          <form className="doctor-form">
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="Enter first name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Enter last name" 
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="phone-input">
                <div className="country-code">
                  <select>
                    <option>+977</option>
                  </select>
                </div>
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  placeholder="Enter phone number" 
                />
              </div>
            </div>

            {/* Certificate */}
            <div className="form-group">
              <label htmlFor="certificate">Certificate Verification</label>
              <div className="certificate-upload">
                <input 
                  type="text" 
                  id="certificate" 
                  placeholder="Certificate" 
                  readOnly 
                />
                <button type="button" className="upload-btn">Upload</button>
              </div>
            </div>

            {/* Address */}
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea 
                id="address" 
                placeholder="Enter your complete address"
              ></textarea>
            </div>

            {/* Specialization */}
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <select id="specialization">
                <option value="">Select Specialization</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
            </div>

            {/* Experience and Fee */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="experience">Years of Experience</label>
                <input 
                  type="number" 
                  id="experience" 
                  placeholder="Enter years" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Fee Per Consultation</label>
                <div className="fee-input">
                  <span className="currency-symbol">$</span>
                  <input 
                    type="number" 
                    id="fee" 
                    placeholder="Enter amount" 
                  />
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="form-group">
              <label>Available Time Slots</label>
              {timeSlots.map((slot) => (
                <div key={slot.id} className="time-slot">
                  <input type="time" className="time-input" />
                  <span className="time-separator">to</span>
                  <input type="time" className="time-input" />
                  {timeSlots.length > 1 && (
                    <button 
                      type="button" 
                      className="remove-slot-btn"
                      onClick={() => removeTimeSlot(slot.id)}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button 
                type="button" 
                className="add-slot-btn"
                onClick={addTimeSlot}
              >
                + Add Another Time Slot
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="apply-btn">Apply Now</button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Copyright © 2025 Surely. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default DocRegister;
