import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { setUser } from '../redux/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

function UserProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [emailForm, setEmailForm] = useState({
    newEmail: '',
    currentPassword: ''
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/v1/user/getUserData', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/user/change-email', {
        ...emailForm,
        userId: user._id
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (res.data.success) {
        toast.success('Email updated successfully!');
        setShowEmailForm(false);
        setEmailForm({ newEmail: '', currentPassword: '' });
        getUserData();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update email');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    try {
      const res = await axios.post('/api/v1/user/change-password', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
        userId: user._id
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (res.data.success) {
        toast.success('Password updated successfully!');
        setShowPasswordForm(false);
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update password');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <>
        <Toaster position="top-right" />
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
      <Toaster position="top-right" />
      <Nav />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6">User Profile</h1>
            
            {user && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    {/* <span className="text-3xl text-gray-500">
                      {user.name?.charAt(0).toUpperCase()}
                    </span> */}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Name: {user.name}</h2>
                    <p className="text-gray-600">Email: {user.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Contact Information</h3>
                    <p className="text-gray-600">{user.phone || 'Not provided'}</p>
                  </div> */}
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Account Type</h3>
                    <p className="text-gray-600">{user.role || 'User'}</p>
                  </div>
                </div>

                {/* Email Change Form */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Change Email</h3>
                    <button
                      onClick={() => setShowEmailForm(!showEmailForm)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {showEmailForm ? 'Cancel' : 'Change Email'}
                    </button>
                  </div>
                  {showEmailForm && (
                    <form onSubmit={handleEmailChange} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">New Email</label>
                        <input
                          type="email"
                          value={emailForm.newEmail}
                          onChange={(e) => setEmailForm({ ...emailForm, newEmail: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      {/* <div>
                        <label className="block text-sm font-medium text-gray-700">Current Password</label>
                        <input
                          type="password"
                          value={emailForm.currentPassword}
                          onChange={(e) => setEmailForm({ ...emailForm, currentPassword: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div> */}
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Update Email
                      </button>
                    </form>
                  )}
                </div>

                {/* Password Change Form */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Change Password</h3>
                    <button
                      onClick={() => setShowPasswordForm(!showPasswordForm)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {showPasswordForm ? 'Cancel' : 'Change Password'}
                    </button>
                  </div>
                  {showPasswordForm && (
                    <form onSubmit={handlePasswordChange} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Current Password</label>
                        <input
                          type="password"
                          value={passwordForm.currentPassword}
                          onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                          type="password"
                          value={passwordForm.newPassword}
                          onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input
                          type="password"
                          value={passwordForm.confirmPassword}
                          onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Update Password
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
