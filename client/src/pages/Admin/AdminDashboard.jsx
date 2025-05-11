import React, { useState, useEffect } from "react";
import "../../styles/AdminDashboard.css";
import styles from "../../Styles/AdminAppointment.module.css";
import schedule from "../../assets/Schedule.jpg";
import patient from "../../assets/patients.png";
import bed from "../../assets/Hospitalbed.svg";
import viewIcon from "../../assets/view.svg";
import doctor from "../../assets/Doctors.svg";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0
  });
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return (
      string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase() || ""
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError('Please login to view dashboard');
          setLoading(false);
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        };

        // Fetch all data in parallel
        const [doctorsRes, patientsRes, appointmentsRes] = await Promise.all([
          axios.get("/api/v1/admin/doctors", { headers }),
          axios.get("/api/v1/admin/patients", { headers }),
          axios.get("/api/v1/admin/appointments", { headers })
        ]);

        if (doctorsRes.data.success) {
          setDoctors(doctorsRes.data.data);
          setStats(prev => ({ ...prev, doctors: doctorsRes.data.data.length }));
        }

        if (patientsRes.data.success) {
          setPatients(patientsRes.data.data);
          setStats(prev => ({ ...prev, patients: patientsRes.data.data.length }));
        }

        if (appointmentsRes.data.success) {
          setAppointments(appointmentsRes.data.data);
          setStats(prev => ({ ...prev, appointments: appointmentsRes.data.data.length }));
        }

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openPopup = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedAppointment(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="admin-dashboard">
        <div className="dashboard-container">
          {/* Sidebar */}

          {/* Main Content */}
          <div className="main-content">
            {/* Stats Cards */}
            <div className="analyctics-dashboard">
              <div className="analytics-item">
                <div className="analyctics-img">
                  <img src={doctor} alt="" />
                </div>
                <div className="analytics-content">
                  <h6 className="analytics-name">Doctors</h6>
                  <p className="mb-0">
                    <b>{stats.doctors}</b>
                  </p>
                  <p className="mb-0">Till today</p>
                </div>
              </div>
              <div className="analytics-item">
                <div className="analyctics-img">
                  <img src={bed} alt="" />
                </div>
                <div className="analytics-content">
                  <h6 className="analytics-name">Patients</h6>
                  <p className="mb-0">
                    <b>{stats.patients}</b>
                  </p>
                  <p className="mb-0">Till today</p>
                </div>
              </div>
              <div className="analytics-item">
                <div className="analyctics-img">
                  <img src={schedule} alt="" />
                </div>
                <div className="analytics-content">
                  <h6 className="analytics-name">Appointments</h6>
                  <p className="mb-0">
                    <b>{stats.appointments}</b>
                  </p>
                  <p className="mb-0">Till today</p>
                </div>
              </div>
            </div>

            {/* Doctors & Patients List */}
            <div className="dashboard-tables">
              <div className="table-card">
                <h3>Doctors List</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Specialty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.slice(0, 4).map((doc) => (
                      <tr key={doc._id}>
                        <td>
                          <img
                            src={doc?.profile || "https://ui-avatars.com/api/?name=+&background=ccc&color=fff"}
                            alt="Doctor"
                            className="profile-thumb"
                          />
                          {`${doc.firstName} ${doc.lastName}`}
                        </td>
                        <td>{capitalizeFirstLetter(doc.specialization)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table-card">
                <h3>Patients List</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Email Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.slice(0, 5).map((pat) => (
                      <tr key={pat._id}>
                        <td>
                          {/* <img
                            src={pat.profilePicture || "https://randomuser.me/api/portraits/men/45.jpg"}
                            alt="Patient"
                            className="profile-thumb"
                          /> */}
                          {pat.name}
                        </td>
                        <td>{pat.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Appointments Table */}
            <div className="table-card appt-table">
              <h3>Recent Appointments</h3>
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Appt Date</th>
                    <th>Specialty</th>
                    <th>Amount</th>
                    <th>Doctor Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.slice(0, 4).map((appt) => (
                    <tr key={appt._id}>
                      <td>
                        {/* <img
                          src={appt.userId?.profilePicture || "https://randomuser.me/api/portraits/men/45.jpg"}
                          alt="Patient"
                          className="profile-thumb"
                        /> */}
                        {appt.userId?.name || "Unknown"}
                      </td>
                      <td>
                        <a href="#" className="appt-link">
                          {new Date(appt.date).toLocaleDateString()}
                        </a>
                      </td>
                      <td>{appt.doctorId?.specialization || "N/A"}</td>
                      <td>${appt.fee || "N/A"}</td>
                      <td>
                        {/* <img
                          src={appt.doctorId?.userId?.profilePicture || "https://randomuser.me/api/portraits/men/45.jpg"}
                          alt="Doctor"
                          className="profile-thumb"
                        /> */}
                        {appt.doctorId ? `${appt.doctorId.firstName} ${appt.doctorId.lastName}` : "Unknown"}
                      </td>
                      <td>
                        <button 
                          className="btn-view action-button"
                          onClick={() => openPopup(appt)}
                        >
                          <img
                            src={viewIcon}
                            alt="View"
                            className="action-icon"
                          />
                          View
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
                <h3 className={styles.detailLabel}>Patient Name:</h3>
                <p className={styles.detailValue}>{selectedAppointment.userId?.name || "Unknown"}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Doctor Name:</h3>
                <p className={styles.detailValue}>
                  {selectedAppointment.doctorId ? 
                    `${selectedAppointment.doctorId.firstName} ${selectedAppointment.doctorId.lastName}` : 
                    "Unknown"}
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Specialization:</h3>
                <p className={styles.detailValue}>{selectedAppointment.doctorId?.specialization || "N/A"}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Appointment Date:</h3>
                <p className={styles.detailValue}>{new Date(selectedAppointment.date).toLocaleDateString()}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Time Slot:</h3>
                <p className={styles.detailValue}>
                  {selectedAppointment.timeSlot ? 
                    `${selectedAppointment.timeSlot.startTime} - ${selectedAppointment.timeSlot.endTime}` : 
                    "N/A"}
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Fee:</h3>
                <p className={styles.detailValue}>${selectedAppointment.fee || "N/A"}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Status:</h3>
                <div className={styles.appointmentStatus}>
                  {/* <span className={styles.calendarIcon}>📅</span> */}
                  <span className={styles.upcoming}>{selectedAppointment.status || "Pending"}</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Contact Information:</h3>
                <p className={styles.detailValue}>
                  Email: {selectedAppointment.userId?.email || "N/A"}<br />
                  Phone: {selectedAppointment.userId?.phoneNumber || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
