import * as React from "react";
import styles from "../Styles/AdminAppointment.module.css";
import { useState } from "react";

function AdminDashboard() {
  return (
    <div className={styles.div2}>
      <div className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0e229955c26d5b78b5c92b36ddb1e056cad835?apiKey=262e07c0c4304fc58fb24602708984bc&"
          alt="Profile Image"
          className={styles.profileImg}
        />
        <span className={styles.span}>Rajesh Maharjan</span>
      </div>

      <div className={styles.div4}>
        <div className={styles.div5}>
          <span className={styles.span2}> </span>
          <span>Dashboard</span>
        </div>
        <div className={styles.div6}>
          <span className={styles.span3}> </span>
          <span>Appointments</span>
        </div>
        <div className={styles.div7}>
          <span className={styles.span4}></span>
          <span>Doctors</span>
        </div>
        <div className={styles.div8}>
          <span className={styles.span5}></span>
          <span>Patients</span>
        </div>
        <div className={styles.div9}>
          <span className={styles.span6}></span>
          <span>Specialties</span>
        </div>
        <div className={styles.div10}>
          <span className={styles.span7}></span>
          <span>Profile Settings</span>
        </div>
        <div className={styles.div11}>
          <span className={styles.span8}></span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
