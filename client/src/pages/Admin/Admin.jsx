import React, { useState, useEffect } from 'react'
import "../../styles/DoctorDashboard.css"
import { useLocation } from 'react-router-dom';

import Nav from '../../Components/Nav';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';
// import DoctorSchedule from './DoctorSchedule';
import Footer from '../../Components/Footer';
// import DoctorSetting from './DoctorSetting';
// import DashboardContent from './DashboardContent';
import SidebarAdmin from '../../Components/SidebarAdmin';
import AdminDashboard from './AdminDashboard';
import AdminPatients from './AdminPatients';
import AdminDoctor from './AdminDoctor';
import AdminAppointment from './AdminAppointment';
import AdminSetting from './AdminSetting';

function DoctorDashboard() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'dashboard');
  const dispatch = useDispatch();

  // Add effect to handle location state changes
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

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
        return <AdminAppointment/>;
      case 'dashboard':
        return <AdminDashboard/>;
      case 'settings':
        return <AdminSetting/>;
      case 'patients':
        return <AdminPatients/>;
      case 'doctors':
        return <AdminDoctor/>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <>
     
      <Nav/>
      <div className="dashboard-container">
        <div className="sidebar">
          <SidebarAdmin activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="main-content-dashboard" style={{width: "100%"}}>
          {renderContent()}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DoctorDashboard
