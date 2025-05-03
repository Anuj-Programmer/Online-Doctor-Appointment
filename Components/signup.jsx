import React, { useState } from "react";
import "./signup.css";
import logo from "./assets/Logo.png";
import loginIcon from "./assets/Login.svg";
import registerIcon from "./assets/Register.svg";
import eyeIconShow from "./assets/Show.svg";
import eyeIconHide from "./assets/Hide.svg";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-page">
      <div className="header">
        <div className="nav">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img src={logo} className="logo" alt="Logo" />
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-links">
              <div className="nav-list">
                <div className="nav-item active">Home </div>
                <div className="nav-item">Contact</div>
                <div className="nav-item">Help</div>
                <div className="nav-item">About</div>
              </div>
            </div>
            <div className="auth-buttons">
              <div className="login-button-wrapper">
                <div className="login-button">
                  <div className="button-icon-wrapper">
                    <div className="button-icon-container">
                      <div className="button-icon">
                        <img src={loginIcon} className="icon" alt="Login icon" />
                      </div>
                    </div>
                  </div>
                  <div className="button-text">Login</div>
                </div>
              </div>
              <div className="register-button-wrapper">
                <div className="register-button">
                  <div className="button-icon-wrapper">
                    <div className="button-icon-container">
                      <div className="button-icon">
                        <img src={registerIcon} className="icon" alt="Register icon" />
                      </div>
                    </div>
                  </div>
                  <div className="button-text">Register</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="form-title">Sign Up</div>
        <div className="form-content">
          <div className="form-field">
            <div className="field-label">Name</div>
            <input type="text" className="field-input" />
          </div>
          <div className="form-field">
            <div className="field-label">Email</div>
            <input
              type="email"
              className="field-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!e.target.value) {
                  setEmailError("Email is required");
                } else {
                  const emailRegex = /^[^\s@]+@gmail\.com$/;
                  if (!emailRegex.test(e.target.value)) {
                    setEmailError("Invalid email format");
                  } else {
                    setEmailError("");
                  }
                }
              }}
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div className="form-field password-field">
            <div className="field-label">New Password</div>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="field-input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!e.target.value) {
                    setPasswordError("Password is required");
                  } else {
                    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
                    if (!passwordRegex.test(e.target.value)) {
                      setPasswordError(
                        "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character"
                      );
                    } else {
                      setPasswordError("");
                    }
                  }
                }}
              />
              <img
                src={showPassword ? eyeIconHide : eyeIconShow}
                className="password-toggle"
                alt="Toggle password visibility"
                onClick={togglePasswordVisibility}
              />
            </div>
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>
          <div className="form-field password-field">
            <div className="field-label">Confirm Password</div>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="field-input"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (!e.target.value) {
                    setConfirmPasswordError("Confirm Password is required");
                  }
                  else if (e.target.value !== password) {
                    setConfirmPasswordError("Passwords do not match");
                  } else {
                    setConfirmPasswordError("");
                  }
                }}
              />
              <img
                src={showConfirmPassword ? eyeIconHide : eyeIconShow}
                className="password-toggle"
                alt="Toggle password visibility"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            {confirmPasswordError && (
              <div className="error-message">{confirmPasswordError}</div>
            )}
          </div>
          <div className="form-field">
            <button className="create-account-button">Create Account</button>
          </div>
        </div>
        <div className="login-link">
          Already have an account? <span className="login-text">Login</span>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          Copyright © 2025 Curely. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
