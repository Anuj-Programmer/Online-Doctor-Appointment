import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { setUser } from '../redux/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import '../styles/UserProfile.css'

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const res = await axios.post('/api/v1/user/getUserData', {}, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });
        if (res.data.success) {
          dispatch(setUser(res.data.data));
          // Set initial form data
          setFormData({
            name: res.data.data.name || '',
            email: res.data.data.email || '',
            phoneNumber: res.data.data.phoneNumber || '',
            address: res.data.data.address || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token || !user?._id) {
        throw new Error('Authentication required');
      }

      // Update user profile
      const response = await axios.put(
        '/api/v1/user/update-profile',
        {
          userId: user._id,
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          address: formData.address
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        toast.success('Profile updated successfully');
        // Update local state with new data
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Toaster position="top-center" />
        <Nav />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <Nav />
      <div className="settings-content">
        <div className="settings-container">
          <h1 className="settings-title">User Settings</h1>

          <form onSubmit={handleSubmit}>
            <h2 className="section-label">Information</h2>
            <div className="form-section">
              <div className="form-grid">
                <div className="form-group-user">
                  <label>Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="form-group-user">
                  <label>Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group-user">
                  <label>Phone Number <span className="required">*</span></label>
                  <div className="phone-input">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      
                    />
                  </div>
                </div>
                <div className="form-group-user full-width">
                  <label>Address <span className="required">*</span></label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    rows="3"
                    
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
              <button type="submit" className="save-btn" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
