import React, { useState } from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import eyeIconShow from "../assets/Show.svg";
import eyeIconHide from "../assets/Hide.svg";

const BASE_URL = 'http://localhost:8080';

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onFinish = async (values) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, values);

      if (res.data.success) {
        toast.success("Registered Successfully!");

        const otpRes = await axios.post(`${BASE_URL}/api/v1/user/send-otp`, {
          email: values.email,
          name: values.name,
        });

        if (otpRes.data.success) {
          setOtpSent(true);
          setUserData(values);
          message.success("OTP sent to your email!");
        } else {
          toast.error("Error sending OTP.");
        }
      } else {
        toast.error("User already exists!");
      }
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response.data);
        toast.error(error.response.data.message || 'Something went wrong.');
      } else {
        console.error('Error:', error.message);
        toast.error('Network error, please try again later.');
      }
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/verify-otp`, {
        email: userData.email,
        otp,
      });

      if (res.data.success) {
        toast.success("OTP verified successfully!");
        navigate("/login");
      } else {
        toast.error("Invalid OTP.");
      }
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response.data);
        toast.error(error.response.data.message || 'Something went wrong.');
      } else {
        console.error('Error:', error.message);
        toast.error('Network error, please try again later.');
      }
    }
  };

  return (
    <div className="signup-page">
      <Toaster position="top-center" />

      <div className="form-container">
        <div className="form-title1">Sign Up</div>

        {!otpSent ? (
          <Form layout="vertical" onFinish={onFinish} className="form-content">
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
              <div className="password-input-container">
                <Input type="email" placeholder="Enter your email" />
              </div>
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

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
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
              <Button type="primary" htmlType="submit" className="create-account-button">
                Send OTP
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="otp-form">
            <h3 className="heading2" >Enter OTP sent to your email</h3>
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="otp-input"
            />
            <Button onClick={verifyOtp} type="primary" className="verify-otp-button">
              Verify OTP
            </Button>
          </div>
        )}

        <div className="login-link">
          Already have an account? <Link to="/login" className="login-text">Login</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUpPage;
