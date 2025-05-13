import React, { useState, useEffect } from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import LandingPageNav from "../Components/LandingPageNav";
import eyeIconShow from "../assets/Show.svg";
import eyeIconHide from "../assets/Hide.svg";

const BASE_URL = "http://localhost:8080"; // or your deployed URL

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Indicates if OTP was sent
  const [otpVerified, setOtpVerified] = useState(false); // Indicates if OTP was verified
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // EFFECT: Debug otpSent after state is updated
  useEffect(() => {
    console.log("OTP sent status (updated): ", otpSent);
  }, [otpSent]);

  useEffect(() => {
    console.log("📬 userData changed:", userData);
  }, [userData]);

  // EFFECT: Redirect after OTP is verified
  useEffect(() => {
    if (otpVerified) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [otpVerified, navigate]);

  console.log("🔁 Rendering SignUpPage", otpSent, otpVerified);

  // Handle registration + sending OTP
const onFinish = async (values) => {
  try {
    // dispatch(showLoading());
    const { confirmPassword, ...dataToSend } = values;

    const otpRes = await axios.post(`${BASE_URL}/api/v1/user/request-otp`, dataToSend);

    // dispatch(hideLoading());

    if (otpRes.data.success) {
      console.log("no");
      console.log("✅ OTP API success");
      setUserData(dataToSend); // first
      setOtpSent(true); // second
      console.log("📌 setOtpSent(true) called");

    } else {
      toast.error("Error sending OTP.");
    }
  } catch (error) {
    dispatch(hideLoading());
    console.error(error.response ? error.response.data : error.message);
    toast.error("Something went wrong.");
  }
};


  // Handle OTP verification
  const verifyOtp = async (values) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/verify-otp`, {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        otp: values.otp,
      });

      if (res.data.success) {
        toast.success("OTP verified successfully!");
        setOtpVerified(true);
      } else {
        toast.error("Invalid OTP.");
      }
    } catch (error) {
      toast.error("Error verifying OTP.");
      console.error(error);
    }
  };

  return (
    <div className="signup-page">
      <LandingPageNav />
      <Toaster position="top-center" />
      <div className="form-container">
        <div className="form-title1">Sign Up</div>

        {/* Render SignUp form if OTP hasn't been sent */}
        {!otpSent ? (
          <Form layout="vertical" onFinish={onFinish} className="form-content">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]} >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" },
                      { pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, message: "Please enter a valid Gmail address!" }]}>
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="New Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password!" },
                      { pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, message: "Password must contain at least one letter, number, and special character!" }]}>
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
              rules={[{ required: true, message: "Please confirm your password!" },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error("Passwords do not match!"));
                        }
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
              <Button type="primary" htmlType="submit" className="create-account-button">
                Send OTP
              </Button>
            </Form.Item>
          </Form>
        ) : !otpVerified ? (
          // Render OTP verification form if OTP has been sent
          <Form layout="vertical" onFinish={verifyOtp} className="otp-form">
            <h3 className="heading2">Enter OTP sent to your email</h3>

            {/* <Form.Item
              label="OTP"
              name="otp"
              rules={[{ required: true, message: "Please enter the OTP!" }]}> */}
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="otp-input"
              />
            {/* </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="verify-otp-button">
                Verify OTP
              </Button>
            </Form.Item>
          </Form>
        ) : (
          // OTP verified successfully message
          <div>
            <h2>OTP Verified Successfully!</h2>
          </div>
        )}

        <div className="login-link">
          Already have an account?{" "}
          <Link to="/login" className="login-text">
            Login
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUpPage;
