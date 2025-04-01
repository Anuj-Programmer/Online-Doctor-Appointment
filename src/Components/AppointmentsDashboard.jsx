"use client";
import React, { useState } from "react";
import styles from "./AppointmentsDashboard.module.css";
import AppointmentCard from './AppointmentCard';
import Nav from "./Nav";
import CancelledCard from "./CancelledCard";

function AppointmentsDashboard() {
  // Sample upcoming appointment data that could be fetched from an API
  const upcomingAppointments = [
    {
      id: "Apt001",
      doctor: {
        name: "Dr Edalin",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7e91b1a8524ff8857658e27a893885c7d1a60c5",
        email: "edalin@gmail.com",
        phone: "+1213456789",
      },
      date: "11 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Upcoming",  
    },
    {
      id: "Apt002",
      doctor: {
        name: "Dr Susan",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a1b8dbdad4cede66ef69ab7175e7500c802904",
        email: "susan@gmail.com",
        phone: "+1213456789",
      },
      date: "14 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Upcoming",  
    },
    {
      id: "Apt003",
      doctor: {
        name: "Dr Sandra",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/715d1779b4689ac8162112d3ba67fd74346d958b",
        email: "sandra@gmail.com",
        phone: "+1213456789",
      },
      date: "16 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Upcoming",  
    },
    {
      id: "Apt004",
      doctor: {
        name: "Dr Nicholas",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ff9c160068cd96cd374f7ff0c3db9d98cdaec5f",
        email: "nicholas@gmail.com",
        phone: "+1213456789",
      },
      date: "20 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Upcoming",  
    },
  ];

  const cancelledAppointments = [
    {
      id: "Apt005",
      doctor: {
        name: "Dr Henry",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7e91b1a8524ff8857658e27a893885c7d1a60c5",
        email: "henry@gmail.com",
        phone: "+1213456789",
      },
      date: "22 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Cancelled",
    },
    {
      id: "Apt006",
      doctor: {
        name: "Dr Emma",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a1b8dbdad4cede66ef69ab7175e7500c802904",
        email: "emma@gmail.com",
        phone: "+1213456789",
      },
      date: "25 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Cancelled",
    },
    {
      id: "Apt007",
      doctor: {
        name: "Dr Oliver",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/715d1779b4689ac8162112d3ba67fd74346d958b",
        email: "oliver@gmail.com",
        phone: "+1213456789",
      },
      date: "28 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Cancelled",
    },
  ];

  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <main className={styles.container}>
      <Nav />
      <section className={styles.hero}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b08cdf6700e1fd3bfda14a9848ef67ed7bcb0aca"
          alt="Decorative left image"
          className={styles.heroLeftImage}
        />
        <h1 className={styles.heroTitle}>My Appointments</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6e6788e0e2f9bd884c7f51344f95f41687f965"
          alt="Decorative right image"
          className={styles.heroRightImage}
        />
      </section>

      {/* <section className={styles.filterTabs}>
        <div
          className={`${styles.filterTab1} ${activeTab === "Upcoming" ? styles.active : ""}`}
          onClick={() => setActiveTab("Upcoming")}
        >
          <span className={styles.filterLabel}>Upcoming</span>
          <div className={styles.filterBadgeActive}>{upcomingAppointments.length}</div>
        </div>
        <div
          className={`${styles.filterTab2} ${activeTab === "Cancelled" ? styles.active : ""}`}
          onClick={() => setActiveTab("Cancelled")}
        >
          <span className={styles.filterLabel}>Cancelled</span>
          <div className={styles.filterBadge}>{cancelledAppointments.length}</div>
        </div>
      </section> */}
      <section className={styles.filterTabs}>
  <div
    className={`${styles.filterTab1} ${activeTab === "Upcoming" ? styles.active : styles.inactive}`}
    onClick={() => setActiveTab("Upcoming")}
  >
    <span className={styles.filterLabel}>Upcoming</span>
    <div className={styles.filterBadgeActive}>{upcomingAppointments.length}</div>
  </div>
  
  <div
    className={`${styles.filterTab2} ${activeTab === "Cancelled" ? styles.active : styles.inactive}`}
    onClick={() => setActiveTab("Cancelled")}
  >
    <span className={styles.filterLabel}>Cancelled</span>
    <div className={styles.filterBadge}>{cancelledAppointments.length}</div>
  </div>
</section>


      <section className={styles.appointmentsList}>
        {activeTab === "Upcoming"
          ? upcomingAppointments.map((appointment, index) => (
              <AppointmentCard key={appointment.id} appointment={appointment} isFirst={index === 0} />
            ))
          : cancelledAppointments.map((appointment, index) => (
              <CancelledCard key={appointment.id} appointment={appointment} isFirst={index === 0} />
            ))}
      </section>

      <footer className={styles.footer}>Copyright © 2025 Curely. All Rights Reserved</footer>
    </main>
  );
}

export default AppointmentsDashboard;