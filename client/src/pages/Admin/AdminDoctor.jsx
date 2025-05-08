import * as React from "react";
import styles from"../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"
import AdminDashboard from "../../Components/AdminDashboard"
import { useState } from "react";

function AdminDoctor() {
  const [filter, setFilter] = useState("all"); 
  const [isOpen, setIsOpen] = useState(false);
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
      doctorName: "Prashna Shrestha",
      date: "11 Nov 2025",
      time: "10.00 AM",
      email:"doctor@gmail.com",
      Speciality: "Pediatrics",
      doctorImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&",
      status: "pending",
      phone: "9876543210",
      address: "Balkhu",
      experience:"5+ years",
      timeslot:"11:30 AM - 6:00 PM",
      fee:"$400",
    },
    {
        id: 2,
        doctorName: "Salina Shrestha",
        date: "11 Nov 2025",
        time: "10.00 AM",
        email:"doctor@gmail.com",
        Speciality: "Pediatrics",
        doctorImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&",
        status: "all",
        phone: "9876543210",
        address: "Balkhu",
        experience:"5+ years",
        timeslot:"11:30 AM - 6:00 PM",
        fee:"$400",
      }
  ];
  const filteredAppointments = appointments.filter(app => {
    if (filter === "all") {
      return app.status === "all";
    }
    return app.status === filter;
  });
  return (
    <>
      <Nav/>
      <div className={styles.div}>
        <AdminDashboard/>
        <div className={styles.div12}>
          
            <div className={styles.div21}>
            <div className={styles.div22}>
                <span className={styles.span13}>Appointments</span>

                <div className={styles.main}>
                    {/* Left side: Upcoming, Today, All */}
                    <div className={styles.buttonContainer}>
                    
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
                        <div className={filter === "pending" ? styles.div24 : styles.div23}>
                            <button
                            onClick={() => setFilter("pending")}
                            style={{
                                all: "unset",
                                cursor: "pointer"
                            }}
                            >
                            Pending
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
                <div className={styles.div30}>Doctor Name</div>
                <div className={styles.div31}>Appt Date</div>
                <div className={styles.div32}>Email</div>
                <div className={styles.div33}>Specialty</div>
              </div>


              <div className={styles.div35}>
              {filteredAppointments.map((app) => (
               <div key={app.id} className={styles.div36}>
                  <div className={styles.div37}>
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
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
                    <img src={app.doctorImg} alt="Doctor" className={styles.patientImg} />
                    <span>{app.doctorName}</span>
                  </div>
                  <div className={styles.div38}>
                    <span>{app.date}</span>
                    <span className={styles.span14}>{app.time}</span>
                  </div>
                  <div className={styles.div39}>{app.email}</div>
                  <div className={styles.div40}>{app.Speciality}</div>
                  <div onClick={() => openPopup(app)} className={styles.div42}>
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
              <h2 className={styles.title}>Doctor Details</h2>
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
                <p className={styles.detailValue}>{selectedAppointment.doctorName}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Email:</h3>
                <div className={styles.email}>
                  <span className={styles.upcoming}>
                    {selectedAppointment.email}</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Speciality:</h3>
                <p className={styles.detailValue}>{selectedAppointment.Speciality}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Phone Number:</h3>
                <p className={styles.detailValue}>{selectedAppointment.phone}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Address:</h3>
                <p className={styles.detailValue}>{selectedAppointment.address}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Years of experience:</h3>
                <p className={styles.detailValue}>{selectedAppointment.experience}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Fee per Consultation:</h3>
                <p className={styles.detailValue}>{selectedAppointment.fee}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Upcoming appointment:</h3>
                <p className={styles.detailValue}>{selectedAppointment.date}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Available Time slot:</h3>
                <p className={styles.detailValue}>{selectedAppointment.timeslot}</p>
              </div>
              <div className={styles.detailItem}>
                    <h3 className={styles.detailLabel}>Note:</h3>
                    <p className={styles.detailValue}>{selectedAppointment.note}</p>
               </div>
              
              <div className={styles.detailItem}>
                  <h3 className={styles.detailLabel}>Certificate:</h3>
                  <p className={styles.detailValue}>{selectedAppointment.note}</p>
                  <button className={styles.ViewCertificate} onClick={() => setIsOpen(true)}
                    alt="Certificate">
                    <img src="https://i.imgur.com/4hf6wTK.png" className={styles.certificateIcon}/>
                      View Certificate
                    </button>
                  {/* <img
                    src="https://i.imgur.com/TnZQfeh.png"
                    className={styles.ViewCertificate}
                    onClick={() => setIsOpen(true)}
                    alt="Certificate"
                  /> */}
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
          {isOpen && (
                  <div className={styles.overlay} onClick={() => setIsOpen(false)}>
                    <img
                      src="https://i.imgur.com/eewyPia.png" // replace with your actual overlay image
                      className={styles.overlayImage}
                      alt="Full Certificate"
                    />
                  </div>
                )}
        </div>
        
      )}

    </>
    
  );
}

export default AdminDoctor;
