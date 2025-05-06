import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Space, Modal, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice';
import { setUser } from '../../redux/features/userSlice';

function Admin() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/v1/user/getUserData', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  useEffect(() => {
    fetchUserData();
    const interval = setInterval(fetchUserData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (user?.notification) {
      setNotificationCount(user.notification.length);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('author');
  }

  const showNotifications = () => {
    setIsModalVisible(true);
  }

  const handleMarkAllRead = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/v1/user/mark-all-notifications', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        // Refresh user data to update notification count
        fetchUserData();
        setIsModalVisible(false);
      }
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  const handleDeleteAllNotifications = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/v1/user/delete-all-notifications', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        // Refresh user data to update notification count
        fetchUserData();
        setIsModalVisible(false);
      }
    } catch (error) {
      console.error('Error deleting notifications:', error);
    }
  };

  const handleDoctorAction = async (doctorId, status) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/v1/doctor/change-status',
        { doctorId, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (response.data.success) {
        fetchUserData();
        setIsModalVisible(false);
      }
    } catch (error) {
      console.error('Error updating doctor status:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Space size="large">
        <h1>Admin Dashboard</h1>
        <Badge count={notificationCount} style={{ backgroundColor: '#ff4d4f' }}>
          <BellOutlined 
            style={{ fontSize: '24px', cursor: 'pointer' }} 
            onClick={showNotifications}
          />
        </Badge>
      </Space>

      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/admin-appointment">
          Appointment
        </Link>
      </div>

      <Modal
        title="Notifications"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="delete" type="primary" danger onClick={handleDeleteAllNotifications}>Delete All</Button>,
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>
        ]}
      >
        {user?.notification?.map((notification, index) => (
          <div 
            key={index}
            style={{ 
              borderBottom: '1px solid #f0f0f0',
              padding: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div>{notification.message}</div>
            {notification.type === "apply-doctor" && (
              <Space>
                <Button
                  type="primary"
                  onClick={() => handleDoctorAction(notification.data.doctorId, 'approved')}
                >
                  Accept
                </Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => handleDoctorAction(notification.data.doctorId, 'rejected')}
                >
                  Reject
                </Button>
              </Space>
            )}
          </div>
        ))}
        {!user?.notification?.length && (
          <div>No new notifications</div>
        )}
      </Modal>
    </div>
  );
}

export default Admin;
