import * as React from "react";
import styles from"../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav"
import { useState } from "react";

function AdminAppointment() {
  const [filter, setFilter] = useState("upcoming"); 
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
      department: "Pediatrics",
      amount: "$150",
      doctorName: "Dr. Prashna Wilson",
      patientImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&",
      doctorImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&",
      status: "today",
    },
    {
      id: 1,
      patientName: "Richard Wilson",
      date: "11 Nov 2025",
      time: "10.00 AM",
      department: "Pediatrics",
      amount: "$150",
      doctorName: "Dr. Richard Wilson",
      patientImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&",
      doctorImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&",
      status: "upcoming",
    }
  ];

  const filteredAppointments = appointments.filter(app => {
    if (filter === "all") {
      return app.status === "today" || app.status === "upcoming";
    }
    return app.status === filter;
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav/>
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0e229955c26d5b78b5c92b36ddb1e056cad835?apiKey=262e07c0c4304fc58fb24602708984bc&"
              altText="Profile Image"
              className={styles.profileImg}
            />
            <span className={styles.span}>Rajesh Maharjan</span>
          </div>
          <div className={styles.div4}>
            <div className={styles.div5}>
              <span className={styles.span2}> </span>
              <span>Dashboard</span>
            </div>
            <div className={styles.div6}>
              <span className={styles.span3}> </span>
              <span>Appointments</span>
            </div>
            <div className={styles.div7}>
              <span className={styles.span4}></span>
              <span>Doctors</span>
            </div>
            <div className={styles.div8}>
              <span className={styles.span5}></span>
              <span>Patients</span>
            </div>
            <div className={styles.div9}>
              <span className={styles.span6}></span>
              <span>Specialties</span>
            </div>
            <div className={styles.div10}>
              <span className={styles.span7}></span>
              <span>Profile Settings</span>
            </div>
            <div className={styles.div11}>
              <span className={styles.span8}></span>
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className={styles.div12}>
          
          <div className={styles.div21}>
          <div className={styles.div22}>
  <span className={styles.span13}>Appointments</span>

  <div className={styles.main}>
    {/* Left side: Upcoming, Today, All */}
    <div className={styles.buttonContainer}>
      
    <div className={filter === "upcoming" ? styles.div24 : styles.div23}>
        <button
          onClick={() => setFilter("upcoming")}
          style={{
            all: "unset",
            cursor: "pointer"
          }}
        >
          Upcoming
        </button>
      </div>
      <div className={filter === "today" ? styles.div24 : styles.div23}>
        <button
          onClick={() => setFilter("today")}
          style={{
            all: "unset",
            cursor: "pointer"
          }}
        >
          Today 
        </button>
      </div>

      <div className={filter === "all" ? styles.div24 : styles.div23}>
        <button
          onClick={() => setFilter("all")}
          style={{
            all: "unset",
            cursor: "pointer"
          }}
        >
          All
        </button>
      </div>
    </div>

    {/* Right side: Input and icon */}
    <div className={styles.div27}>
      <input type="text" placeholder="Enter name" className={styles.input} />
      <img
        src="https://i.imgur.com/avKpuBI.png"
        className={styles.search1}
        alt="Search"
      />
    </div>
  </div>
</div>

            <div className={styles.div28}>
              <div className={styles.div29}>
                <div className={styles.div30}>Patient Name</div>
                <div className={styles.div31}>Appt Date</div>
                <div className={styles.div32}>Specialty</div>
                <div className={styles.div33}>Amount</div>
                <div className={styles.div34}>Doctor Name</div>
              </div>
              <div className={styles.div35}>
              {filteredAppointments.map((app) => (
               <div key={app.id} className={styles.div36}>
                  <div className={styles.div37}>
                    <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                    <span>{app.patientName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.department}</div>
                  <div className={styles.div40}>{app.amount}</div>
                  <div className={styles.div41}>
                    <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div onClick={() => openPopup(app)} className={styles.div42}>
                    <div className={styles.div43}>
                      <span className={styles.span15}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
              ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <span className={styles.span15}></span>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredAppointments.map((app) => (
                  <div key={app.id} className={styles.div36}>
                    <div className={styles.div37}>
                      <img src={app.patientImg} alt="Patient" className={styles.patientImg} />
                      <span>{app.patientName}</span>
                    </div>
                    <div className={styles.div38}>
                      <span>{app.date}</span>
                      <span className={styles.span14}>{app.time}</span>
                    </div>
                    <div className={styles.div39}>{app.department}</div>
                    <div className={styles.div40}>{app.amount}</div>
                    <div className={styles.div41}>
                      <img src={app.doctorImg} alt="Doctor" className={styles.doctorImg} />
                      <span>{app.doctorName}</span>
                    </div>
                    <div className={styles.div42}>
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
          <div className={styles.div148}>
            Copyright © 2025 Curely. All Rights Reserved
          </div>
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
                <h3 className={styles.detailLabel}>Status:</h3>
                <div className={styles.appointmentStatus}>
                  <div className={styles.calendar} />
                  <span className={styles.upcoming}>
                  <img src="https://i.imgur.com/2O7reDE.png" className={styles.calendarIcon}/>
                    {selectedAppointment.status}</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Time:</h3>
                <p className={styles.detailValue}>{selectedAppointment.time}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Date:</h3>
                <p className={styles.detailValue}>{selectedAppointment.date}</p>
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
                <h3 className={styles.detailLabel}>Doctor:</h3>
                <p className={styles.detailValue}>{selectedAppointment.doctorName}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Specialty:</h3>
                <p className={styles.detailValue}>{selectedAppointment.department}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Note:</h3>
                <p className={styles.detailValue}>{selectedAppointment.note}</p>
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

export default AdminAppointment;
