import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import searchIcon from "../assets/search.svg";
import "../styles/UserAppointment.css";
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { setUser } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';

function UserAppointment() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('upcoming');
  const [doctor, setDoctor] = useState([]);

  const getUserData = async () => {
    try {
      const response = await axios.post(`/api/v1/user/getUserData`, {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      console.log('API Response:', response.data);
      if (response.data.success) {
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        console.log("User ID", user?._id);
        
        const token = localStorage.getItem("token");
        if (!token || !user?._id) return;

        const response = await axios.post(`/api/v1/user/get-user-appointments`, {
          userId: user._id
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          setAppointments(response.data.data);
          filterAppointments(response.data.data, activeFilter);
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

  const fetchDoctorData = async () => {
    try {
      const res = await axios.get(`/api/v1/doctor/get-all-doctors`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);
  

  const filterAppointments = (appointmentsList, filter) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let filtered = [...appointmentsList];

    switch (filter) {
      case 'upcoming':
        filtered = appointmentsList.filter(apt => {
          const aptDate = new Date(apt.date);
          aptDate.setHours(0, 0, 0, 0);
          return aptDate.getTime() >= today.getTime() && apt.status === 'approved';
        });
        break;
      case 'cancelled':
        filtered = appointmentsList.filter(apt => apt.status === 'cancelled');
        break;
      case 'all':
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

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`/api/v1/user/cancel-appointment`, {
        appointmentId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.data.success) {
        console.log("Appointment cancelled successfully");
  
        // Update the local state without refreshing
        const updatedAppointments = appointments.map((apt) =>
          apt._id === appointmentId ? { ...apt, status: 'cancelled' } : apt
        );
        setAppointments(updatedAppointments);
  
        // Re-filter the list to reflect changes immediately
        filterAppointments(updatedAppointments, activeFilter);
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      setError('Failed to cancel appointment');
    }
  };



  return (
    <>
      <Nav />
      <main className="user-appointment-main">
        <header className="user-appointment-header">
          <div className="contact-header">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
              className="header-left-image"
              alt="Decorative left element"
            />
            <h1 className="contact-title">My Appointments</h1>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
              className="header-right-image"
              alt="Decorative right element"
            />
          </div>
          <div className="user-filter-tabs">
            <div 
              className={`user-filter-tab ${activeFilter === 'upcoming' ? 'active' : ''}`}
              onClick={() => handleFilterClick('upcoming')}
            >
              Upcoming
            </div>
            <div 
              className={`user-filter-tab ${activeFilter === 'cancelled' ? 'active' : ''}`}
              onClick={() => handleFilterClick('cancelled')}
            >
              Cancelled
            </div>
            <div 
              className={`user-filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </div>
          </div>
        </header>
        <section className="user-appointments-table">
  <div className="user-table-header">
    <div className="user-header-doctor">Doctor Name</div>
    <div className="user-header-date">Appt Date</div>
    <div className="user-header-time">Time Slot</div>
    <div className="user-header-specialization">Specialization</div>
    <div className="user-header-amount">Amount</div>
    <div className="user-header-status">Status</div>
    {/* <div className="user-header-cancel">Cancel</div> */}
  </div>
  <div className="user-table-body">
    {filteredAppointments.map((appointment) => (
      <div key={appointment._id} className="user-appointment-row">
        <div className="user-doctor-info">
          <div className="user-doctor-details">
            <div className="user-doctor-name">Dr. {appointment.doctorInfo?.firstName} {appointment.doctorInfo?.lastName}</div>
          </div>
        </div>
        <div className="user-appointment-date">{appointment.date}</div>
        <div className="user-appointment-time">{appointment.timeSlot.startTime} - {appointment.timeSlot.endTime}</div>
        <div className="user-doctor-specialization">{appointment.doctorInfo?.specialization}</div>
        <div className="user-appointment-amount">${appointment.fee}</div>
        <div className="user-appointment-status">
          <span className={`user-status-badge ${appointment.status}`}>{appointment.status}</span>
        </div>
        <div className="user-appointment-buttons">
        {appointment.status !== 'cancelled' && (
            <button className="reschedule-button" onClick={() => navigate(`/reschedule/${appointment.doctorId}`)}>
                Reschedule
                </button>
          )}

          {appointment.status !== 'cancelled' && (
            <button 
              className="cancel-button" 
              onClick={() => handleCancelAppointment(appointment._id)}
            >
              Cancel 
            </button>
          )}
          
        </div>
      </div>
    ))}
  </div>
</section>

      </main>
      <Footer/>
    </>
  );
}

export default UserAppointment;
