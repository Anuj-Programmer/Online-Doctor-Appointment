import React, { useState } from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, Button, message } from "antd";
// import logo from "./assets/Logo.png";
// import loginIcon from "./assets/Login.svg";
// import registerIcon from "./assets/Register.svg";
import eyeIconShow from "../assets/Show.svg";
import eyeIconHide from "../assets/Hide.svg";
import axios from "axios";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading())
      if (res.data.success) {
        toast.success("Registered Successfully!");
        // alert("Registered Successfully!")
        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error("User already exists!");
        // alert("User Already Exists!");
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("Something went wrong.");
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="signup-page">
      <Toaster position="top-center"/>
      {/* Header */}
      {/* <div className="header">
        <div className="nav">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img src={logo} className="logo" alt="Logo" />
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-list">
              <div className="nav-item active">Home</div>
              <div className="nav-item">Contact</div>
              <div className="nav-item">Help</div>
              <div className="nav-item">About</div>
            </div>
            <div className="auth-buttons">
              <div className="login-button">
                <img src={loginIcon} className="icon" alt="Login icon" />
                <div className="button-text">Login</div>
              </div>
              <div className="register-button">
                <img src={registerIcon} className="icon" alt="Register icon" />
                <div className="button-text">Register</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Form */}
      <div className="form-container">
        <div className="form-title">Sign Up</div>
        <Form layout="vertical" onFinish={onFinish} className="form-content">
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name!' }]}> 
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item 
            label="Email" 
            name="email" 
            rules={[
              { required: true, message: 'Please enter your email!' },
              { 
                pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message: 'Please enter a valid Gmail address!'
              }
            ]}
          > 
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="New Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}> 
            <div className="password-input-container">
              <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
              <img
                src={showPassword ? eyeIconHide : eyeIconShow}
                className="password-toggle"
                alt="Toggle password visibility"
                onClick={togglePasswordVisibility}
              />
            </div>
          </Form.Item>

          <Form.Item label="Confirm Password" name="confirmPassword" dependencies={["password"]} rules={[{ required: true, message: 'Please confirm your password!' }, ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match!"));
            },
          })]}> 
            <div className="password-input-container">
              <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" />
              <img
                src={showConfirmPassword ? eyeIconHide : eyeIconShow}
                className="password-toggle"
                alt="Toggle password visibility"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="create-account-button">Create Account</Button>
          </Form.Item>
        </Form>
        <div className="login-link">
          Already have an account? <Link to="/login" className="login-text">Login</Link>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default SignUpPage;
