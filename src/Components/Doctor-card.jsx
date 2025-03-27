import "../Styles/Homepage.css";
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

function Doctorcard(props) {
  const navigate = useNavigate();  // Declare the navigate function

  return (
    <div className="doctor-card">
      <div className="doctor-card-content">
        <div className="doctor-image-container">
          <img
            src={props.src}
            className="doctor-image"
            alt={props.name}
          />
        </div>
        <div className="doctor-card-overlay">
          <div className="doctor-rating">
            <div className="rating-star">
              <img
                src="https://cdn.discordapp.com/attachments/841652770389884930/1352917195835048049/Symbol_1.png?ex=67dfc1d3&is=67de7053&hm=e8a877079d12da44785407eb0bc5ae3716829db92ddbbbf4b7508eb5ebf43817&"
                className="rating-stars"
                alt="rating stars"
              />
            </div>
            <div className="rating-number">
              {props.rating}
            </div>
          </div>
          <button className="favorite-button">
            <img
              src="https://cdn.discordapp.com/attachments/841652770389884930/1352974483656540201/Link_2.png?ex=67dff72d&is=67dea5ad&hm=485280e09a010a66a3c6e1c0a40f85e7b9a88731b82bf033549f0541dd4da2e7&"
              className="favorite-icon"
              alt="favorite icon"
            />
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
                      alt="location icon"
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
              <button
                className="book-button"
                onClick={() => navigate("/InputDesign")}  // On click, navigate to InputDesign
              >
                <img
                  src="https://cdn.discordapp.com/attachments/841652770389884930/1352972341239615541/calendar-2.png?ex=67dff52f&is=67dea3af&hm=6d0108ebf4ee8d8793cd3a680cdf85580cf03f7786b5470debed7b06a3a68d8e&"
                  className="book-icon"
                  alt="calendar icon"
                />
                <div className="book-text">Book Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctorcard;
