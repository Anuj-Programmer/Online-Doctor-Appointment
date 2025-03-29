import React from "react";
import styles from "./Specialties.module.css";

function Specialties() {
  const specialties = [
    "Orthopedic Consultation",
    "Delivery Blocks",
    "Ultrasound Injection",
    "Tooth Bleaching",
    "Tooth Bleaching",
    "Cosmetic",
  ];

  return (
    <section className={styles.specialtiesSection}>
      <h3 className={styles.sectionTitle}>Speciality</h3>

      <div className={styles.specialtiesList}>
        {specialties.map((specialty, index) => (
          <div key={index} className={styles.specialtyItem}>
            <span className={styles.specialtyText}>{specialty}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialties;
