import * as React from "react";
import styles from"../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"
import AdminDashboard from "../../Components/AdminDashboard"
import { useState, useEffect } from "react";
import axios from "axios";
import viewIcon from "../../assets/view.svg";
import toast from 'react-hot-toast';

function AdminPatients() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('Please login to view patients');
        setLoading(false);
        return;
      }

      const response = await axios.get('/api/v1/admin/get-all-user', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (response.data.success) {
        setPatients(response.data.data);
      }
    } catch (err) {
      setError('Failed to fetch patients data');
      console.error('Error fetching patients:', err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  const openPopup = (patient) => {
    setSelectedPatient(patient);
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
    setSelectedPatient(null);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error('Please login to perform this action');
        return;
      }

      const response = await axios.delete(`/api/v1/admin/patients/${selectedPatient._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (response.data.success) {
        // Remove the deleted patient from the local state
        setPatients(patients.filter(patient => patient._id !== selectedPatient._id));
        // Show success toast
        toast.success('Patient deleted successfully!');
        // Close both popups
        closePopup();
        setShowConfirmModal(false);
      } else {
        toast.error(response.data.message || 'Failed to delete patient');
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
      if (error.response?.status === 404) {
        toast.error('Patient not found');
      } else if (error.response?.status === 401) {
        toast.error('Please login to perform this action');
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        toast.error(error.response?.data?.message || 'Failed to delete patient');
      }
    }
  };

  const openConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const filteredPatients = patients.filter(patient => {
    const searchLower = searchQuery.toLowerCase();
    return (
      searchQuery === "" ||
      patient.name.toLowerCase().includes(searchLower) ||
      patient.email.toLowerCase().includes(searchLower) ||
      (patient.phoneNumber && patient.phoneNumber.toLowerCase().includes(searchLower)) ||
      (patient.address && patient.address.toLowerCase().includes(searchLower))
    );
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className={styles.div}>
        <div className={styles.div12}>
          <div className={styles.div21}>
            <div className={styles.div22}>
              <span className={styles.span13}>Patients</span>

              <div className={styles.main}>
                <div className={styles.div27}>
                  <input 
                    type="text" 
                    placeholder="Search patients" 
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
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient) => (
                    <tr key={patient._id}>
                      <td>
                        {/* <img
                          src={patient.profilePicture || "https://randomuser.me/api/portraits/men/45.jpg"}
                          alt="Patient"
                          className="profile-thumb"
                        /> */}
                        {patient.name}
                      </td>
                      <td>{patient.email}</td>
                      <td>{patient.phoneNumber || "N/A"}</td>
                      <td>{patient.address || "N/A"}</td>
                      <td>
                        <button 
                          className="btn-view action-button"
                          onClick={() => openPopup(patient)}
                        >
                          <img
                            src={viewIcon}
                            className="action-icon"
                            alt="View"
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

      {showPopup && selectedPatient && (
        <div className={styles.overlay}>
          <div className={styles.appointmentDetailsPopup}>
            <header className={styles.header}>
              <h2 className={styles.title}>Patient Details</h2>
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
                <p className={styles.detailValue}>{selectedPatient.name}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Email:</h3>
                <p className={styles.detailValue}>{selectedPatient.email}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Phone Number:</h3>
                <p className={styles.detailValue}>{selectedPatient.phoneNumber || "N/A"}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Address:</h3>
                <p className={styles.detailValue}>{selectedPatient.address || "N/A"}</p>
              </div>

              <div className={styles.actionSection}>
                <div className={styles.divider} />
                <h3 className={styles.detailLabel}>Action:</h3>
                <div className={styles.actionButtons}>
                  <button className={styles.deletebtn} onClick={openConfirmModal}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4cede4e078d0a6e0e855f8c61e7d6d9ae53501"
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

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className={styles.overlay}>
          <div className={styles.confirmModal}>
            <header className={styles.header}>
              <h2 className={styles.title}>Confirm Deletion</h2>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01fceeb1d9943be9be51c777194413f5e949cc9f"
                className={styles.closeIcon}
                alt="Close"
                onClick={closeConfirmModal}
              /> */}
            </header>
            <div className={styles.confirmContent}>
              <p>Are you sure you want to delete this patient?</p>
              <p className={styles.warningText}>This action cannot be undone.</p>
              <div className={styles.confirmButtons}>
                <button 
                  className={styles.cancelButton} 
                  onClick={closeConfirmModal}
                >
                  Cancel
                </button>
                <button 
                  className={styles.confirmButton} 
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminPatients;
