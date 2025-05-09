import React from "react";
import "../../styles/AdminDashboard.css";
import schedule from "../../assets/Schedule.jpg";
import patient from "../../assets/patients.png";
import bed from "../../assets/Hospitalbed.svg";
import viewIcon from "../../assets/view.svg";
import doctor from "../../assets/Doctors.svg"

const doctors = [
  { name: "Dr. Richard Wilson", specialty: "Cardiologist" },
  { name: "Dr. Jane Doe", specialty: "Neurologist" },
  { name: "Dr. Emily Clark", specialty: "Pediatrician" },
  { name: "Dr. Sarah Lee", specialty: "Orthopedist" },
];

const patients = [
  {
    name: "Richard Wilson",
    date: "11 Nov 2025 10.00 AM",
    email: "richardwilson@gmail.com",
  },
  { name: "John Doe", date: "12 Nov 2025 9.00 AM", email: "johndoe@gmail.com" },
  {
    name: "Emily Clark",
    date: "13 Nov 2025 11.00 AM",
    email: "emilyclark@gmail.com",
  },
  {
    name: "Sarah Lee",
    date: "14 Nov 2025 2.00 PM",
    email: "sarahlee@gmail.com",
  },
];

const appointments = [
  {
    patient: "Richard Wilson",
    date: "11 Nov 2025 10.00 AM",
    specialty: "Pediatrics",
    amount: "$150",
    doctor: "Dr. Richard Wilson",
  },
  {
    patient: "John Doe",
    date: "12 Nov 2025 9.00 AM",
    specialty: "Neurology",
    amount: "$200",
    doctor: "Dr. Jane Doe",
  },
  {
    patient: "Emily Clark",
    date: "13 Nov 2025 11.00 AM",
    specialty: "Cardiology",
    amount: "$180",
    doctor: "Dr. Emily Clark",
  },
  {
    patient: "Sarah Lee",
    date: "14 Nov 2025 2.00 PM",
    specialty: "Orthopedics",
    amount: "$220",
    doctor: "Dr. Sarah Lee",
  },
];

export default function AdminDashboard() {
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
                    <b>12</b>
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
                    <b>23</b>
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
                    <b>12</b>
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
                    {doctors.map((doc, idx) => (
                      <tr key={idx}>
                        <td>
                          <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="Doctor"
                            className="profile-thumb"
                          />
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
                          <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="Patient"
                            className="profile-thumb"
                          />
                          {pat.name}
                        </td>
                        <td>
                          <a href="#" className="appt-link">
                            {pat.date}
                          </a>
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
                        <img
                          src="https://randomuser.me/api/portraits/men/45.jpg"
                          alt="Patient"
                          className="profile-thumb"
                        />
                        {appt.patient}
                      </td>
                      <td>
                        <a href="#" className="appt-link">
                          {appt.date}
                        </a>
                      </td>
                      <td>{appt.specialty}</td>
                      <td>{appt.amount}</td>
                      <td>
                        <img
                          src="https://randomuser.me/api/portraits/men/45.jpg"
                          alt="Doctor"
                          className="profile-thumb"
                        />
                        {appt.doctor}
                      </td>
                      <td>
                        <button
                          className="btn-view action-button"
                        >
                          <img
                            src={viewIcon}
                            alt="View"
                            className="action-icon"
                          />
                          View
                          {/* <span className="action-text">View</span> */}
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
    </>
  );
}
