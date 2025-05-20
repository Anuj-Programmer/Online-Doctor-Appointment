import * as React from "react";
import styles from"../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"
import AdminDashboard from "../../Components/AdminDashboard"
import { useState, useEffect } from "react";
import axios from "axios";
import viewIcon from "../../assets/view.svg";
import toast from 'react-hot-toast';

function AdminDoctor() {
  const [filter, setFilter] = useState("all"); 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const capitalizeFirstLetter = (string) => {
    return (
      string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase() || ""
    );
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('Please login to view doctors');
        setLoading(false);
        return;
      }

      const response = await axios.get('/api/v1/admin/doctors', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (err) {
      setError('Failed to fetch doctors data');
      console.error('Error fetching doctors:', err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
    setSelectedDoctor(null);
  };

  const openConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error('Please login to perform this action');
        return;
      }

      const response = await axios.delete(`/api/v1/admin/doctors/${selectedDoctor._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (response.data.success) {
        // Remove the deleted doctor from the local state
        setDoctors(doctors.filter(doctor => doctor._id !== selectedDoctor._id));
        // Show success toast
        toast.success('Doctor deleted successfully!');
        // Close both popups
        closePopup();
        setShowConfirmModal(false);
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
      if (error.response?.status === 404) {
        toast.error('Doctor not found');
      } else if (error.response?.status === 401) {
        toast.error('Please login to perform this action');
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        toast.error(error.response?.data?.message || 'Failed to delete doctor');
      }
    }
  };

  const handleStatusChange = async (doctorId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('Please login to perform this action');
        return;
      }

      const response = await axios.post('/api/v1/doctor/change-status', 
        { doctorId, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        }
      );

      if (response.data.success) {
        // Update the doctor's status in the local state
        setDoctors(doctors.map(doctor => 
          doctor._id === doctorId 
            ? { ...doctor, status: newStatus }
            : doctor
        ));
        // Show success toast
        toast.success(`Doctor ${newStatus} successfully!`);
        // Close the popup
        closePopup();
      }
    } catch (error) {
      console.error('Error changing doctor status:', error);
      toast.error('Failed to update doctor status');
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesFilter = filter === "all" || doctor.status === filter;
    const matchesSearch = searchQuery === "" || 
      `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.status.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className={styles.div}>
        <div className={styles.div12}>
          <div className={styles.div21}>
            <div className={styles.div22}>
              <span className={styles.span13}>Doctors</span>

              <div className={styles.main}>
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
                  <div className={filter === "approved" ? styles.div24 : styles.div23}>
                    <button
                      onClick={() => setFilter("approved")}
                      style={{
                        all: "unset",
                        cursor: "pointer"
                      }}
                    >
                      Approved
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

                <div className={styles.div27}>
                  <input 
                    type="text" 
                    placeholder="Search doctors" 
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
                    <th>Doctor Name</th>
                    <th>Specialization</th>
                    <th>Experience</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDoctors.map((doctor) => (
                    <tr key={doctor._id}>
                      <td>
                        <img 
                          src={doctor?.profile || "https://ui-avatars.com/api/?name=+&background=ccc&color=fff"} 
                          alt="Doctor" 
                          className="profile-thumb"
                        />
                        {`${doctor.firstName} ${doctor.lastName}`}
                      </td>
                      <td>{capitalizeFirstLetter(doctor.specialization)}</td>
                      <td>{`${doctor.experience} years`}</td>
                      <td>
                        <span className={`status-badge ${doctor.status.toLowerCase()}`}>
                          {doctor.status}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn-view action-button"
                          onClick={() => openPopup(doctor)}
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

      {showPopup && selectedDoctor && (
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
                <p className={styles.detailValue}>{`${selectedDoctor.firstName} ${selectedDoctor.lastName}`}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Phone Number:</h3>
                <p className={styles.detailValue}>{selectedDoctor.phoneNumber}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Address:</h3>
                <p className={styles.detailValue}>{selectedDoctor.address}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Specialization:</h3>
                <p className={styles.detailValue}>{selectedDoctor.specialization}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Experience:</h3>
                <p className={styles.detailValue}>{`${selectedDoctor.experience} years`}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Fee per Consultation:</h3>
                <p className={styles.detailValue}>{`Rs${selectedDoctor.fee}`}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Available Time Slots:</h3>
                <div className={styles.detailValue}>
                  {selectedDoctor.timeSlots.map((slot, index) => (
                    <p key={index}>{`${slot.startTime} - ${slot.endTime}`}</p>
                  ))}
                </div>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Status:</h3>
                <p className={styles.detailValue}>{selectedDoctor.status}</p>
              </div>

              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Certificate:</h3>
                <div className={styles.certificateContainer}>
                  {selectedDoctor.certificate ? (
                    <>
                      <img 
                        src={selectedDoctor.certificate} 
                        alt="Doctor's Certificate" 
                        className={styles.certificateImage}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder-certificate.png";
                          e.target.classList.add(styles.certificateError);
                        }}
                      />
                      <button 
                        className={styles.ViewCertificate}
                        onClick={() => setShowCertificateModal(true)}
                      >
                        {/* <img 
                          src={viewIcon} 
                          alt="Certificate Icon" 
                          className={styles.certificateIcon}  
                        />   */}
                        View Certificate
                      </button>
                    </>
                  ) : (
                    <div className={styles.noCertificate}>
                      <img 
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/no-certificate.png" 
                        alt="No Certificate" 
                        className={styles.noCertificateIcon}
                      />
                      <p>No certificate available</p>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.actionSection}>
                <div className={styles.divider} />
                <h3 className={styles.detailLabel}>Action:</h3>
                <div className={styles.actionButtons}>
                  {selectedDoctor.status === 'pending' ? (
                    <>
                      <button 
                        className={styles.approveButton} 
                        onClick={() => handleStatusChange(selectedDoctor._id, 'approved')}
                      >
                        {/* <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4cede4e078d0a6e0e855f8c61e7d6d9ae53501?placeholderIfAbsent=true&apiKey=262e07c0c4304fc58fb24602708984bc"
                          className={styles.actionIcon}
                          alt="Approve"
                        /> */}
                        <span className={styles.actionText}>Approve</span>
                      </button>
                      <button 
                        className={styles.rejectButton} 
                        onClick={() => handleStatusChange(selectedDoctor._id, 'rejected')}
                      >
                        {/* <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4cede4e078d0a6e0e855f8c61e7d6d9ae53501?placeholderIfAbsent=true&apiKey=262e07c0c4304fc58fb24602708984bc"
                          className={styles.actionIcon}
                          alt="Reject"
                        /> */}
                        <span className={styles.actionText}>Reject</span>
                      </button>
                    </>
                  ) : (
                    <button 
                      className={styles.deletebtn} 
                      onClick={openConfirmModal}
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4cede4e078d0a6e0e855f8c61e7d6d9ae53501?placeholderIfAbsent=true&apiKey=262e07c0c4304fc58fb24602708984bc"
                        className={styles.deleteIcon}
                        alt="Delete"
                      />
                      <span className={styles.deleteText}>Delete</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCertificateModal && selectedDoctor && (
        <div className={styles.overlay}>
          <div className={styles.certificateModal}>
            <header className={styles.certificateModalHeader}>
              <h2 className={styles.certificateModalTitle}>Doctor's Certificate</h2>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01fceeb1d9943be9be51c777194413f5e949cc9f?placeholderIfAbsent=true&apiKey=262e07c0c4304fc58fb24602708984bc"
                className={styles.closeIcon}
                alt="Close"
                onClick={() => setShowCertificateModal(false)}
              />
            </header>
            <div className={styles.certificateModalContent}>
              <img 
                src={selectedDoctor.certificate} 
                alt="Doctor's Certificate" 
                className={styles.certificateModalImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder-certificate.png";
                  e.target.classList.add(styles.certificateError);
                }}
              />
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
            </header>
            <div className={styles.confirmContent}>
              <p>Are you sure you want to delete this doctor?</p>
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

export default AdminDoctor;
