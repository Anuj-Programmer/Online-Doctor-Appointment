import * as React from "react";
import "../Styles/Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7effc2efc000e217d729b40f023095b493410f06?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
            className="logo-image"
            alt="Logo"
          />
        </div>
      </div>
      <div className="nav-items">
        <div className="nav-links">
          <div className="nav-list">
            <div className="nav-item active" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="nav-item">Contact</div>
            <div className="nav-item">Help</div>
            <div className="nav-item" onClick={() => navigate("/about")}>
              About
            </div>
          </div>
        </div>
        <div className="user-actions">
          <div className="user-profile">
            <div className="user-profile-button">
              <div className="user-icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f172ea07ecc84439ad6925d72a50ebd53c5fdac?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  className="user-icon-image"
                  alt="User"
                />
              </div>
              <div className="user-name">Apply as Doctor</div>
            </div>
          </div>
          <div className="notification-item">
            <button className="notification-button">
              <img
                src="https://cdn.discordapp.com/attachments/841652770389884930/1352912754192810025/notification-bing.png?ex=67dfbdb0&is=67de6c30&hm=7ad5bad670a1dd92119fa0bfe576650c0715745c717fad2875c931841233fff6&"
                className="notification-image"
                alt="Notification"
              />
            </button>
          </div>
          <div className="message-item">
            <div className="message-button">
              <img
                src="https://cdn.discordapp.com/attachments/841652770389884930/1352913654307356672/message-text.png?ex=67dfbe87&is=67de6d07&hm=93ed3c00e5581ac0a8c17729a76c307205d9c1d236f43f1201b655fe57e5699d&"
                className="message-image"
                alt="Messages"
              />
            </div>
          </div>
          <div className="avatar-item">
            <div className="avatar-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b70f1560e6c8a4c34d55e323bff3606d32b860?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                className="avatar-image"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
