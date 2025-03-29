import React from "react";
import styles from "./ProfileBanner.module.css";

// Local assets imports (update paths as needed)
import profileImage from "./assets/Doctor-image.png";
import chatIcon from "./assets/Chat.svg";
import starIcon from "./assets/Star.svg";
import thumbsUpIcon from "./assets/like.svg";
import hospitalIcon from "./assets/hospital.svg";
import checkIcon from "./assets/Circle.svg";
import circleIcon from "./assets/check.svg";

function ProfileBanner() {
  return (
    <section className={styles.bannerCard}>
      <div className={styles.bannerContent}>
        <div className={styles.profileInfo}>
          <div className={styles.doctorProfile}>
            <div className={styles.profileImageColumn}>
              <img
                src={profileImage}
                className={styles.profileImage}
                alt="Dr. Martin Adian"
              />
            </div>
            <div className={styles.profileDetailsColumn}>
              <div className={styles.profileDetails}>
                <div className={styles.availabilityBadge}>
                  <img src={circleIcon} className={styles.availabilityDot} alt="Available" />
                  <span className={styles.availabilityText}>Available</span>
                </div>
                <div className={styles.nameSection}>
                  <h2 className={styles.doctorName}>Dr. Martin Adian</h2>
                  <span className={styles.specialtySeparator}>●</span>
                  <span className={styles.specialtyText}>Dentist</span>
                </div>
                <p className={styles.qualification}>
                  BDS, MDS - Oral & Maxillofacial Surgery
                </p>
                <div className={styles.ratingSection}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={starIcon} className={styles.starIcon} alt="Star" />
                    ))}
                  </div>
                  <span className={styles.ratingValue}>5.0</span>
                  <a href="#reviews" className={styles.reviewsLink}>
                    150 Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsColumn}>
          <div className={styles.statsList}>
            <div className={styles.recommendationStat}>
              <div className={styles.recommendIcon}>
                <img src={thumbsUpIcon} className={styles.likeIcon} alt="Thumbs Up" />
              </div>
              <div className={styles.recommendText}>
                <span className={styles.recommendPercent}>94% </span> 
                <span className={styles.recommendLabel}>Recommended</span>
              </div>
            </div>

            <div className={styles.hospitalStat}>
              <div className={styles.hospitalIcon}>
                <img src={hospitalIcon} className={styles.buildingIcon} alt="Hospital" />
              </div>
              <span className={styles.hospitalName}>
                Royal Prince Alfred Hospital
              </span>
            </div>
          </div>

          <div className={styles.acceptingPatients}>
            <div className={styles.acceptingIcon}>
              <img src={checkIcon} className={styles.checkIcon} alt="Check" />
            </div>
            <span className={styles.acceptingText}>
              Accepting New Patients
            </span>
          </div>
        </div>
      </div>

      <div className={styles.bannerActions}>
        <button className={styles.chatButton}>
          <img src={chatIcon} className={styles.chatIcon} alt="Chat" />
          <span className={styles.chatText}>Chat</span>
        </button>

        <div className={styles.appointmentSection}>
          <p className={styles.priceInfo}>
            <span className={styles.priceLabel}>Price : $100 - $200 </span>
            <span className={styles.sessionLabel}>for a Session</span>
          </p>
          <a href="#book" className={styles.bookButton}>
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileBanner;