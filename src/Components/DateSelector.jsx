"use client";
import React, { useState } from "react";
import styles from "../Styles/InputDesign.module.css";

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(3); // Default to the 4th item (23 Mar)

  const dates = [
    { day: "20", month: "Mar" },
    { day: "21", month: "Mar" },
    { day: "22", month: "Mar" },
    { day: "23", month: "Mar" },
    { day: "24", month: "Mar" },
    { day: "25", month: "Mar" },
    { day: "26", month: "Mar" },
  ];

  return (
    <section className={styles.div26}>
      <h2 className={styles.div27}>
        <span>Appointment date</span>
        <span className={styles.span}>*</span>
      </h2>
      <div className={styles.div28}>
        {dates.map((date, index) => (
          <button
            key={index}
            className={styles.div29}
            onClick={() => setSelectedDate(index)}
            role="button"
            aria-pressed={index === selectedDate}
            tabIndex={0}
          >
            <span>{date.day}</span>
            <br />
            <span>{date.month}</span>
          </button>
        ))}
      </div>
</section>


  );
}

export default DateSelector;
