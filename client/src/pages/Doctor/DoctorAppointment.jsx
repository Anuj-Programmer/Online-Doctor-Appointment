import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import searchIcon from "../../assets/search.svg";
// import viewIcon from "../../assets/view.svg";
import acceptIcon from "../../assets/accept.svg";
import cancelIcon from "../../assets/cancel.svg";

function DoctorAppointment() {
  const { user } = useSelector((state) => state.user);
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('upcoming');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token || !user?._id) return;

        // First get the doctor's ID
        const doctorResponse = await axios.get('/api/v1/doctor/get-all-doctors', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (doctorResponse.data.success) {
          const doctor = doctorResponse.data.data.find(doc => doc.userId._id === user._id);
          if (doctor) {
            // Then fetch the doctor's appointments
            const appointmentsResponse = await axios.get(`/api/v1/doctor/get-doctor-appointments/${doctor._id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

            if (appointmentsResponse.data.success) {
              setAppointments(appointmentsResponse.data.data);
              filterAppointments(appointmentsResponse.data.data, activeFilter);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user?._id]);

  const filterAppointments = (appointmentsList, filter) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let filtered = [...appointmentsList];

    switch (filter) {
      case 'today':
        filtered = appointmentsList.filter(apt => {
          const aptDate = new Date(apt.date);
          aptDate.setHours(0, 0, 0, 0);
          return aptDate.getTime() === today.getTime();
        });
        break;
      case 'upcoming':
        filtered = appointmentsList.filter(apt => {
          const aptDate = new Date(apt.date);
          aptDate.setHours(0, 0, 0, 0);
          return aptDate.getTime() >= today.getTime() && apt.status === 'pending';
        });
        break;
      case 'all':
        // No filtering needed
        break;
      default:
        break;
    }

    setFilteredAppointments(filtered);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    filterAppointments(appointments, filter);
  };

//   const handleViewAppointment = (appointment) => {
//     // Implement view appointment logic
//     console.log('View appointment:', appointment);
//   };

  const handleAcceptAppointment = async (appointment) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        '/api/v1/doctor/update-appointment-status',
        { 
          appointmentId: appointment._id,
          status: 'approved'
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        // Update both appointments and filteredAppointments states
        const updatedAppointments = appointments.map(apt => 
          apt._id === appointment._id ? { ...apt, status: 'approved' } : apt
        );
        setAppointments(updatedAppointments);
        filterAppointments(updatedAppointments, activeFilter);
      }
    } catch (error) {
      console.error('Error accepting appointment:', error);
    }
  };

  const handleCancelAppointment = async (appointment) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        '/api/v1/doctor/update-appointment-status',
        { 
          appointmentId: appointment._id,
          status: 'cancelled'
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        // Update both appointments and filteredAppointments states
        const updatedAppointments = appointments.map(apt => 
          apt._id === appointment._id ? { ...apt, status: 'cancelled' } : apt
        );
        setAppointments(updatedAppointments);
        setFilteredAppointments(updatedAppointments.filter(apt => 
          apt._id !== appointment._id || apt.status === 'pending'
        ));
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading appointments...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
     <main className="doctor-main-content">
          <header className="doctor-content-header">
          <h1 className="doctor-page-title">Patient Appointments</h1>
            <div className="doctor-filter-tabs">
            <div 
              className={`doctor-filter-tab ${activeFilter === 'upcoming' ? 'active' : ''}`}
              onClick={() => handleFilterClick('upcoming')}
            >
              Upcoming
            </div>
            <div 
              className={`doctor-filter-tab ${activeFilter === 'today' ? 'active' : ''}`}
              onClick={() => handleFilterClick('today')}
            >
              Today
            </div>
            <div 
              className={`doctor-filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </div>
            </div>
            <div className="search-container-doctor">
              <input type="text" placeholder="Enter name" className="search-input-doctor" />
              <img src={searchIcon} alt="Search" className="search-icon-doctor" />
            </div>
          </header>
          <section className="appointments-table">
            <div className="table-header">
              <div className="header-patient">Patient Name</div>
              <div className="header-email">Email</div>
              <div className="header-date">Appt Date</div>
            <div className="header-time">Time Slot</div>
              <div className="header-amount">Amount</div>
            <div className="header-status">Status</div>
              {/* <div className="header-actions"></div> */}
            </div>
            <div className="table-body">
            {filteredAppointments.map((appointment) => (
              <div key={appointment._id} className="appointment-row">
                <div className="patient-info">
                  {/* <img
                    src={appointment.userInfo?.photo || "https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f"}
                    alt="Patient"
                    className="patient-image"
                  /> */}
                  <div className="patient-details">
                    <div className="patient-name">{appointment.userInfo?.name}</div>
                    {/* <div className="patient-email">{appointment.userInfo?.email}</div> */}
                  </div>
                 
                </div>
                <div className="patient-email">{appointment.userInfo?.email}</div>
                <div className="appointment-date">
                  <div className="date">{appointment.date}</div>
                </div>
                <div className="appointment-time">
                  <div className="time">{appointment.timeSlot.startTime} - {appointment.timeSlot.endTime}</div>
                </div>
                {/* <div className="appointment-purpose">{appointment.doctorInfo?.specialization}</div> */}
                <div className="appointment-amount">${appointment.fee}</div>
                <div className="appointment-status">
                  <span className={`status-badge ${appointment.status} user-status-badge `}>{appointment.status}</span>
                </div>
                <div className="appointment-actions">
                  {/* <button 
                    className="btn-view action-button"
                    onClick={() => handleViewAppointment(appointment)}
                  >
                    <img src={viewIcon} alt="View" className="action-icon" />
                    <span className="action-text">View</span> 
                  </button> */}
                  {appointment.status === 'pending' && (
                    <>
                      <button 
                        className="btn-accept action-button"
                        onClick={() => handleAcceptAppointment(appointment)}
                      >
                    <img src={acceptIcon} alt="Accept" className="action-icon" />
                    <span className="action-text">Accept</span>
                  </button>
                      <button 
                        className="btn-cancel action-button"
                        onClick={() => handleCancelAppointment(appointment)}
                      >
                    <img src={cancelIcon} alt="Cancel" className="action-icon" />
                    <span className="action-text ">Cancel</span>
                  </button>
                    </>
                  )}
                </div>
              </div>
            ))}
            </div>
          </section>
        </main>
    </>
  )
}

export default DoctorAppointment
