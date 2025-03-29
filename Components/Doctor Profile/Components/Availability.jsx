import React from "react";
import styles from "./Availability.module.css";

function Availability() {
  const slots = Array(7).fill({
    date: "Wed Feb 2024",
    time: "01:00 - 02:00 PM",
  });

  return (
    <section className={styles.availabilitySection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Availability</h3>
        <div className={styles.controlButtons}>
          <button className={styles.controlButton}></button>
          <button className={styles.controlButton}></button>
        </div>
      </div>

      <div className={styles.timeSlots}>
        {slots.map((slot, index) => (
          <div key={index} className={styles.timeSlot}>
            <h4 className={styles.slotDate}>{slot.date}</h4>
            <p className={styles.slotTime}>{slot.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Availability;
