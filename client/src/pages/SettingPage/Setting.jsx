import React from "react";
import styles from "../../styles/";

const DoctorSettings = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoWrapper}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab511c64d96aaa822d78386bb3f0e5539e6619bf?placeholderIfAbsent=true" alt="Logo" className={styles.logo} />
            </div>
            <nav className={styles.navigation}>
              <span className={styles.navLink}>Home</span>
              <span className={styles.navLink}>Contact</span>
              <span className={styles.navLink}>Help</span>
              <span className={styles.navLink}>About</span>
            </nav>
            <div className={styles.headerActions}>
              <button className={styles.applyButton}>Apply as Doctor</button>
              <div className={styles.notificationIcon}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="I1:579;767:2105" layer-name="notification-bing" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification-icon"> <path d="M7 6.93667C6.76083 6.93667 6.5625 6.73833 6.5625 6.49917V4.55667C6.5625 4.3175 6.76083 4.11917 7 4.11917C7.23917 4.11917 7.4375 4.3175 7.4375 4.55667V6.49917C7.4375 6.74417 7.23917 6.93667 7 6.93667Z" fill="#6B7280"></path> <path d="M7.01163 12.6708C5.50663 12.6708 4.00746 12.4317 2.5783 11.9533C2.04746 11.7783 1.64496 11.3992 1.46996 10.9208C1.29496 10.4425 1.3533 9.89417 1.63913 9.41583L2.37996 8.17917C2.5433 7.905 2.68913 7.39167 2.68913 7.07083V5.84583C2.68913 3.46 4.6258 1.52333 7.01163 1.52333C9.39746 1.52333 11.3341 3.46 11.3341 5.84583V7.07083C11.3341 7.38583 11.48 7.905 11.6433 8.17917L12.3841 9.41583C12.6583 9.87083 12.705 10.4133 12.5241 10.9092C12.3433 11.405 11.9466 11.7842 11.445 11.9533C10.0158 12.4375 8.51663 12.6708 7.01163 12.6708ZM7.01163 2.40417C5.10996 2.40417 3.56413 3.95 3.56413 5.85167V7.07667C3.56413 7.54917 3.37746 8.23167 3.13246 8.63417L2.39163 9.87667C2.23996 10.1275 2.20496 10.3958 2.29246 10.6292C2.37996 10.8625 2.5783 11.0375 2.8583 11.1308C5.54163 12.0233 8.4933 12.0233 11.1766 11.1308C11.4275 11.0492 11.62 10.8625 11.7075 10.6175C11.8008 10.3725 11.7716 10.1042 11.6375 9.87667L10.8966 8.64C10.6516 8.2375 10.465 7.555 10.465 7.0825V5.8575C10.4591 3.95 8.9133 2.40417 7.01163 2.40417Z" fill="#6B7280"></path> <path d="M7 14.1583C6.37583 14.1583 5.76333 13.9017 5.32 13.4583C4.87666 13.015 4.62 12.4025 4.62 11.7783H5.495C5.495 12.175 5.65833 12.56 5.93833 12.84C6.21833 13.12 6.60333 13.2833 7 13.2833C7.82833 13.2833 8.505 12.6067 8.505 11.7783H9.38C9.38 13.0908 8.3125 14.1583 7 14.1583Z" fill="#6B7280"></path> </svg>',
                  }}
                />
                <div className={styles.notificationBadge} />
              </div>
              <div className={styles.messageIcon}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="I1:579;767:2109" layer-name="message-text" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="message-icon"> <path d="M6.99996 14.1058C6.59746 14.1058 6.21829 13.9017 5.94996 13.5458L5.07496 12.3792C5.05746 12.3558 4.98746 12.3267 4.95829 12.3208H4.66663C2.23413 12.3208 0.729126 11.6617 0.729126 8.38333V5.46667C0.729126 2.88833 2.08829 1.52917 4.66663 1.52917H9.33329C11.9116 1.52917 13.2708 2.88833 13.2708 5.46667V8.38333C13.2708 10.9617 11.9116 12.3208 9.33329 12.3208H9.04163C8.99496 12.3208 8.95413 12.3442 8.92496 12.3792L8.04996 13.5458C7.78163 13.9017 7.40246 14.1058 6.99996 14.1058ZM4.66663 2.40417C2.57829 2.40417 1.60413 3.37833 1.60413 5.46667V8.38333C1.60413 11.02 2.50829 11.4458 4.66663 11.4458H4.95829C5.25579 11.4458 5.59413 11.615 5.77496 11.8542L6.64996 13.0208C6.85413 13.2892 7.14579 13.2892 7.34996 13.0208L8.22496 11.8542C8.41746 11.5975 8.72079 11.4458 9.04163 11.4458H9.33329C11.4216 11.4458 12.3958 10.4717 12.3958 8.38333V5.46667C12.3958 3.37833 11.4216 2.40417 9.33329 2.40417H4.66663Z" fill="#6B7280"></path> <path d="M9.91671 5.90417H4.08337C3.84421 5.90417 3.64587 5.70583 3.64587 5.46667C3.64587 5.2275 3.84421 5.02917 4.08337 5.02917H9.91671C10.1559 5.02917 10.3542 5.2275 10.3542 5.46667C10.3542 5.70583 10.1559 5.90417 9.91671 5.90417Z" fill="#6B7280"></path> <path d="M7.58337 8.82083H4.08337C3.84421 8.82083 3.64587 8.6225 3.64587 8.38333C3.64587 8.14416 3.84421 7.94583 4.08337 7.94583H7.58337C7.82254 7.94583 8.02087 8.14416 8.02087 8.38333C8.02087 8.6225 7.82254 8.82083 7.58337 8.82083Z" fill="#6B7280"></path> </svg>',
                  }}
                />
                <div className={styles.messageBadge} />
              </div>
              <div className={styles.userAvatar}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72a99758f8461c3a39d72e6ee4cda4d0bf514a1?placeholderIfAbsent=true" alt="User" className={styles.avatarImage} />
              </div>
            </div>
          </div>
        </header>

        <main className={styles.mainContent}>
          <aside className={styles.sidebar}>
            <div className={styles.profileCard}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/734139f1ce387c192d9fd781b4f57cfa703fc940?placeholderIfAbsent=true" alt="Profile" className={styles.profileImage} />
              <div className={styles.profileInfo}>
                <span className={styles.doctorName}>Dr. Darren Elder</span>
                <span className={styles.specialization}>
                  BDS, MDS - Oral & Maxillofacial Surgery
                </span>
              </div>
            </div>
            <nav className={styles.sidebarNav}>
              <div className={styles.navItem}>
                <span className={styles.navIcon}></span>
                <span>Dashboard</span>
              </div>
              <div className={styles.navItem}>
                <span className={styles.navIcon}></span>
                <span>Appointments</span>
              </div>
              <div className={styles.navItem}>
                <span className={styles.navIcon}></span>
                <span>Schedule Timings</span>
              </div>
              <div className={styles.navItem}>
                <span className={styles.navIcon}></span>
                <span>Profile Settings</span>
              </div>
              <div className={styles.navItem}>
                <span className={styles.navIcon}></span>
                <span>Logout</span>
              </div>
            </nav>
          </aside>

          <section className={styles.settingsContent}>
            <div className={styles.settingsCard}>
              <h1 className={styles.settingsTitle}>Doctor Settings</h1>
              <div className={styles.settingsSections}>
                <section className={styles.photoSection}>
                  <h2 className={styles.sectionTitle}>Profile Photo</h2>
                  <div className={styles.photoUpload}>
                    <div className={styles.uploadBox}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            '<svg id="1:610" layer-name="gallery-export" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="upload-icon"> <path d="M9.79999 10.95C8.27999 10.95 7.04999 9.72001 7.04999 8.20001C7.04999 6.68001 8.27999 5.45001 9.79999 5.45001C11.32 5.45001 12.55 6.68001 12.55 8.20001C12.55 9.72001 11.32 10.95 9.79999 10.95ZM9.79999 6.95001C9.10999 6.95001 8.54999 7.51001 8.54999 8.20001C8.54999 8.89001 9.10999 9.45001 9.79999 9.45001C10.49 9.45001 11.05 8.89001 11.05 8.20001C11.05 7.51001 10.49 6.95001 9.79999 6.95001Z" fill="black" fill-opacity="0.7"></path> <path d="M15.8 22.95H9.79999C4.36999 22.95 2.04999 20.63 2.04999 15.2V9.20001C2.04999 3.77001 4.36999 1.45001 9.79999 1.45001H13.8C14.21 1.45001 14.55 1.79001 14.55 2.20001C14.55 2.61001 14.21 2.95001 13.8 2.95001H9.79999C5.18999 2.95001 3.54999 4.59001 3.54999 9.20001V15.2C3.54999 19.81 5.18999 21.45 9.79999 21.45H15.8C20.41 21.45 22.05 19.81 22.05 15.2V10.2C22.05 9.79001 22.39 9.45001 22.8 9.45001C23.21 9.45001 23.55 9.79001 23.55 10.2V15.2C23.55 20.63 21.23 22.95 15.8 22.95Z" fill="black" fill-opacity="0.7"></path> <path d="M18.8 8.95001C18.39 8.95001 18.05 8.61001 18.05 8.20001V2.20001C18.05 1.90001 18.23 1.62001 18.51 1.51001C18.79 1.40001 19.11 1.46001 19.33 1.67001L21.33 3.67001C21.62 3.96001 21.62 4.44001 21.33 4.73001C21.04 5.02001 20.56 5.02001 20.27 4.73001L19.55 4.01001V8.20001C19.55 8.61001 19.21 8.95001 18.8 8.95001Z" fill="black" fill-opacity="0.7"></path> <path d="M16.8 4.95001C16.61 4.95001 16.42 4.88001 16.27 4.73001C15.98 4.44001 15.98 3.96001 16.27 3.67001L18.27 1.67001C18.56 1.38001 19.04 1.38001 19.33 1.67001C19.62 1.96001 19.62 2.44001 19.33 2.73001L17.33 4.73001C17.18 4.88001 16.99 4.95001 16.8 4.95001Z" fill="black" fill-opacity="0.7"></path> <path d="M3.46998 19.9C3.22998 19.9 2.98998 19.78 2.84998 19.57C2.61998 19.23 2.70998 18.76 3.04998 18.53L7.97998 15.22C9.05998 14.5 10.55 14.58 11.53 15.41L11.86 15.7C12.36 16.13 13.21 16.13 13.7 15.7L17.86 12.13C18.92 11.22 20.59 11.22 21.66 12.13L23.29 13.53C23.6 13.8 23.64 14.27 23.37 14.59C23.1 14.9 22.62 14.94 22.31 14.67L20.68 13.27C20.18 12.84 19.34 12.84 18.84 13.27L14.68 16.84C13.62 17.75 11.95 17.75 10.88 16.84L10.55 16.55C10.09 16.16 9.32998 16.12 8.81998 16.47L3.89998 19.78C3.75998 19.86 3.60998 19.9 3.46998 19.9Z" fill="black" fill-opacity="0.7"></path> </svg>',
                        }}
                      />
                    </div>
                    <div className={styles.uploadInfo}>
                      <span className={styles.uploadNew}>Upload New</span>
                      <span className={styles.removePhoto}>Remove</span>
                      <span className={styles.formatInfo}>
                        Format: jpg, png, svg
                      </span>
                    </div>
                  </div>
                </section>

                <section className={styles.informationSection}>
                  <h2 className={styles.sectionTitle}>Information</h2>
                  <form className={styles.infoForm}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        First Name
                        <span className={styles.required}>*</span>
                      </label>
                      <input type="text" className={styles.formInput} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Last Name
                        <span className={styles.required}>*</span>
                      </label>
                      <input type="text" className={styles.formInput} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Email Address
                        <span className={styles.required}>*</span>
                      </label>
                      <input type="email" className={styles.formInput} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Phone Number
                        <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.phoneInput}>
                        <div className={styles.countryCode}>
                          <span>+977</span>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                '<svg id="1:649" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropdown-icon"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8145 8.39149C6.97924 8.23299 7.20018 8.14637 7.42876 8.15069C7.65733 8.155 7.87484 8.24989 8.0335 8.41449L12.3 12.9432L16.5665 8.41449C16.644 8.329 16.738 8.25994 16.8427 8.21141C16.9474 8.16287 17.0608 8.13586 17.1762 8.13196C17.2916 8.12806 17.4065 8.14736 17.5143 8.18871C17.6221 8.23006 17.7205 8.29263 17.8036 8.37269C17.8867 8.45276 17.953 8.5487 17.9984 8.65483C18.0437 8.76097 18.0674 8.87513 18.0678 8.99056C18.0683 9.10599 18.0456 9.22033 18.001 9.32682C17.9565 9.43331 17.891 9.52977 17.8085 9.61049L12.921 14.7855C12.8405 14.869 12.7441 14.9354 12.6374 14.9807C12.5307 15.0261 12.4159 15.0494 12.3 15.0494C12.1841 15.0494 12.0693 15.0261 11.9626 14.9807C11.8559 14.9354 11.7595 14.869 11.679 14.7855L6.7915 9.61049C6.63299 9.44575 6.54638 9.22481 6.55069 8.99623C6.555 8.76766 6.64989 8.55014 6.8145 8.39149Z" fill="black"></path> </svg>',
                            }}
                          />
                        </div>
                        <input type="text" className={styles.formInput} />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Specialization
                        <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.selectWrapper}>
                        <span>Select Specialization</span>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              '<svg id="1:664" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropdown-icon"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8145 8.89149C6.97924 8.73299 7.20018 8.64637 7.42876 8.65069C7.65733 8.655 7.87484 8.74989 8.0335 8.91449L12.3 13.4432L16.5665 8.91449C16.644 8.829 16.738 8.75994 16.8427 8.71141C16.9474 8.66287 17.0608 8.63586 17.1762 8.63196C17.2916 8.62806 17.4065 8.64736 17.5143 8.68871C17.6221 8.73006 17.7205 8.79263 17.8036 8.87269C17.8867 8.95276 17.953 9.0487 17.9984 9.15483C18.0437 9.26097 18.0674 9.37513 18.0678 9.49056C18.0683 9.60599 18.0456 9.72033 18.001 9.82682C17.9565 9.93331 17.891 10.0298 17.8085 10.1105L12.921 15.2855C12.8405 15.369 12.7441 15.4354 12.6374 15.4807C12.5307 15.5261 12.4159 15.5494 12.3 15.5494C12.1841 15.5494 12.0693 15.5261 11.9626 15.4807C11.8559 15.4354 11.7595 15.369 11.679 15.2855L6.7915 10.1105C6.63299 9.94575 6.54638 9.72481 6.55069 9.49623C6.555 9.26766 6.64989 9.05014 6.8145 8.89149Z" fill="black"></path> </svg>',
                          }}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Years of Experience
                        <span className={styles.required}>*</span>
                      </label>
                      <input type="text" className={styles.formInput} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Fee Per Consultation
                        <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.feeInput}>
                        <span className={styles.currencySymbol}>$</span>
                        <input
                          type="text"
                          placeholder="Enter amount"
                          className={styles.formInput}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Address
                        <span className={styles.required}>*</span>
                      </label>
                      <textarea className={styles.formTextarea} />
                    </div>
                  </form>
                </section>

                <section className={styles.passwordSection}>
                  <h2 className={styles.sectionTitle}>Password</h2>
                  <div className={styles.passwordForm}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Current Password
                        <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.passwordInput}>
                        <input type="password" className={styles.formInput} />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8086427b3b44ffe2f26088c4a77fdff5cffe0ae9?placeholderIfAbsent=true"
                          alt="Hide"
                          className={styles.hideIcon}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        New Password
                        <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.passwordInput}>
                        <input type="password" className={styles.formInput} />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8086427b3b44ffe2f26088c4a77fdff5cffe0ae9?placeholderIfAbsent=true"
                          alt="Hide"
                          className={styles.hideIcon}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Confirm Password
                        <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.passwordInput}>
                        <input type="password" className={styles.formInput} />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8086427b3b44ffe2f26088c4a77fdff5cffe0ae9?placeholderIfAbsent=true"
                          alt="Hide"
                          className={styles.hideIcon}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <div className={styles.formActions}>
                  <button className={styles.cancelButton}>Cancel</button>
                  <button className={styles.saveButton}>Save Changes</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          Copyright © 2025 Curely. All Rights Reserved
        </footer>
      </div>
    </>
  );
};

export default DoctorSettings;
