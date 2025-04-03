"use client";
import React from "react";
import styles from "../../styles/InputDesign.module.css";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import PersonalInfoForm from "./PersonalInfoForm";

function AppointmentForm() {
  return (
    <main className={styles.div22}>
      <div className={styles.div23}>
        <div className={styles.div24}>
          <div className={styles.div25}>
            <DateSelector />
            <TimeSelector />
          </div>
          <PersonalInfoForm />
          <div className={styles.div63}>
          <button className={styles.button}>
              <img 
                src="https://cdn.discordapp.com/attachments/841652770389884930/1354524280179789994/calendar-2_1.png?ex=67e59a8a&is=67e4490a&hm=0fccb12665e5c39fccea31a9f6059cd5a4c41ce2efa9dd12ec4d0eabdd49965c&"
                className="book-img"
                style={{ width: '30px', height: 'auto' }} 
              />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppointmentForm;
