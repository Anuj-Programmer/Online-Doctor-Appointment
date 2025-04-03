import * as React from "react";
import "../styles/Nav.css"
import {useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Notification from "../assets/Notification.png"
import { Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/features/userSlice";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false); // Close notification when opening dropdown
  };    

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsDropdownOpen(false); // Close dropdown when opening notification
  };

  const clearAllNotifications = async () => {
    try {
      const res = await axios.post("/api/v1/user/delete-all-notifications", {
        userId: user._id
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      
      if (res.data.success) {
        dispatch(setUser({ ...user, notification: [] }));
      }
    } catch (error) {
      console.log(error);
    }
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
              <div className="nav-list justify-content-md-end">
                <Link to="/" className={isActive('/')}>Home</Link>
                <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                <Link to="/help" className={isActive('/help')}>Help</Link>
                <Link to="/about" className={isActive('/about')}>About</Link>
              </div>
            </div>
            <div className="user-actions">
              {!user?.isDoctor && (
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
              )}
              
              <Badge count={user?.notification?.length || 0} color="red"> 
                <div className="notification-item">
                  <button className="notification-button" onClick={toggleNotification}>
                    <img
                      src={Notification}
                      className="notification-image"
                    />
                  </button>
                  {isNotificationOpen && (
                    <div className="notification-modal">
                      <div className="notification-header">
                        <h3>Notifications</h3>
                        <button className="clear-all" onClick={clearAllNotifications}>Clear All</button>
                      </div>
                      <div className="notification-content">
                        {user?.notification?.length > 0 ? (
                          user.notification.map((notification, index) => (
                            <div key={index} className="notification-item-content">
                              <p className="notification-message">{notification.message}</p>
                              {notification.type === "doctor-application" && (
                                <p className="notification-status">Status: Pending Approval</p>
                              )}
                              <p className="notification-time">
                                {new Date(notification.createdAt).toLocaleString()}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="no-notifications">
                            No new notifications
                          </div>
                        )}
                      </div>
                    </div>
                  )}
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

                      {!user?.isDoctor && (
                        <Link to="/appointment" className="dropdown-item">My Appointments</Link>
                      )}

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