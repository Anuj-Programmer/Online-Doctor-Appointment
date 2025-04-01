import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from "./AppointmentCard.module.css";

function CancelledCard({ appointment, isFirst }) {
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
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I676:2011;117:89525" layer-name="calendar-2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="calendar-icon"> <path d="M5.33398 4.64578C5.06065 4.64578 4.83398 4.41912 4.83398 4.14578V2.14578C4.83398 1.87245 5.06065 1.64578 5.33398 1.64578C5.60732 1.64578 5.83398 1.87245 5.83398 2.14578V4.14578C5.83398 4.41912 5.60732 4.64578 5.33398 4.64578Z" fill="white"></path> <path d="M10.666 4.64578C10.3927 4.64578 10.166 4.41912 10.166 4.14578V2.14578C10.166 1.87245 10.3927 1.64578 10.666 1.64578C10.9393 1.64578 11.166 1.87245 11.166 2.14578V4.14578C11.166 4.41912 10.9393 4.64578 10.666 4.64578Z" fill="white"></path> <path d="M13.6673 7.37241H2.33398C2.06065 7.37241 1.83398 7.14574 1.83398 6.87241C1.83398 6.59907 2.06065 6.37241 2.33398 6.37241H13.6673C13.9407 6.37241 14.1673 6.59907 14.1673 6.87241C14.1673 7.14574 13.9407 7.37241 13.6673 7.37241Z" fill="white"></path> <path d="M10.6667 15.9791H5.33333C2.9 15.9791 1.5 14.5791 1.5 12.1458V6.47912C1.5 4.04578 2.9 2.64578 5.33333 2.64578H10.6667C13.1 2.64578 14.5 4.04578 14.5 6.47912V12.1458C14.5 14.5791 13.1 15.9791 10.6667 15.9791ZM5.33333 3.64578C3.42667 3.64578 2.5 4.57245 2.5 6.47912V12.1458C2.5 14.0524 3.42667 14.9791 5.33333 14.9791H10.6667C12.5733 14.9791 13.5 14.0524 13.5 12.1458V6.47912C13.5 4.57245 12.5733 3.64578 10.6667 3.64578H5.33333Z" fill="white"></path> <path d="M5.66667 10.4791C5.58 10.4791 5.49333 10.4591 5.41333 10.4258C5.33333 10.3925 5.26001 10.3458 5.19334 10.2858C5.13334 10.2191 5.08666 10.1458 5.05332 10.0658C5.01999 9.98579 5 9.89912 5 9.81246C5 9.63912 5.07334 9.4658 5.19334 9.33913C5.26001 9.27913 5.33333 9.23245 5.41333 9.19911C5.53333 9.14578 5.66667 9.13245 5.80001 9.15912C5.84001 9.16578 5.88 9.17911 5.92 9.19911C5.96 9.21245 6 9.23247 6.04 9.25913C6.07333 9.2858 6.10666 9.31246 6.13999 9.33913C6.16666 9.37246 6.19999 9.40579 6.21999 9.43913C6.24666 9.47913 6.26668 9.51912 6.28001 9.55912C6.30001 9.59912 6.31334 9.63912 6.32001 9.67912C6.32667 9.72578 6.33333 9.76579 6.33333 9.81246C6.33333 9.98579 6.25999 10.1591 6.13999 10.2858C6.01333 10.4058 5.84 10.4791 5.66667 10.4791Z" fill="white"></path> <path d="M8.00065 10.4791C7.82732 10.4791 7.65399 10.4058 7.52732 10.2858C7.50066 10.2524 7.47399 10.2191 7.44733 10.1858C7.42066 10.1458 7.40064 10.1058 7.38731 10.0658C7.36731 10.0258 7.35398 9.98579 7.34731 9.94579C7.34064 9.89912 7.33398 9.85911 7.33398 9.81245C7.33398 9.72578 7.35398 9.63911 7.38731 9.55911C7.42064 9.47911 7.46732 9.40579 7.52732 9.33912C7.71399 9.15245 8.01399 9.09244 8.25399 9.1991C8.34065 9.23244 8.40731 9.27912 8.47398 9.33912C8.59398 9.46579 8.66732 9.63911 8.66732 9.81245C8.66732 9.85911 8.66066 9.89912 8.65399 9.94579C8.64733 9.98579 8.63399 10.0258 8.61399 10.0658C8.60066 10.1058 8.58064 10.1458 8.55398 10.1858C8.52731 10.2191 8.50065 10.2524 8.47398 10.2858C8.40731 10.3458 8.34065 10.3925 8.25399 10.4258C8.17399 10.4591 8.08732 10.4791 8.00065 10.4791Z" fill="white"></path> <path d="M5.66667 12.8124C5.58 12.8124 5.49333 12.7924 5.41333 12.7591C5.33333 12.7258 5.26001 12.6791 5.19334 12.6191C5.13334 12.5524 5.08666 12.4858 5.05332 12.3991C5.01999 12.3191 5 12.2324 5 12.1458C5 11.9724 5.07334 11.7991 5.19334 11.6724C5.26001 11.6124 5.33333 11.5658 5.41333 11.5324C5.66 11.4258 5.95333 11.4858 6.13999 11.6724C6.16666 11.7058 6.19999 11.7391 6.21999 11.7724C6.24666 11.8124 6.26668 11.8524 6.28001 11.8924C6.30001 11.9324 6.31334 11.9724 6.32001 12.0191C6.32667 12.0591 6.33333 12.1058 6.33333 12.1458C6.33333 12.3191 6.25999 12.4924 6.13999 12.6191C6.01333 12.7391 5.84 12.8124 5.66667 12.8124Z" fill="white"></path> </svg>',
            }}
          />
          <span>Resechedule</span>
        </button>
      </div>
    </article>
  );
}

export default CancelledCard;
