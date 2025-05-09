import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import { setUser } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/UserProfile.css";

function AdminSetting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordMatchError, setPasswordMatchError] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        setLoading(true);
        const res = await axios.post(
          "/api/v1/user/getUserData",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (res.data.success) {
          dispatch(setUser(res.data.data));
          setFormData({
            name: res.data.data.name || "",
            email: res.data.data.email || "",
            phoneNumber: res.data.data.phoneNumber || "",
            address: res.data.data.address || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
        toast.error("Failed to fetch admin data");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "newPassword" || name === "confirmPassword") {
      const newPassword = name === "newPassword" ? value : formData.newPassword;
      const confirmPassword =
        name === "confirmPassword" ? value : formData.confirmPassword;
      if (newPassword && confirmPassword && newPassword !== confirmPassword) {
        setPasswordMatchError("New password and confirmation do not match");
      } else {
        setPasswordMatchError("");
      }
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token || !user?._id) {
        throw new Error("Authentication required");
      }

      // Update profile
      const response = await axios.put(
        "/api/v1/user/update-profile",
        {
          userId: user._id,
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully");
        dispatch(setUser(response.data.data));
      }

      // Change password if fields are filled
      if (
        formData.currentPassword &&
        formData.newPassword &&
        formData.confirmPassword
      ) {
        if (formData.newPassword !== formData.confirmPassword) {
          toast.error("New passwords do not match");
          setLoading(false);
          return;
        }

        try {
          const passwordRes = await axios.post(
                "/api/v1/user/change-password",
            {
              userId: user._id,
              currentPassword: formData.currentPassword,
              newPassword: formData.newPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (passwordRes.data.success) {
            toast.success("Password changed successfully");
            setFormData((prev) => ({
              ...prev,
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }));
          } else {
            toast.error(
              passwordRes.data.message || "Failed to change password"
            );
            console.error("Password change error:", passwordRes.data.message);
          }
        } catch (err) {
          console.error("Error changing password:", err);
          toast.error(err.response?.data?.message || "Error changing password");
        }
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Toaster position="top-center" />
        {/* <Nav /> */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      {/* <Nav /> */}
      {/* <div className="contact-header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
          className="header-left-image"
          alt="Decorative left element"
        />
        <h1 className="contact-title">Admin Settings</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
          className="header-right-image"
          alt="Decorative right element"
        />
      </div> */}
      <div className="settings-content">
        <div className="settings-container">
          <h1 className="settings-title">Admin Profile</h1>

          <form onSubmit={handleSubmit}>
            <h2 className="section-label">Information</h2>
            <div className="form-section">
              <div className="form-grid">
                <div className="form-group-user">
                  <label>
                    Full Name <span className="required">*</span>
                  </label>
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
                  <label>
                    Email Address <span className="required">*</span>
                  </label>
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
                  <label>
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="form-group-user full-width">
                  <label>
                    Address <span className="required">*</span>
                  </label>
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

            <h2 className="section-label">Change Password</h2>
            <div className="form-section">
              <div className="form-grid">
                <div className="form-group-user">
                  <label>Current Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showPasswords.current ? "text" : "password"}
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Enter Current Password"
                    />
                    <i
                      className={`fa-solid ${
                        showPasswords.current ? "fa-eye-slash" : "fa-eye"
                      } eye-icon`}
                      onClick={() => togglePasswordVisibility("current")}
                    ></i>
                  </div>
                </div>

                <div className="form-group-user">
                  <label>New Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showPasswords.new ? "text" : "password"}
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter New Password"
                    />
                    <i
                      className={`fa-solid ${
                        showPasswords.new ? "fa-eye-slash" : "fa-eye"
                      } eye-icon`}
                      onClick={() => togglePasswordVisibility("new")}
                    ></i>
                  </div>
                </div>

                <div className="form-group-user">
                  <label>Confirm New Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showPasswords.confirm ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm New Password"
                    />
                    <i
                      className={`fa-solid ${
                        showPasswords.confirm ? "fa-eye-slash" : "fa-eye"
                      } eye-icon`}
                      onClick={() => togglePasswordVisibility("confirm")}
                    ></i>
                  </div>
                  {passwordMatchError && (
                    <p className="error-text">{passwordMatchError}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button type="submit" className="save-btn" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default AdminSetting;
