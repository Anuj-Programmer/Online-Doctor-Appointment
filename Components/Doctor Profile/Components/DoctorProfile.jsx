"use client";
import React, { useState } from "react";
import styles from "./DoctorProfile.module.css";
import Header from "./Header";
import ProfileBanner from "./ProfileBanner";
import ProfileTabs from "./ProfileTabs";
import DoctorBio from "./DoctorBio";
import Experience from "./Experience";
import Specialties from "./Specialties";
import Availability from "./Availability";
import Awards from "./Awards";
import Reviews from "./Reviews";
import Footer from "./Footer";

function DoctorProfile() {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <main className={styles.doctorProfile}>
      <section className={styles.content}>
        <Header />
        <div className={styles.banner}></div>

        <div className={styles.container}>
          <div className={styles.profileContent}>
            <ProfileBanner />

            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "bio" && <DoctorBio />}
            {activeTab === "experience" && <Experience />}
            {activeTab === "speciality" && <Specialties />}
            {activeTab === "availability" && <Availability />}
            {activeTab === "awards" && <Awards />}
            {activeTab === "review" && <Reviews />}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}

export default DoctorProfile;
