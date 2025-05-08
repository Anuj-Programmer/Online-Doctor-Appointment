import * as React from "react";
import styles from"../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"
import AdminDashboard from "../../Components/AdminDashboard"
import { useState } from "react";

function AdminPatients() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);


  const openPopup = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
    setSelectedAppointment(null);
  };

  
  const appointments = [
    {
      id: 1,
      patientName: "Prashna Shrestha",
      date: "11 Nov 2025",
      time: "10.00 AM",
      email: "patient@gmail.com",
      phone: "9876543210",
      patientImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&",
      
    }
  ];

  return (
    <>
      
      <Nav/>
      <div className={styles.div}>
        <AdminDashboard/>
        <div className={styles.div12}>
          
          <div className={styles.div21}>
          <div className={styles.div22}>
  <span className={styles.span13}>Patients</span>

</div>

            <div className={styles.div28}>
              <div className={styles.div29}>
                <div className={styles.div30}>Patient Name</div>
                <div className={styles.div31}>Appt Date</div>
                <div className={styles.div32}>Email address</div>
                <div className={styles.div33}>Phone number</div>
              </div>
              <div className={styles.div35}>
              {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img
                        src={app.patientImg}
                        alt="Patient"
                        className={styles.patientImg}
                      />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.email}</div>
                    <div className={styles.div40}>{app.phone}</div>
                    <div
                      onClick={() => openPopup(app)}
                      className={styles.div42}
                    >
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer/>
          {/* <div className={styles.div148}>
            Copyright © 2025 Curely. All Rights Reserved
          </div> */}
        </div>
      </div>
      {showPopup && selectedAppointment && (
        <div className={styles.overlay}>
          <div className={styles.appointmentDetailsPopup}>
            <header className={styles.header}>
              <h2 className={styles.title}>Appointment Details</h2>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01fceeb1d9943be9be51c777194413f5e949cc9f?placeholderIfAbsent=true&apiKey=262e07c0c4304fc58fb24602708984bc"
                className={styles.closeIcon}
                alt="Close"
                onClick={closePopup}
              />
            </header>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Name:</h3>
                <p className={styles.detailValue}>{selectedAppointment.patientName}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Email:</h3>
                <p className={styles.detailValue}>{selectedAppointment.email}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Phone No:</h3>
                <p className={styles.detailValue}>{selectedAppointment.phone}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Upcoming Appointment:</h3>
                <p className={styles.detailValue}>{selectedAppointment.date}</p>
              </div>


              <div className={styles.actionSection}>
                <div className={styles.divider} />
                <h3 className={styles.detailLabel}>Action:</h3>
                <div className={styles.actionButtons}>
                  <button className={styles.deleteButton} onClick={() => handleDelete(selectedAppointment.id)}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4cede4e078d0a6e0e855f8c61e7d6d9ae53501?placeholderIfAbsent=true&apiKey=262e07c0c4304fc58fb24602708984bc"
                      className={styles.deleteIcon}
                      alt="Delete"
                    />
                    <span className={styles.deleteText}>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
    
  );
}

export default AdminPatients;
