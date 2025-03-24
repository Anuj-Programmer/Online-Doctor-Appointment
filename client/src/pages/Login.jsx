import React, { useState } from "react";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/Logo.png";
import loginIcon from "../assets/Login.svg";
import registerIcon from "../assets/Register.svg";
import showPasswordIcon from "../assets/Show.svg";
import hidePasswordIcon from "../assets/Hide.svg";
import Footer from "../Components/Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("login");
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post("/api/v1/user/login", values)
      dispatch(hideLoading())
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        alert("Login Successful")
        setTimeout(() => navigate('/'), 1000); 
      }
    } catch (error) {
      dispatch(hideLoading())
      alert("Invalid email or password")
    }
  };

  return (
    <div className="login-container">
      {/* <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="nav-container">
            <nav className="main-nav">
              <div className="nav-item">Home</div>
              <div className="nav-item">Contact</div>
              <div className="nav-item">Help</div>
              <div className="nav-item">About</div>
            </nav>
            <div className="auth-buttons">
              <div className="login-button">no
                <img src={loginIcon} alt="Login Icon" className="icon" />
                <span>Login</span>
              </div>
              <div className="register-button">
                <img src={registerIcon} alt="Register Icon" className="icon" />
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <main className="main-content-login">
        <div className="login-form-container">
          <h1 className="login-title">Login</h1>

          <Form layout="vertical" onFinish={onfinishHandler} className="login-form">
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
              <Input type="email" placeholder="Enter Email" className="form-input" />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
              <div className="password-input-container">
                <Input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="form-input" />
                <img
                  src={showPassword ? hidePasswordIcon : showPasswordIcon}
                  alt="Toggle Password"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </Form.Item>

            <button className="login-submit-button" type="submit">Login</button>
          </Form>

          <div className="signup-prompt">
            <span>Don't have an account? </span>
            <Link to="/register" className="signup-link">Sign Up</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Login;
