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
