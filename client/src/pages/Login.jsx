import React, { useState } from "react";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/Logo.png";
import loginIcon from "../assets/Login.svg";
import registerIcon from "../assets/Register.svg";
import showPasswordIcon from "../assets/Show.svg";
import hidePasswordIcon from "../assets/Hide.svg";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";

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
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      dispatch(hideLoading());

      if (res.data.success === 'user' || res.data.success === 'admin') {
        // Store token and user type
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("author", res.data.success);
        
        // Set user data in Redux store (works for both user and admin)
        dispatch(setUser(res.data.data));
        
        // Show success message
        toast.success("Login Successful");
        
        // Navigate based on user type
        setTimeout(() => {
          navigate(res.data.success === 'admin' ? '/admin' : '/');
        }, 1000);
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid email or password");
    }
};
  return (
    <div className="login-container">
      <Toaster position="top-center"/>
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
              <Input type="email" placeholder="example@gmail.com" className="form-input" id="email"/>
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
              <div className="password-input-container">
                <Input type={showPassword ? "text" : "password"} placeholder="example123" className="form-input password" id="password"/>
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
