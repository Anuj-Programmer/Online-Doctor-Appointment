import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/src/assets/Left.png"
        alt="Left Banner"
        className={styles.bannerLeft}
      />
      <div className={styles.headerBanner}>
        <h1 className={styles.bannerTitle}>Doctor Profile</h1>
      </div>
      <img
        src="/src/assets/Right.png"
        alt="Right Banner"
        className={styles.bannerRight}
      />
    </header>
  );
}

export default Header;
