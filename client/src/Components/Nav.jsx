import * as React from "react";
import "../styles/Nav.css"
import {useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Notification from "../assets/Notification.png"
import { Badge } from "antd";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };    

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("author");
    navigate("/login");
  };

  return(
    <>
    <div className="nav">
          <Link to="/" className="logo-container">
            <div className="logo">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7effc2efc000e217d729b40f023095b493410f06?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                className="logo-image"
              />
            </div>
          </Link>
          <div className="nav-items">
            <div className="nav-links">
              <div className="nav-list">
                <Link to="/" className={isActive('/')}>Home</Link>
                <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                <Link to="/help" className={isActive('/help')}>Help</Link>
                <Link to="/about" className={isActive('/about')}>About</Link>
              </div>
            </div>
            <div className="user-actions">
              <div className="user-profile">
                <Link to="/applydoctor" className="user-profile-button">
                  <div className="user-icon">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f172ea07ecc84439ad6925d72a50ebd53c5fdac?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                      className="user-icon-image"
                    />
                  </div>
                  <div className="user-name">Apply as Doctor</div>
                </Link>
              </div>
              
              {/* <div className="message-item">
                <div className="message-button">
                <img
                    src="https://cdn.discordapp.com/attachments/841652770389884930/1352913654307356672/message-text.png?ex=67dfbe87&is=67de6d07&hm=93ed3c00e5581ac0a8c17729a76c307205d9c1d236f43f1201b655fe57e5699d&"
                    className="message-image"
                  />
                </div>
              </div> */}
              <Badge count={0} color="red"> 
              <div className="notification-item">
                <button className ="notification-button">
                  <img
                      src={Notification}
                      className="notification-image"
                    />
                  </button>
              </div>
              </Badge>
              <div className="avatar-item">
                <div className="avatar-link" onClick={toggleDropdown}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b70f1560e6c8a4c34d55e323bff3606d32b860?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                    className="avatar-image"
                  />
                  {isDropdownOpen && (
                <div className="dropdown">
                   <div className="dropdown-arrow"></div>
                  <div className="dropdown-item">Edit Profile</div>
                  <div className="dropdown-item">
                  <Link to="/appointments" className={isActive('/appointments')}>My Appointments</Link>
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
                </div>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Nav;