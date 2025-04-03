"use client";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import * as React from "react";
import "../../styles/ReschedulePage.css";

function ReschedulePage() {
  return (
    <div className="reschedule-page">
      <div className="header">
        <Nav/>
      </div>
      <div className="page-title-background">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
          className="background-image-left"
        />
        <div className="page-title">Reschedule appointment</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
          className="background-image-right"
        />
      </div>
      <div className="appointment-card">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cde084a08a25d50d5f874c06b9ca54ee1d2c034?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
          className="close-icon"
        />
        <div className="appointment-content">
          <div className="section-title">
            New Appointment date<span className="required-mark">*</span>
          </div>
          <div className="date-selection">
            <div className="date-option">
              20
              <br />
              Mar
            </div>
            <div className="date-option">
              21 <br />
              Mar
            </div>
            <div className="date-option">
              22 <br />
              Mar
            </div>
            <div className="date-option cyan-border">
              23 <br />
              Mar
            </div>
            <div className="date-option">
              24 <br />
              Mar
            </div>
            <div className="date-option wider">
              25 <br />
              Mar
            </div>
            <div className="date-option">
              26 <br />
              Mar
            </div>
          </div>
          <div className="section-title">
            New Appointment time<span className="required-mark">*</span>
          </div>
          <div className="time-selection">
            <div className="time-option">10:00</div>
            <div className="time-option">12:00</div>
            <div className="time-option time-option-small">1:00</div>
            <div className="time-option time-option-small">2:00</div>
            <div className="time-option time-option-small">3:00</div>
            <div className="time-option time-option-small">4:00</div>
            <div className="time-option time-option-small">5:00</div>
            <div className="time-option time-option-small">6:00</div>
          </div>
          <div className="section-title note-title">Note</div>
          <div className="note-input">Enter note</div>
          <button
                className="confirm-button">
                <div>
                    <img src="https://i.imgur.com/NSfS7LH.png" className="confirm-icon"/>
                </div>
                <span>Confirm</span>
            </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ReschedulePage;
