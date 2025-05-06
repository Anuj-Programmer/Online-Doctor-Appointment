import { Link, useLocation } from "react-router-dom"
import "../styles/LandingPageNav.css"
import loginIcon from "../assets/login-landing.svg"
import registerIcon from "../assets/Register-landing.svg"

function LandingPageNav() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item"
  }

  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <div className="logo">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7effc2efc000e217d729b40f023095b493410f06?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
            className="logo-image"
            alt="Logo"
          />
        </div>
      </Link>
      <div className="nav-items">
        <div className="nav-links">
          <div className="nav-list">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
            <Link to="/help" className={isActive("/help")}>
              Help
            </Link>
            <Link to="/about" className={isActive("/about")}>
              About
            </Link>
          </div>
        </div>
        <div className="user-actions">
          <div className="user-profile">
            <Link to="/ApplyDoctor" className="user-profile-button">
              <div className="user-icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f172ea07ecc84439ad6925d72a50ebd53c5fdac?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  className="user-icon-image"
                  alt="Doctor icon"
                />
              </div>
              <div className="user-name">Apply as Doctor</div>
            </Link>
          </div>
          <Link to="/login" className="auth-button login-button">
            <img 
              src={loginIcon} 
              className="auth-icon" 
              alt="Login" 
              width="19" 
              height="19"
            />
            Login
          </Link>
          <Link to="/register" className="auth-button register-button">
            <img 
              src={registerIcon} 
              className="auth-icon" 
              alt="Register" 
              width="20" 
              height="20"
            />
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPageNav