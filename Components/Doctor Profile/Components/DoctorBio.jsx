import React from "react";
import styles from "./DoctorBio.module.css";

function DoctorBio() {
  return (
    <section className={styles.bioSection}>
      <h3 className={styles.sectionTitle}>Doctor Bio</h3>
      <p className={styles.bioContent}>
        "Highly motivated and experienced doctor with a passion for providing
        excellent care to patients. Experienced in a wide variety of medical
        settings, with particular expertise in
        <br />
        diagnostics, primary care and emergency medicine. Skilled in using the
        latest technology to streamline patient care. Committed to delivering
        compassionate, personalized care to
        <br />
        each and every patient."
      </p>
    </section>
  );
}

export default DoctorBio;
