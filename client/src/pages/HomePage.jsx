import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/features/userSlice'
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Doctorcard from '../Components/Doctor-card';
import "../styles/HomePage.css"
import Brain from "../assets/Brain.png"
import Kidney from "../assets/kidney.png"
import Neurology from "../assets/Neurology.png"

function HomePage() {
  const dispatch = useDispatch();
  const [doctors, setDoctors] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const res = await axios.post('/api/v1/user/getUserData', {}, {
        headers:{
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      if(res.data.success) {
        dispatch(setUser(res.data.data))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log('No token found, skipping doctor fetch');
          return;
        }

        console.log('Fetching doctors...');
        const response = await axios.get('/api/v1/doctor/get-all-doctors', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          },
          params: {
            _t: new Date().getTime()
          }
        });

        if (response.data.success) {
          setDoctors(response.data.data);
          console.log('Doctors fetched successfully:', response.data.data.length);
        } else {
          console.error('Failed to fetch doctors:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error.response?.data || error.message);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    };

    fetchDoctors();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="homepage">
      <div className="header">
        <Nav/>
      </div>
      <div className="main-content">
        <div className="hero-section">
          <div className="hero-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba7ba54011e458e5823a0c908e7c446889823e74?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
              className="hero-background"
            />
            <div className="hero-content">
              <div className="hero-left">
                <div className="hero-content-container">
                <div className="rating-badge">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a21c505c2c6df85323568290b2ac751b53771c?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                      className="rating-image"
                    />
                    <div className="rating-text">
                      <div className="rating-title">5K+ Appointments</div>
                      <div className="rating-stars">
                        <div className="stars-container">
                          <div className="star">
                            <img
                              src="https://cdn.discordapp.com/attachments/841652770389884930/1352917684597293067/Symbol_2.png?ex=67dfc248&is=67de70c8&hm=9294af633aad9973cd1818cbdd79efef3c038f8b81454d6ad5af9193f3c06ec6&"
                              className="star-img"
                            />
                          </div>
                          <div className="star">
                            <img
                              src="https://cdn.discordapp.com/attachments/841652770389884930/1352917684597293067/Symbol_2.png?ex=67dfc248&is=67de70c8&hm=9294af633aad9973cd1818cbdd79efef3c038f8b81454d6ad5af9193f3c06ec6&"
                              className="star-img"
                            />
                          </div>
                          <div className="star">
                            <img
                              src="https://cdn.discordapp.com/attachments/841652770389884930/1352917684597293067/Symbol_2.png?ex=67dfc248&is=67de70c8&hm=9294af633aad9973cd1818cbdd79efef3c038f8b81454d6ad5af9193f3c06ec6&"
                              className="star-img"
                            />
                          </div>
                          <div className="star">
                            <img
                              src="https://cdn.discordapp.com/attachments/841652770389884930/1352917684597293067/Symbol_2.png?ex=67dfc248&is=67de70c8&hm=9294af633aad9973cd1818cbdd79efef3c038f8b81454d6ad5af9193f3c06ec6&"
                              className="star-img"
                            />
                          </div>
                          <div className="star">
                            <img
                              src="https://cdn.discordapp.com/attachments/841652770389884930/1352917684597293067/Symbol_2.png?ex=67dfc248&is=67de70c8&hm=9294af633aad9973cd1818cbdd79efef3c038f8b81454d6ad5af9193f3c06ec6&"
                              className="star-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hero-heading">
                    Providing{" "}
                    <span className="text-highlight">Quality Healthcare</span>{" "}
                    for a Brighter and Healthy Future
                  </div>
                  <div className="search-container">
                    <div className="search-form">
                      <div className="search-input-container">
                        <div className="search-input">
                        <div className="input-text-doctor" contenteditable="true" ></div>

                        </div>
                        <div className="input-divider"></div>
                        <div className="search-icon">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d2b94a0bf0eb83ed12b6bda231a3b1b2903629?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                            className="search-icon-image"
                          />
                        </div>
                      </div>
                      <div className="location-input-container">
                        <div className="location-input">
                          <div className="input-text-location" contenteditable="true"></div>
                        </div>
                        <div className="location-icon">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/949cad9e3de6d4f7853b7d47f54032e6bf5fca36?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                            className="location-icon-image"
                          />
                        </div>
                        <div className="input-divider"></div>
                      </div>
                      <div className="specialty-input-container">
                        <div className="specialty-input">
                          <div className="input-text-specialty" contenteditable="true"></div>
                        
                        <div className="specialty-icon1">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63251fb083c5a36bca58be6b7638131e88b4aa1d?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                            className="specialty-icon-image1"
                          />
                          </div>
                        </div>
                      </div>
                      <button className="search-button-container">
                        <div className="search-button">
                          <div className="search-button-icon">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/229955c3d174822765cec11d68f9274152806cd1?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                              className="search-button-icon-image"
                            />
                          </div>
                          <div className="search-button-text">Search</div>
                        </div>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-right">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d7829cadec846482330a22c325dfd1c9cdb44c7?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="specialties-section">
          <div className="section-heading">Highlighting the Care & Support</div>
          <div className="specialties-container">
            <button className="specialty-card">
              <div className="specialty-icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71b8d638e8fde6399efe7fc9c59aeef283b3eb99?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  className="specialty-icon-image"
                />
              </div>
              <div className="specialty-name">Cardiology</div>
            </button>

            <div className="specialty-card">
              <div className="specialty-icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b234f55e6f4f0ba85daf8251da300ce8b549c28?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  className="specialty-icon-image"
                />
              </div>
              <div className="specialty-name">Orthopedics</div>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">
                <img
                  src={Neurology}
                  className="specialty-icon-image"
                />
              </div>
              <div className="specialty-name">Neurology</div>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">
              <img
                  src={Brain}
                  className="specialty-icon-image"
                />
              </div>
              <div className="specialty-name">Psychiatry</div>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">
              <img
                  src={Kidney}
                  className="specialty-icon-image"
                />
              </div>
              <div className="specialty-name">Urology</div>
            </div>
          </div>
        </div>
        <div className="doctors-section">
          <div className="section-heading">Highlighted Doctors</div>
          <div className="doctors-container">

          {/* <Doctorcard src="https://cdn.builder.io/api/v1/image/assets/TEMP/a087871af596bf026ffe5318827a05f466776a7d?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"rating ="5.0" speciality="Psychologist" Avaibility="   •  Available" fee="$650" name="Dr. Michael Brwon" location="Minneapolis,MN" time = "30 min"/>
            <Doctorcard src= "https://cdn.builder.io/api/v1/image/assets/TEMP/b4d1e415cf0c33bccc695958aafbcaddbf963b66?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44" rating ="4.6" speciality="Pediatrician" Avaibility="  •  Available" fee="$400" name="Dr. Nicholas Tello" location="Ogden, IA" time = "60 min"/>
            <Doctorcard src= "https://cdn.builder.io/api/v1/image/assets/TEMP/688c14293f8762fae0ae16892a11fb1a5bf95901?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44" rating ="4.6" speciality="Neurologist" Avaibility="  •  Available" fee="$500" name="Dr. Harold Bryant" location="Winona, MS" time = "30 min"/>
            <Doctorcard src= "https://cdn.builder.io/api/v1/image/assets/TEMP/33910551f6aad2ef0cc3687d466e8637d95a33db?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44" rating ="4.6" speciality="Cardiologist" Avaibility="  •  Available" fee="$550" name="Dr. Sandra Jones" location="Beckley, WV" time = "30 min"/> */}
            {doctors
              .filter(doctor => doctor.status === 'approved')
              .slice(0, 4)  // Limit to first 4 doctors
              .map((doctor) => (
                <Doctorcard
                  key={doctor._id}
                  doctorId={doctor._id}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a087871af596bf026ffe5318827a05f466776a7d?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                  speciality={doctor.specialization}
                  Avaibility="• Available"
                  fee={`$${doctor.fee}`}
                  name={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                  location={doctor.address}
                  time={`${doctor.timeSlots[0]?.startTime || '30'} am`}
                  rating="4.5"
                />
              ))}
          </div>
        </div>
        <div className="why-choose-section">
          <div className="section-heading">Why Choose Us</div>
          <div className="features-container">
            <div className="feature-item">
              <div className="feature-content">
                <div className="feature-heading">
                  <div className="feature-icon">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/86bc8825c0de4feee18b4330bf54c2adb2607e15?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                      className="feature-icon-image"
                    />
                  </div>
                  <div className="feature-title">Follow-Up Care</div>
                </div>
                <div className="feature-description">
                  We ensure continuity of care through regular follow-ups
                  <br />
                  and communication, helping you stay on track with
                  <br />
                  health goals.
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-content">
                <div className="feature-heading">
                  <div className="feature-icon">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/25acc45a5b664a794cd1fe90580e84e7add568f4?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                      className="feature-icon-image"
                    />
                  </div>
                  <div className="feature-title">Patient-Centered Approach</div>
                </div>
                <div className="feature-description">
                  We prioritize your comfort and preferences, tailoring our
                  <br />
                  services to meet your individual needs and Care from
                  <br />
                  Our Experts
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-content">
                <div className="feature-heading">
                  <div className="feature-icon">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/efea07b4655327f9b2cd424ddf0a9af43705b40c?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"
                      className="feature-icon-image"
                    />
                  </div>
                  <div className="feature-title">Convenient Access</div>
                </div>
                <div className="feature-description">
                  Easily book appointments online or through our
                  <br />
                  dedicated customer service team, with flexible hours to
                  <br />
                  fit your schedule.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <div className="footer-content">
          Copyright © 2025 Curely. All Rights Reserved
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}

export default HomePage
