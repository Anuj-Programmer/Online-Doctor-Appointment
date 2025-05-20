import * as React from "react";
import styles from "../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import AdminDashboard from "../../Components/AdminDashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import viewIcon from "../../assets/view.svg";

function AdminAppointment() {
  const [filter, setFilter] = useState("upcoming");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const capitalizeFirstLetter = (string) => {
    return (
      string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase() || ""
    );
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError('Please login to view appointments');
          setLoading(false);
          return;
        }

        const res = await axios.get("/api/v1/admin/appointments", {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (res.data.success) {
          const fetchedAppointments = res.data.data.map((app) => ({
            id: app._id,
            patientName: app.userInfo?.name || "Unknown",
            date: new Date(app.date).toLocaleDateString(),
            time: app.timeSlot
              ? `${app.timeSlot.startTime} - ${app.timeSlot.endTime}`
              : "N/A",
            department: app.doctorInfo?.specialization || "N/A",
            amount: app.fee ? `Rs${app.fee}` : "N/A",
            doctorName: app.doctorInfo
              ? `${app.doctorInfo.firstName} ${app.doctorInfo.lastName}`
              : "Unknown",
            patientImg: app.userInfo?.photo || "https://randomuser.me/api/portraits/men/45.jpg",
            doctorImg: app.doctorInfo?.profile || "https://randomuser.me/api/portraits/men/45.jpg",
            status: app.status || "upcoming",
            email: app.userInfo?.email || "",
            phone: app.userInfo?.phone || "",
            note: app.note || "",
          }));
          setAppointments(fetchedAppointments);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const openPopup = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedAppointment(null);
  };

  const filteredAppointments = appointments.filter((app) => {
    const appointmentDate = new Date(app.date);
    const today = new Date();
    
    // Date filtering
    let matchesDate = true;
    if (filter === "upcoming") {
      matchesDate = appointmentDate > today;
    } else if (filter === "today") {
      matchesDate = appointmentDate.toDateString() === today.toDateString();
    }
    
    // Search filtering
    const matchesSearch = searchQuery === "" || 
      app.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.status.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDate && matchesSearch;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className={styles.div}>
        <div className={styles.div12}>
          <div className={styles.div21}>
            <div className={styles.div22}>
              <span className={styles.span13}>Appointments</span>
              <div className={styles.main}>
                <div className={styles.buttonContainer}>
                  {["upcoming", "today", "all"].map((type) => (
                    <div
                      key={type}
                      className={filter === type ? styles.div24 : styles.div23}
                    >
                      <button
                        onClick={() => setFilter(type)}
                        style={{ all: "unset", cursor: "pointer" }}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    </div>
                  ))}
                </div>

                <div className={styles.div27}>
                  <input
                    type="text"
                    placeholder="Search appointments"
                    className={styles.input}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <img
                    src="https://i.imgur.com/avKpuBI.png"
                    className={styles.search1}
                    alt="Search"
                  />
                </div>
              </div>
            </div>

            <div className="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Appt Date</th>
                    <th>Time Slot</th>
                    <th>Specialty</th>
                    <th>Amount</th>
                    <th>Doctor Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((app) => (
                    <tr key={app.id}>
                      <td>
                        {/* <img
                          src={app.patientImg}
                          alt="Patient"
                          className="profile-thumb"
                        /> */}
                        {app.patientName}
                      </td>
                      <td>{app.date}</td>
                      <td>{app.time}</td>
                      <td>{capitalizeFirstLetter(app.department)}</td>
                      <td>{app.amount}</td>
                      <td>
                        {/* <img
                          src={app.doctorImg}
                          alt="Doctor"
                          className="profile-thumb"
                        /> */}
                        {app.doctorName}
                      </td>
                      <td>
                        <span className={`status-badge ${app.status}`}>
                          {app.status}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn-view action-button"
                          onClick={() => openPopup(app)}
                        >
                          <img src={viewIcon} alt="View" className="action-icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showPopup && selectedAppointment && (
        <div className={styles.overlay}>
          <div className={styles.appointmentDetailsPopup}>
            <header className={styles.header}>
              <h2 className={styles.title}>Appointment Details</h2>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01fceeb1d9943be9be51c777194413f5e949cc9f"
                className={styles.closeIcon}
                alt="Close"
                onClick={closePopup}
              />
            </header>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Name:</h3>
                <p className={styles.detailValue}>
                  {selectedAppointment.patientName}
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Status:</h3>
                <p className={styles.detailValue}>{selectedAppointment.status}</p>
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
                <p className={styles.detailValue}>
                  {selectedAppointment.doctorName}
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Department:</h3>
                <p className={styles.detailValue}>
                  {selectedAppointment.department}
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Amount:</h3>
                <p className={styles.detailValue}>{selectedAppointment.amount}</p>
              </div>

              {selectedAppointment.note && (
                <div className={styles.detailItem}>
                  <h3 className={styles.detailLabel}>Note:</h3>
                  <p className={styles.detailValue}>{selectedAppointment.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminAppointment;
