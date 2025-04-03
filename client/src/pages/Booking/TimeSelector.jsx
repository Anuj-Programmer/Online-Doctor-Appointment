"use client";
import React, { useState } from "react";
import styles from "../../styles/InputDesign.module.css";

function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "10:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
  ];

  return (
    <section className={styles.div43}>
      <h2 className={styles.div44}>
        <span>Appointment time</span>
        <span className={styles.span}>*</span>
      </h2>
      <div className={styles.div45}>
        {times.map((time, index) => (
          <button
            key={index}
            className={styles.div46}
            onClick={() => setSelectedTime(index)}
            aria-pressed={index === selectedTime}
          >
            {time}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TimeSelector;
