
import "../styles/HomePage.css"
import Heart from "../assets/Heart.png"
import Star from "../assets/Star.png"
import booking from "../assets/calender.png"

function Doctorcard(props){
    return(
        <div className="doctor-card">
<div className="doctor-card-content">
  <div className="doctor-image-container">
    <img
      src={props.src}
      className="doctor-image"
    />
  </div>
  <div className="doctor-card-overlay">
    <div className="doctor-rating">
      <div className="rating-star">
        <img src={Star} className="rating-stars"/>
      </div>
      <div className="rating-number">
        {props.rating}
      </div>
    </div>
    <button className="favorite-button">
        <img src={Heart} className="favorite-icon"/> 
    </button>
  </div>
  <div className="doctor-info">
    <div className="doctor-specialty-row">
      <div className="doctor-specialty pediatrician">
      {props.speciality}
      </div>
      <div className="doctor-availability">
        <div className="availability-icon"></div>
        <div className="availability-text">{props.Avaibility}</div>
      </div>
      <div className="specialty-indicator pediatrician-indicator"></div>
    </div>
    <div className="doctor-details">
      <div className="doctor-details-border">
        <div className="doctor-name">{props.name}</div>
        <div className="doctor-location-info">
          <div className="location-container">
            <div className="location-icon-container">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d82c7cb3a69ea2c20dbdd1c3b867d8896ff059f?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                className="location-icon1"
              />
            </div>
            <div className="location-name">{props.location}</div>
          </div>
          <div className="time-divider"></div>
          <div className="appointment-time">{props.time}</div>
        </div>
      </div>
      <div className="doctor-booking">
        <div className="consultation-fee">
          <div className="fee-label">Consultation Fees</div>
          <div className="fee-amount">{props.fee}</div>
        </div>
        <button className="book-button">
            <img src={booking} className="book-icon"/>
          <div className="book-text">Book Now</div>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Doctorcard;
