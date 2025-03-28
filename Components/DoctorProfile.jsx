import React, { useState, useEffect } from "react";
import "./DoctorProfile.css";

// Import images from local storage
import doctorImg from "./assets/Doctor-image.png";
import bannerImgLeft from "./assets/left.png";
import bannerImgRight from "./assets/right.png";
// Additional images
import hospitalLogo from "./assets/hospital2.png";
import hospital2Logo from "./assets/hospital1.png";

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState("bio");

  // Add Tabler Icons CDN in component
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="doctor-profile">
      <div className="profile-banner">
        <img src={bannerImgLeft} alt="" className="banner-img-left" />
        <div className="banner-title">Doctor Profile</div>
        <img src={bannerImgRight} alt="" className="banner-img-right" />
      </div>

      <div className="profile-container">
        <div className="doctor-card">
          <div className="doctor-info">
            <img src={doctorImg} alt="Doctor" className="doctor-photo" />
            <div className="availability-badge">Available</div>
            <div className="doctor-name">
              <span>Dr.Martin Adian</span>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="17:5719" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="verified-icon" style="margin: 0; padding: 0; box-sizing: border-box"> <g clip-path="url(#clip0_17_5719)"> <mask id="mask0_17_5719" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17"> <path d="M16.877 0.600006H0.876953V16.6H16.877V0.600006Z" fill="white"></path> </mask> <g mask="url(#mask0_17_5719)"> <path d="M10.9432 1.4702C10.674 1.19474 10.3525 0.975862 9.9975 0.826424C9.64253 0.676987 9.26128 0.600006 8.87615 0.600006C8.49101 0.600006 8.10976 0.676987 7.75479 0.826424C7.39983 0.975862 7.07832 1.19474 6.80915 1.4702L6.18714 2.1082L5.29715 2.0972C4.9119 2.09264 4.52962 2.16516 4.17281 2.31049C3.81599 2.45582 3.49184 2.67103 3.2194 2.94346C2.94697 3.21589 2.73176 3.54005 2.58643 3.89686C2.4411 4.25368 2.36859 4.63595 2.37315 5.0212L2.38315 5.9112L1.74715 6.5332C1.47169 6.80237 1.25281 7.12389 1.10337 7.47885C0.953934 7.83381 0.876953 8.21507 0.876953 8.6002C0.876953 8.98534 0.953934 9.36659 1.10337 9.72156C1.25281 10.0765 1.47169 10.398 1.74715 10.6672L2.38415 11.2892L2.37315 12.1792C2.36859 12.5645 2.4411 12.9467 2.58643 13.3036C2.73176 13.6604 2.94697 13.9845 3.2194 14.257C3.49184 14.5294 3.81599 14.7446 4.17281 14.8899C4.52962 15.0353 4.9119 15.1078 5.29715 15.1032L6.18714 15.0932L6.80915 15.7292C7.07832 16.0047 7.39983 16.2236 7.75479 16.373C8.10976 16.5224 8.49101 16.5994 8.87615 16.5994C9.26128 16.5994 9.64253 16.5224 9.9975 16.373C10.3525 16.2236 10.674 16.0047 10.9432 15.7292L11.5652 15.0922L12.4552 15.1032C12.8404 15.1078 13.2227 15.0353 13.5795 14.8899C13.9363 14.7446 14.2605 14.5294 14.5329 14.257C14.8054 13.9845 15.0206 13.6604 15.1659 13.3036C15.3112 12.9467 15.3838 12.5645 15.3792 12.1792L15.3692 11.2892L16.0052 10.6672C16.2807 10.398 16.4995 10.0765 16.649 9.72156C16.7984 9.36659 16.8754 8.98534 16.8754 8.6002C16.8754 8.21507 16.7984 7.83381 16.649 7.47885C16.4995 7.12389 16.2807 6.80237 16.0052 6.5332L15.3682 5.9112L15.3792 5.0212C15.3838 4.63595 15.3112 4.25368 15.1659 3.89686C15.0206 3.54005 14.8054 3.21589 14.5329 2.94346C14.2605 2.67103 13.9363 2.45582 13.5795 2.31049C13.2227 2.16516 12.8404 2.09264 12.4552 2.0972L11.5652 2.1072L10.9432 1.4702ZM11.2302 7.4542L8.23015 10.4542C8.1837 10.5008 8.12852 10.5377 8.06778 10.5629C8.00703 10.5881 7.94191 10.6011 7.87615 10.6011C7.81038 10.6011 7.74526 10.5881 7.68451 10.5629C7.62377 10.5377 7.56859 10.5008 7.52215 10.4542L6.02215 8.9542C5.97566 8.90771 5.93878 8.85253 5.91362 8.79179C5.88846 8.73105 5.87551 8.66595 5.87551 8.6002C5.87551 8.53446 5.88846 8.46936 5.91362 8.40862C5.93878 8.34788 5.97566 8.29269 6.02215 8.2462C6.06863 8.19971 6.12382 8.16284 6.18456 8.13768C6.2453 8.11252 6.3104 8.09957 6.37615 8.09957C6.44189 8.09957 6.50699 8.11252 6.56773 8.13768C6.62847 8.16284 6.68366 8.19971 6.73015 8.2462L7.87615 9.3932L10.5222 6.7462C10.616 6.65232 10.7434 6.59957 10.8762 6.59957C11.009 6.59957 11.1363 6.65232 11.2302 6.7462C11.3241 6.84009 11.3768 6.96743 11.3768 7.1002C11.3768 7.23298 11.3241 7.36032 11.2302 7.4542Z" fill="#1CA345"></path> </g> </g> <defs> <clipPath id="clip0_17_5719"> <rect width="16" height="16" fill="white" transform="translate(0.876953 0.600006)"></rect> </clipPath> </defs> </svg>',
                  }}
                />
              </div>
              <div className="specialty-tag">Dentist</div>
            </div>
            <div className="doctor-credentials">
              BDS, MDS - Oral &amp; Maxillofacial Surgery
            </div>
            <div className="doctor-stats">
              <div className="stat-item">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg id="123:2126" layer-name="like" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="like-icon" style="margin: 0; padding: 0; box-sizing: border-box"> <path d="M12.4874 16.875H9.63736C9.21736 16.875 8.30236 16.7475 7.81486 16.26L5.54236 14.505L6.23236 13.6125L8.55736 15.4125C8.74486 15.5925 9.21736 15.7425 9.63736 15.7425H12.4874C13.1624 15.7425 13.8899 15.2025 14.0399 14.595L15.8549 9.08248C15.9749 8.75248 15.9524 8.45248 15.7949 8.23498C15.6299 8.00248 15.3299 7.86748 14.9624 7.86748H11.9624C11.5724 7.86748 11.2124 7.70248 10.9649 7.41748C10.7099 7.12498 10.5974 6.73498 10.6574 6.32998L11.0324 3.92248C11.1224 3.50248 10.8374 3.02998 10.4324 2.89498C10.0649 2.75998 9.59236 2.95498 9.42736 3.19498L6.35236 7.76998L5.42236 7.14748L8.49736 2.57248C8.96986 1.86748 10.0049 1.52998 10.8149 1.83748C11.7524 2.14498 12.3524 3.17998 12.1424 4.13998L11.7749 6.50248C11.7674 6.55498 11.7674 6.62998 11.8199 6.68998C11.8574 6.72748 11.9099 6.74998 11.9699 6.74998H14.9699C15.7049 6.74998 16.3424 7.05748 16.7174 7.58998C17.0849 8.10748 17.1599 8.78998 16.9199 9.44998L15.1274 14.91C14.8499 15.9975 13.6949 16.875 12.4874 16.875Z" fill="#0E82FD"></path> <path d="M4.3125 16.05H3.5625C2.175 16.05 1.5 15.3975 1.5 14.0625V6.71248C1.5 5.37748 2.175 4.72498 3.5625 4.72498H4.3125C5.7 4.72498 6.375 5.37748 6.375 6.71248V14.0625C6.375 15.3975 5.7 16.05 4.3125 16.05ZM3.5625 5.84998C2.745 5.84998 2.625 6.04498 2.625 6.71248V14.0625C2.625 14.73 2.745 14.925 3.5625 14.925H4.3125C5.13 14.925 5.25 14.73 5.25 14.0625V6.71248C5.25 6.04498 5.13 5.84998 4.3125 5.84998H3.5625Z" fill="#0E82FD"></path> </svg>',
                    }}
                  />
                </div>
                <span>94% Recommended</span>
              </div>
              <div className="stat-item">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg id="123:2133" layer-name="hospital" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="hospital-icon" style="margin: 0; padding: 0; box-sizing: border-box"> <path d="M16.7773 17.3625H1.77734C1.46984 17.3625 1.21484 17.1075 1.21484 16.8C1.21484 16.4925 1.46984 16.2375 1.77734 16.2375H16.7773C17.0848 16.2375 17.3398 16.4925 17.3398 16.8C17.3398 17.1075 17.0848 17.3625 16.7773 17.3625Z" fill="#0E82FD"></path> <path d="M16.0273 17.3625H2.52734C2.21984 17.3625 1.96484 17.1075 1.96484 16.8V4.79999C1.96484 2.53499 3.26234 1.23749 5.52734 1.23749H13.0273C15.2923 1.23749 16.5898 2.53499 16.5898 4.79999V16.8C16.5898 17.1075 16.3348 17.3625 16.0273 17.3625ZM3.08984 16.2375H15.4648V4.79999C15.4648 3.13499 14.6923 2.36249 13.0273 2.36249H5.52734C3.86234 2.36249 3.08984 3.13499 3.08984 4.79999V16.2375Z" fill="#0E82FD"></path> <path d="M11.5273 17.3625H7.02734C6.71984 17.3625 6.46484 17.1075 6.46484 16.8V12.255C6.46484 11.5575 7.03485 10.9875 7.73235 10.9875H10.8298C11.5273 10.9875 12.0973 11.5575 12.0973 12.255V16.8C12.0898 17.1075 11.8348 17.3625 11.5273 17.3625ZM7.58984 16.2375H10.9648V12.255C10.9648 12.18 10.9048 12.1125 10.8223 12.1125H7.72484C7.64984 12.1125 7.58235 12.1725 7.58235 12.255V16.2375H7.58984Z" fill="#0E82FD"></path> <path d="M9.27734 9.11249C8.96984 9.11249 8.71484 8.85749 8.71484 8.54999V4.79999C8.71484 4.49249 8.96984 4.23749 9.27734 4.23749C9.58484 4.23749 9.83984 4.49249 9.83984 4.79999V8.54999C9.83984 8.85749 9.58484 9.11249 9.27734 9.11249Z" fill="#0E82FD"></path> <path d="M11.1523 7.23749H7.40234C7.09484 7.23749 6.83984 6.98249 6.83984 6.67499C6.83984 6.36749 7.09484 6.11249 7.40234 6.11249H11.1523C11.4598 6.11249 11.7148 6.36749 11.7148 6.67499C11.7148 6.98249 11.4598 7.23749 11.1523 7.23749Z" fill="#0E82FD"></path> </svg>',
                    }}
                  />
                </div>
                <span>Royal Prince Alfred Hospital</span>
              </div>
              <div className="stat-item">
                <div className="status-indicator" />
                <span>Accepting New Patients</span>
              </div>
            </div>
            <div className="doctor-rating">
              <div className="rating-stars">★★★★★</div>
              <span>5.0</span>
              <span>150 Reviews</span>
            </div>
          </div>
          <div className="doctor-actions">
            <div className="chat-button">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="I17:5757;3:991" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="chat-icon" style="margin: 0; padding: 0; box-sizing: border-box"> <g clip-path="url(#clip0_607_397)"> <path d="M11.7437 7.28684V8.27855C11.7437 10.1161 10.6937 10.9035 9.11865 10.9035H3.86865C2.29365 10.9035 1.24365 10.1161 1.24365 8.27855V5.12854C1.24365 3.29104 2.29365 2.50354 3.86865 2.50354H5.44365C5.36782 2.7252 5.32699 2.9702 5.32699 3.2327V5.50772C5.32699 6.07355 5.51365 6.55187 5.84615 6.88437C6.17865 7.21687 6.65699 7.40355 7.22282 7.40355V8.21439C7.22282 8.51189 7.56115 8.69268 7.81199 8.52934L9.49782 7.40355H11.0145C11.277 7.40355 11.522 7.36267 11.7437 7.28684Z" stroke="#0E82FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.9104 3.23239V5.5074C12.9104 6.37657 12.4671 7.02986 11.7438 7.28652C11.5221 7.36236 11.2771 7.40323 11.0146 7.40323H9.49798L7.81215 8.52903C7.56132 8.69236 7.22298 8.51158 7.22298 8.21408V7.40323C6.65715 7.40323 6.17882 7.21656 5.84632 6.88406C5.51382 6.55156 5.32715 6.07323 5.32715 5.5074V3.23239C5.32715 2.96989 5.36798 2.72489 5.44382 2.50322C5.70048 1.77989 6.35382 1.33655 7.22298 1.33655H11.0146C12.1521 1.33655 12.9104 2.09489 12.9104 3.23239Z" stroke="#0E82FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.39404 13.0035H8.59405" stroke="#0E82FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.49365 10.9034V13.0034" stroke="#0E82FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.8662 4.3992H10.8715" stroke="#0E82FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.23291 4.3992H9.23816" stroke="#0E82FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.59961 4.3992H7.60486" stroke="#0E82FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_607_397"> <rect width="15" height="14" fill="white" transform="translate(-0.422852 0.170044)"></rect> </clipPath> </defs> </svg>',
                  }}
                />
              </div>
              <span>Chat</span>
            </div>
            <div className="price-info">
              <span>Price : $100 - $200</span>
              <span className="session-text">for a Session</span>
            </div>
            <button className="book-button">Book Appointment</button>
          </div>
        </div>

        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === "bio" ? "active" : ""}`}
            onClick={() => handleTabClick("bio")}
          >
            Doctor Bio
          </button>
          <button
            className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => handleTabClick("experience")}
          >
            Experience
          </button>
          <button
            className={`tab-button ${activeTab === "speciality" ? "active" : ""}`}
            onClick={() => handleTabClick("speciality")}
          >
            Speciality
          </button>
          <button
            className={`tab-button ${activeTab === "availability" ? "active" : ""}`}
            onClick={() => handleTabClick("availability")}
          >
            Availability
          </button>
          <button
            className={`tab-button ${activeTab === "awards" ? "active" : ""}`}
            onClick={() => handleTabClick("awards")}
          >
            Awards
          </button>
          <button
            className={`tab-button ${activeTab === "review" ? "active" : ""}`}
            onClick={() => handleTabClick("review")}
          >
            Review
          </button>
        </div>

        {activeTab === "bio" && (
          <div className="tab-content">
            <h2 className="section-title">Doctor Bio</h2>
            <p className="section-text">
              "Highly motivated and experienced doctor with a passion for
              providing excellent care to patients. Experienced in a wide
              variety of medical settings, with particular expertise in
              diagnostics, primary care and emergency medicine. Skilled in using
              the latest technology to streamline patient care. Committed to
              delivering compassionate, personalized care to each and every
              patient."
            </p>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="tab-content">
            <h2 className="section-title">Practice Experience</h2>
            <div className="experience-card">
              <div className="hospital-logo">
                <img
                  src={hospital2Logo}
                  alt="Hospital Logo"
                  className="hospital-logo-img"
                />
              </div>
              <div className="experience-details">
                <h3 className="experience-title">
                  Cambridge University Hospital, NHS Foundation Trust Cambridge
                </h3>
                <div className="experience-tags">
                  <span>ENT</span>
                  <span>Cambridge</span>
                </div>
                <div className="experience-duration">
                  <span>Dec 2020 - Jan 2022</span>
                  <span>2 Years 2 months</span>
                </div>
                <p className="experience-description">
                  Experienced in a wide variety of medical settings, with
                  particular expertise in diagnostics, primary care and
                  emergency medicine.
                </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="hospital-logo">
                <img
                  src={hospitalLogo}
                  alt="Hospital Logo"
                  className="hospital-logo-img"
                />
              </div>
              <div className="experience-details">
                <h3 className="experience-title">
                  Mayo Clinic, Department of Dentistry
                </h3>
                <div className="experience-tags">
                  <span>Dentistry</span>
                  <span>Rochester, MN</span>
                </div>
                <div className="experience-duration">
                  <span>Jan 2018 - Nov 2020</span>
                  <span>2 Years 10 months</span>
                </div>
                <p className="experience-description">
                  Led a team of dental specialists focusing on maxillofacial
                  surgery and complex dental procedures. Implemented new
                  treatment protocols that improved patient recovery time by
                  30%.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "speciality" && (
          <div className="tab-content">
            <h2 className="section-title">Speciality</h2>
            <div className="speciality-tags">
              <span className="speciality-tag-item">
                Orthopedic Consultation
              </span>
              <span className="speciality-tag-item">Delivery Blocks</span>
              <span className="speciality-tag-item">Ultrasound Injection</span>
              <span className="speciality-tag-item">Tooth Bleaching</span>
              <span className="speciality-tag-item">Cosmetic</span>
            </div>
          </div>
        )}

        {activeTab === "availability" && (
          <div className="tab-content">
            <h2 className="section-title">Availability</h2>
            <div className="availability-slots">
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
              <div className="availability-slot">
                <h3 className="slot-date">Wed Feb 2024</h3>
                <p className="slot-time">01:00 - 02:00 PM</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "awards" && (
          <div className="tab-content">
            <h2 className="section-title">Awards</h2>
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-icon" />
                <h3 className="award-title">Award Name (2021)</h3>
                <p className="award-description">
                  evidence based (Dietitians, Physiotherapist, Occupational
                  therapist and Clinical)
                </p>
              </div>
              <div className="award-card">
                <div className="award-icon" />
                <h3 className="award-title">Award Name (2022)</h3>
                <p className="award-description">
                  evidence based (Dietitians, Physiotherapist, Occupational
                  therapist and Clinical)
                </p>
              </div>
              <div className="award-card">
                <div className="award-icon" />
                <h3 className="award-title">Award Name (2023)</h3>
                <p className="award-description">
                  evidence based (Dietitians, Physiotherapist, Occupational
                  therapist and Clinical)
                </p>
              </div>
              <div className="award-card">
                <div className="award-icon" />
                <h3 className="award-title">Award Name (2024)</h3>
                <p className="award-description">
                  evidence based (Dietitians, Physiotherapist, Occupational
                  therapist and Clinical)
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "review" && (
          <div className="tab-content">
            <h2 className="section-title">Reviews (200)</h2>
            <div className="review-card">
              <div className="reviewer-avatar">
                <i className="ti ti-user"></i>
              </div>
              <div className="review-content">
                <div className="reviewer-name">kadajsalamander</div>
                <div className="review-rating">★★★★★</div>
                <div className="review-meta">5.0 | 2 days ago</div>
                <p className="review-text">
                  Dr. Adian is an exceptional dentist. His attention to detail
                  and gentle approach made my dental procedure much less
                  stressful than anticipated. Highly recommend!
                </p>
              </div>
            </div>

            <div className="review-card">
              <div className="reviewer-avatar">
                <i className="ti ti-user"></i>
              </div>
              <div className="review-content">
                <div className="reviewer-name">JohnDoe42</div>
                <div className="review-rating">★★★★★</div>
                <div className="review-meta">5.0 | 1 week ago</div>
                <p className="review-text">
                  I've been seeing Dr. Martin for over a year now. His expertise
                  in maxillofacial surgery is unmatched. The staff is also very
                  friendly and professional.
                </p>
              </div>
            </div>

            <div className="review-card">
              <div className="reviewer-avatar">
                <i className="ti ti-user"></i>
              </div>
              <div className="review-content">
                <div className="reviewer-name">HealthySmile23</div>
                <div className="review-rating">★★★★☆</div>
                <div className="review-meta">4.0 | 3 weeks ago</div>
                <p className="review-text">
                  Great experience overall. Dr. Adian explained everything
                  thoroughly before the procedure. The only reason for 4 stars
                  is the wait time was a bit longer than expected.
                </p>
              </div>
            </div>

            <button className="load-more-button">Load More Reviews</button>
          </div>
        )}
      </div>

      <div className="profile-footer">
        Copyright © 2025 Curely. All Rights Reserved
      </div>
    </div>
  );
};

export default DoctorProfile;
