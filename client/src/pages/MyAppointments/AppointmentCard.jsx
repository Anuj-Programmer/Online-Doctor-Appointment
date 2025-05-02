import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/AppointmentCard.module.css";

function AppointmentCard({ appointment, isFirst }) {
  // Check if the appointment is cancelled by looking at the status
  const isCancelled = appointment.status === "Cancelled";
  const isActive = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };
  return (
    <article className={styles.card}>
      <div className={styles.doctorInfo}>
        <img
          src={appointment.doctor.photo}
          alt={appointment.doctor.name}
          className={styles.doctorPhoto}
        />
        <div className={styles.doctorDetails}>
          <div className={styles.appointmentId}>#{appointment.id}</div>
          <div className={styles.doctorName}>{appointment.doctor.name}</div>
        </div>
      </div>

      <div className={styles.appointmentDetails}>
        <div className={styles.dateTime}>
          <div>
            <img src ="https://i.imgur.com/XBylrF9.png" className={styles.timeIcon}/>
          </div>
          <span>{appointment.date}</span>
        </div>
        <div className={styles.visitType}>
          <span>{appointment.type}</span>
          <span className={styles.separator}>|</span>
          <span>{appointment.method}</span>
        </div>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.emailContainer}>
          <div>
            <img src="https://i.imgur.com/SAkXqfz.png" className={styles.mailIcon}/>
          </div>
          <span>{appointment.doctor.email}</span>
        </div>
        <div className={styles.phoneContainer}>
          <div>
            <img src="https://i.imgur.com/V10Ool6.png" className={styles.messageIcon}/>
          </div>
          <span>{appointment.doctor.phone}</span>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button
          className={isFirst ? styles.rescheduleButton : styles.rescheduleButton}
        >
          <div>
            <img src="https://i.imgur.com/NSfS7LH.png" className={styles.calenderIcon}/>
          </div>
          <Link to="/reschedule" className={isActive('/reschedule')}style={{ display: "contents" }}>Reschedule</Link>
        </button>

        {/* Conditionally render the Cancel button only for non-cancelled appointments */}
        {!isCancelled && (
          <button className={styles.cancelButton}>
            {/* https://i.imgur.com/DCXCGsi.png */}
            <FontAwesomeIcon icon={faXmark} className="cancelIcon" style={{ display: "contents" }} />
            Cancel
          </button>
        )}
      </div>
    </article>
  );
}

export default AppointmentCard;
