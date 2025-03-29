import React from "react";
import styles from "./Experience.module.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/943b4ae1c275e734e4fd8aea133bb9eb6a6f855b?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      hospital: "Cambridge University Hospital, NHS Foundation Trust Cambridge",
      department: "ENT",
      location: "Cambridge",
      period: "Dec 2020 - Jan 2022",
      duration: "2 Years 2 months",
      description:
        "Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.",
    },
    {
      id: 2,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ec684110d6e07053888403c9663028afcf8bbf8?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      hospital: "Hill Medical Hospital, Newcastle",
      department: "ENT",
      location: "Cambridge",
      period: "Dec 2022 - Jan 2022",
      duration: "1 Years 1 months",
      description:
        "Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.",
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <h3 className={styles.sectionTitle}>Practice Experience</h3>

      {experiences.map((exp) => (
        <div key={exp.id} className={styles.experienceCard}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <img
                src={exp.logo}
                className={styles.logoImage}
                alt={exp.hospital}
              />
            </div>
          </div>

          <div className={styles.experienceDetails}>
            <h4 className={styles.hospitalName}>{exp.hospital}</h4>

            <div className={styles.departmentInfo}>
              <span className={styles.department}>{exp.department}</span>
              <span className={styles.location}>{exp.location}</span>
            </div>

            <div className={styles.periodInfo}>
              <span className={styles.period}>{exp.period}</span>
              <span className={styles.duration}>{exp.duration}</span>
            </div>

            <p className={styles.description}>{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
