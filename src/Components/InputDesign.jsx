"use client";
import React from "react";
import styles from "../Styles/InputDesign.module.css";
import AppointmentForm from "./AppointmentForm";
import Footer from "./Footer";
import Nav from "../Components/Nav.jsx"

function InputDesign() {
  return (
    <>
    <Nav />
    <div className={styles.heroSection}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b08cdf6700e1fd3bfda14a9848ef67ed7bcb0aca"
              alt=""
              className={styles.heroBgLeft}
            />
            <div className={styles.heroTitle}>Book Appointment</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6e6788e0e2f9bd884c7f51344f95f41687f965"
              alt=""
              className={styles.heroBgRight}
            />
          </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.div}>
        {/* <Header /> */}
        <AppointmentForm />
        <Footer />
      </div>
    </>
  );
}

export default InputDesign;
