import React from "react";
import styles from "./Awards.module.css";

function Awards() {
  const awards = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3288b37c66e09cf1ded80adec82e727bd4dcab28?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "Award Name (2021)",
      description:
        "evidence based (Dietitians, Physiotherapist, Occupational therapist and Clinical)",
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/af32740d248013318a138ad967eaa27af776d638?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "Award Name (2022)",
      description:
        "evidence based (Dietitians, Physiotherapist, Occupational therapist and Clinical)",
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67ef5c4e626cbb6f66b14b77ab8ff71521490e2a?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "Award Name (2023)",
      description:
        "evidence based (Dietitians, Physiotherapist, Occupational therapist and Clinical)",
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/165600473ba4581072346fd2658d0ff9b8f1276b?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "Award Name (2024)",
      description:
        "evidence based (Dietitians, Physiotherapist, Occupational therapist and Clinical)",
    },
  ];

  return (
    <section className={styles.awardsSection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Awards</h3>
        <div className={styles.controlButtons}>
          <button className={styles.controlButton}></button>
          <button className={styles.controlButton}></button>
        </div>
      </div>

      <div className={styles.awardsList}>
        {awards.map((award) => (
          <div key={award.id} className={styles.awardCard}>
            <div className={styles.awardIcon}>
              <div className={styles.iconBackground}>
                <div className={styles.iconWrapper}>
                  <img
                    src={award.icon}
                    className={styles.icon}
                    alt={award.name}
                  />
                </div>
              </div>
            </div>
            <h4 className={styles.awardName}>{award.name}</h4>
            <p className={styles.awardDescription}>
              {award.description.split(", ").map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
