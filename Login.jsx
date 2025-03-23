import React, { useState } from "react";
import "./Login.css";
import logo from "./assets/Logo.png";
import loginIcon from "./assets/Login.svg";
import registerIcon from "./assets/Register.svg";
import showPasswordIcon from "./assets/Show.svg";
import hidePasswordIcon from "./assets/Hide.svg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <header className="header">
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
              <div className="login-button">
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
      </header>

      <main className="main-content">
        <div className="login-form-container">
          <h1 className="login-title">Login</h1>

          <div className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" />
            </div>

            <div className="form-group">
              <div className="password-header">
                <label className="form-label">Password</label>
                <div className="forgot-password">Forgot Password?</div>
              </div>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                />
                <img
                  src={showPassword ? hidePasswordIcon : showPasswordIcon}
                  alt="Toggle Password"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>

            <button className="login-submit-button">Login</button>
          </div>

          <div className="signup-prompt">
            <span>Don't have an account?</span>
            <span className="signup-link">Sign Up</span>
          </div>
        </div>
      </main>

      <footer className="footer">
        Copyright © 2025 Curely. All Rights Reserved
      </footer>
    </div>
  );
}

export default Login;
