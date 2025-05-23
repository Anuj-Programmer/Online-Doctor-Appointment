import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import "../../styles/DoctorSetting.css";
import { uploadToCloudinary } from "../../lib/uploadToCloudinary";

function DoctorSetting() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token || !user?._id) return;

        const response = await axios.get("/api/v1/doctor/get-all-doctors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          const doctor = response.data.data.find(
            (doc) => doc.userId && doc.userId._id === user._id
          );
          if (doctor) {
            setDoctorData(doctor);
            // Set initial form data
            setFormData({
              firstName: doctor.firstName || "",
              lastName: doctor.lastName || "",
              email: doctor.userId.email || "",
              phoneNumber: doctor.phoneNumber || "",
              specialization: doctor.specialization || "",
              experience: doctor.experience || "",
              feePerConsultation: doctor.fee || "",
              address: doctor.address || "",
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        toast.error("Failed to fetch doctor data");
      }
    };

    fetchDoctorData();
  }, [user?._id]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialization: "",
    experience: "",
    feePerConsultation: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    profile: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];
      console.log("File", file);

      const response = await uploadToCloudinary(file);
      console.log(response);
      setFormData({
        ...formData,
        profile: response.secure_url,
      });
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token || !doctorData?._id) {
        throw new Error("Authentication required");
      }

      // Update doctor profile
      const response = await axios.put(
        "/api/v1/doctor/update-profile",
        {
          doctorId: user?._id,
          firstName: formData.firstName,
          lastName: formData.lastName,
          profile: formData.profile,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          specialization: formData.specialization,
          experience: formData.experience,
          fee: formData.feePerConsultation,
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
        // Update local state with new data
        setDoctorData((prev) => ({
          ...prev,
          ...response.data.data,
        }));
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token || !user?._id) {
      toast.error("Authentication required");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/v1/user/change-password",
        {
          userId: user?._id,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Password changed successfully!");
        setFormData({
          ...formData,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="settings-content-doctor">
        <div className="settings-container-doctor">
          <h1 className="settings-title">Doctor Settings</h1>

          <h2 className="section-label">Profile Photo</h2>
          <div className="profile-photo-section">
            {formData.profile || doctorData?.profile ? (
              <div className="profile-photo-wrapper">
                <img
                  src={formData.profile || doctorData.profile}
                  alt="Profile"
                  className="profile-photo"
                />
                <div className="upload-box">
                  <div className="upload-middle ps-0">
                    <label htmlFor="upload" className="edit-btn">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </label>
                    <input
                      type="file"
                      id="upload"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="upload-box">
                <div className="photo-placeholder">
                  <i className="fas fa-upload upload-icon"></i>
                </div>
                <div className="upload-middle">
                  <label htmlFor="upload" className="upload-btn-doctor">
                    Upload New
                  </label>
                  <input
                    type="file"
                    id="upload"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <p className="format-text">Format: jpg, png, svg</p>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <h2 className="section-label">Information</h2>
            <div className="form-section">
              <div className="form-grid">
                <div className="form-group">
                  <label>
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
                  <label>
                    Phone Number <span className="required">*</span>
                  </label>
                  <div className="phone-input-doctor">
                    <input
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Specialization <span className="required">*</span>
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Specialization</option>
                    <option value="cardiology">cardiology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="neurology">neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Years of Experience <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Enter Years of Experience"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Fee Per Consultation <span className="required">*</span>
                  </label>
                  <div className="fee-input">
                    <span className="currency">Rs</span>
                    <input
                      type="number"
                      name="feePerConsultation"
                      value={formData.feePerConsultation}
                      onChange={handleInputChange}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>
                    Address <span className="required">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    rows="3"
                    required
                  />
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
         {/* Password Change Form */}
      <div className="password-change-section">
        <h2 className="section-label">Change Password</h2>
        <form onSubmit={handlePasswordChange} >
        <div className="passwordchange-form">
          <div className="form-group password-input-group">
            <label>Current Password</label>
            <div className="password-input-wrapper">
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="Enter Current Password"
                required
              />
              <i
                className={`fa ${showCurrentPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowCurrentPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
                aria-label="Toggle Current Password Visibility"
              ></i>
            </div>
          </div>
          <div className="form-group password-input-group">
            <label>New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Enter New Password"
                required
                style={{
                  borderColor:
                    formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword
                      ? "red"
                      : undefined,
                }}
              />
              <i
                className={`fa ${showNewPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowNewPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
                aria-label="Toggle New Password Visibility"
              ></i>
            </div>
            {formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword && (
              <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                New password and confirm password do not match.
              </p>
            )}
          </div>
          <div className="form-group password-input-group">
            <label>Confirm New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm New Password"
                required
                style={{
                  borderColor:
                    formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword
                      ? "red"
                      : undefined,
                }}
              />
              <i
                className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
                aria-label="Toggle Confirm Password Visibility"
              ></i>
            </div>
          </div>
          </div>
          <div className="form-actions">
          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? "Changing Password..." : "Change Password"}
          </button>
          </div>
        </form>
      </div>
      </div>

     
    </>
  );
}

export default DoctorSetting;
