"use client";
import React from "react";
import styles from "../../styles/InputDesign.module.css";

function PersonalInfoForm() {
  return (
    <section className={styles.div54}>
      <div className={styles.div55}>
        <label htmlFor="name" className={styles.div56}>
          <span>Name</span>
          <span className={styles.span}>*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.div57}>
        <label htmlFor="phone" className={styles.div58}>
          <span>Phone</span>
          <span className={styles.span}>*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Your phone number"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.div59}>
        <label htmlFor="email" className={styles.div60}>
          <span>Email</span>
          <span className={styles.span}>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.div61}>
        <label htmlFor="note" className={styles.div62}>
          Note
        </label>
        <input
          id="note"
          type="text"
          placeholder="Enter note"
          className={styles.input}
        />
      </div>
    </section>
  );
}

export default PersonalInfoForm;
