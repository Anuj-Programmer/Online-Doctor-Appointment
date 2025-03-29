import React from "react";
import styles from "./ProfileTabs.module.css";

function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "bio", label: "Doctor Bio" },
    { id: "experience", label: "Experience" },
    { id: "speciality", label: "Speciality" },
    { id: "availability", label: "Availability" },
    { id: "awards", label: "Awards" },
    { id: "review", label: "Review" },
  ];

  return (
    <nav className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tabButton} ${
            activeTab === tab.id ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default ProfileTabs;
