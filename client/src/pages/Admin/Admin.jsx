import React from "react";
import "../../styles/AdminDashboard.css";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import dashboardImage from "../../assets/dashboard.png";
import appointmentsImage from "../../assets/appointments.png";
import patientsImage from "../../assets/patients.png";
import specialitiesImage from "../../assets/specialities.png";
import settingsIcon from "../../assets/settings.svg?url";
import logoutIcon from "../../assets/logout.svg?url";
import doctorImage from "../../assets/doctor.png";


const doctors = [
  { name: "Dr. Richard Wilson", specialty: "Cardiologist" },
  { name: "Dr. Jane Doe", specialty: "Neurologist" },
  { name: "Dr. Emily Clark", specialty: "Pediatrician" },
  { name: "Dr. Sarah Lee", specialty: "Orthopedist" },
];

const patients = [
  { name: "Richard Wilson", date: "11 Nov 2025 10.00 AM", email: "richardwilson@gmail.com" },
  { name: "John Doe", date: "12 Nov 2025 9.00 AM", email: "johndoe@gmail.com" },
  { name: "Emily Clark", date: "13 Nov 2025 11.00 AM", email: "emilyclark@gmail.com" },
  { name: "Sarah Lee", date: "14 Nov 2025 2.00 PM", email: "sarahlee@gmail.com" },
];

const appointments = [
  { patient: "Richard Wilson", date: "11 Nov 2025 10.00 AM", specialty: "Pediatrics", amount: "$150", doctor: "Dr. Richard Wilson" },
  { patient: "John Doe", date: "12 Nov 2025 9.00 AM", specialty: "Neurology", amount: "$200", doctor: "Dr. Jane Doe" },
  { patient: "Emily Clark", date: "13 Nov 2025 11.00 AM", specialty: "Cardiology", amount: "$180", doctor: "Dr. Emily Clark" },
  { patient: "Sarah Lee", date: "14 Nov 2025 2.00 PM", specialty: "Orthopedics", amount: "$220", doctor: "Dr. Sarah Lee" },
];

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Nav />
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="profile-img" />
          <div className="profile-name">Rajesh Maharjan</div>
          <nav>
            <ul>
              <li className="active">
                <img src={dashboardImage} alt="Dashboard" className="sidebar-icon" />
                Dashboard
              </li>
              <li>
                <img src={appointmentsImage} alt="Appointments" className="sidebar-icon" />
                Appointments
              </li>
              <li>
                <img src={doctorImage} alt="Doctors" className="sidebar-icon" />
                Doctors
              </li>
              <li>
                <img src={patientsImage} alt="Patients" className="sidebar-icon" />
                Patients
              </li>
              <li>
                <img src={specialitiesImage} alt="Specialties" className="sidebar-icon" />
                Specialties
              </li>
              <li>
                <img src={settingsIcon} alt="Profile Settings" className="sidebar-icon" />
                Profile Settings
              </li>
            </ul>
          </nav>
          <div className="logout">
            <img src={logoutIcon} alt="Logout" className="sidebar-icon" /> Logout
          </div>
        </aside>

        {/* Main Content */}
        <div className="main-content">
          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="stats-card">
              <div className="icon">
                <img src={doctorImage} alt="Doctor Icon" />
              </div>
              <div className="count">1500</div>
              <div className="label">Doctors<br />Till Today</div>
            </div>
            <div className="stats-card">
              <div className="icon">
                <img src={patientsImage} alt="Patients Icon" />
              </div>
              <div className="count">160</div>
              <div className="label">Patients<br />Till Today</div>
            </div>
            <div className="stats-card">
              <div className="icon">
                <img src={appointmentsImage} alt="Appointments Icon" />
              </div>
              <div className="count">85</div>
              <div className="label">Appointments<br />Till Today</div>
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
                  {doctors.map((doc, idx) => (
                    <tr key={idx}>
                      <td>
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Doctor" className="profile-thumb" />
                        {doc.name}
                      </td>
                      <td>{doc.specialty}</td>
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
                    <th>Appt Date</th>
                    <th>Email Address</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((pat, idx) => (
                    <tr key={idx}>
                      <td>
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Patient" className="profile-thumb" />
                        {pat.name}
                      </td>
                      <td>
                        <a href="#" className="appt-link">{pat.date}</a>
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
            <h3>Appointments</h3>
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
                {appointments.map((appt, idx) => (
                  <tr key={idx}>
                    <td>
                      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Patient" className="profile-thumb" />
                      {appt.patient}
                    </td>
                    <td>
                      <a href="#" className="appt-link">{appt.date}</a>
                    </td>
                    <td>{appt.specialty}</td>
                    <td>{appt.amount}</td>
                    <td>
                      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Doctor" className="profile-thumb" />
                      {appt.doctor}
                    </td>
                    <td>
                      <button className="view-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
