"use client";
import React from "react";
import styles from "./AppointmentsDashboard.module.css";
import AppointmentCard from './AppointmentCard';  // Make sure this is AppointmentCard
import Nav from "./Nav";

function Cancelled() {
  
  // Sample cancelled appointment data
  const appointments = [
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
      status: "Cancelled",
    },
    {
      id: "Apt002",
      doctor: {
        name: "Dr Susan",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a1b8dbdad4cede66ef69ab7175e7500c802904",
        email: "edalin@gmail.com",
        phone: "+1213456789",
      },
      date: "14 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Cancelled",
    },
    {
      id: "Apt003",
      doctor: {
        name: "Dr Sandra",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/715d1779b4689ac8162112d3ba67fd74346d958b",
        email: "edalin@gmail.com",
        phone: "+1213456789",
      },
      date: "16 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Cancelled",
    },
    {
      id: "Apt004",
      doctor: {
        name: "Dr Nicholas",
        photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ff9c160068cd96cd374f7ff0c3db9d98cdaec5f",
        email: "edalin@gmail.com",
        phone: "+1213456789",
      },
      date: "20 Nov 2024 10.45 AM",
      type: "General Visit",
      method: "Video Call",
      status: "Cancelled",
    },
  ];

  return (
    <main className={styles.container}>
      <Nav />
      <section className={styles.appointmentsList}>
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            isFirst={index === 0}
            isCancelled={true}  // This will hide the cancel button
          />
        ))}
      </section>
    </main>
  );
}

export default Cancelled;
