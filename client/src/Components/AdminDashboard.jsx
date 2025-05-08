import * as React from "react";
import styles from "../Styles/AdminAppointment.module.css";
import AdminAppointment from "../pages/Admin/AdminAppointment";
import AdminPatients from "../pages/Admin/AdminPatients";
import { useState } from "react";
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('author');
  }
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
          <span >Dashboard</span>
        </div>
        <div className={styles.div6}>
          <span className={styles.span3}> </span>
          <span><Link to="/admin-appointment" style={{ textDecoration: 'none',color: "#272b41"  }}>Appointments</Link></span>
        </div>
        <div className={styles.div7}>
          <span className={styles.span4}></span>
          <span>
              <Link to="/admin-doctor" style={{ textDecoration: 'none',color: "#272b41"  }}>
                  Doctors
              </Link>
            </span>
        </div>
        <div className={styles.div8}>
          <span className={styles.span5}></span>
          <span><Link to="/admin-patients" style={{ textDecoration: 'none',color: "#272b41"  }}>Patients</Link></span>
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
          <span className={styles.span8} ></span>
          <Link to="/login" style={{ textDecoration: 'none',color: "#272b41"  }}>
            <button onClick={handleLogout} style={{
            all: "unset",
            cursor: "pointer"
          }}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
