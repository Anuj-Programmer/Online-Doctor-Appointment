import React, { useState, useEffect } from 'react'
import SidebarDoctor from '../../Components/SidebarDoctor'
import "../../styles/DoctorDashboard.css"


import Nav from '../../Components/Nav';
import DoctorAppointment from './DoctorAppointment';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';

function DoctorDasboard() {
  const { user } = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState('dashboard');
  const dispatch = useDispatch();

const getUserData = async () => {
  try {
    const res = await axios.post('/api/v1/user/getUserData', {}, {
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
      }
      })
    if(res.data.success) {
      dispatch(setUser(res.data.data))
    }
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getUserData()
}, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'appointments':
        return <DoctorAppointment />;
      case 'dashboard':
        return <div>Dashboard Content</div>;
      case 'schedule':
        return <div>Schedule Content</div>;
      case 'reviews':
        return <div>Reviews Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Nav/>
      <div className="dashboard-container">
        <div className="sidebar">
          <SidebarDoctor activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
      <footer className="dashboard-footer">
        Copyright © 2025 Curely. All Rights Reserved
      </footer>
    </>
  );
}

export default DoctorDasboard
