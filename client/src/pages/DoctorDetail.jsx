import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/DoctorDetail.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const DoctorDetail = () => {
  const { doctorId } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return (
      string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase() || ""
    );
  };

  const getDoctorData = async () => {
    try {
      const res = await axios.get(`/api/v1/doctor/${doctorId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctorData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  // const slots = Array(6).fill({
  //   date: "Wed Feb 2024",
  //   time: "01:00 - 02:00 PM",
  // });

  console.log(doctorData);
  // return (
  //   <div>
  //     <h1>Doctor Detail</h1>
  //     <p>{doctorData?.firstName}</p>
  //     <p>Doctor ID: {doctorId}</p>

  //   </div>
  // )
  return (
    <>
      <Nav />
      <div className="contact-header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
          className="header-left-image"
          alt="Decorative left element"
        />
        <h1 className="contact-title">Doctor Profile</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
          className="header-right-image"
          alt="Decorative right element"
        />
      </div>
      <div className="doctorDetail">
        <div className="bannerCard">
          <div className="bannerContent">
            <div className="profileInfo">
              <div className="doctorProfile">
                <div className="profileImage">
                  <i
                    className="fas fa-user-doctor"
                    style={{ fontSize: "100px", color: "#4a90e2" }}
                  ></i>
                </div>
                <div className="profileDetailsColumn">
                  <div className="profileDetails">
                    <div className="availabilityBadge">
                      <i className="fas fa-circle availabilityDot"></i>
                      <span className="availabilityText">Available</span>
                    </div>
                    <div className="nameSection">
                      <h2 className="doctorName">
                        Dr. {capitalizeFirstLetter(doctorData?.firstName)}{" "}
                        {capitalizeFirstLetter(doctorData?.lastName)}
                      </h2>
                    </div>
                    <p className="qualification">
                      {doctorData?.specialization}
                    </p>
                    {/* <div className="ratingSection">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star starIcon"></i>
                      ))}
                    </div>
                    <span className="ratingValue">5.0</span>
                    <a href="#reviews" className="reviewsLink">
                      150 Reviews
                    </a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="statsColumn">
              <div className="statsList">
                <div className="recommendationStat">
                  <div className="recommendIcon">
                    <i className="fas fa-thumbs-up likeIcon"></i>
                  </div>
                  <div className="recommendText">
                    <span className="recommendPercent">94% </span>
                    <span className="recommendLabel">Recommended</span>
                  </div>
                </div>

                <div className="hospitalStat">
                  <div className="hospitalIcon">
                    <i className="fas fa-hospital buildingIcon"></i>
                  </div>
                  <span className="hospitalName">{doctorData?.address}</span>
                </div>
              </div>

              <div className="acceptingPatients">
                <div className="acceptingIcon">
                  <i className="fas fa-check-circle checkIcon"></i>
                </div>
                <span className="acceptingText">Accepting New Patients</span>
              </div>
            </div>
          </div>

          <div className="bannerActions">
            <button className="chatButton">
              <i className="fas fa-comment-dots chatIcon"></i>
              <span className="chatText">Chat</span>
            </button>

            <div className="appointmentSection">
              <p className="priceInfo">
                <span className="priceLabel">Price : $ {doctorData?.fee} </span>
                <span className="sessionLabel">for a Session</span>
              </p>
              <Link to={`/booking/${doctorData?._id}`} className="bookButton">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="BioSection">
          <div className="sectionHeader">
            <h3 className="sectionTitle">Doctor Bio</h3>
            {/* <div className="controlButtons">
            <button className="controlButton">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="controlButton">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div> */}
          </div>
          <p className="mt-3">
            "Highly motivated and experienced doctor with over {doctorData?.experience} years of
            clinical practice, Dr. {capitalizeFirstLetter(doctorData?.firstName)}{" "}
            {capitalizeFirstLetter(doctorData?.lastName)} has a strong passion for providing
            excellent care to patients. Specialized in {doctorData?.specialization} and
            well-versed in a wide variety of medical settings, with expertise in
            diagnostics, primary care, and emergency medicine. Skilled in
            utilizing the latest medical technology to streamline and enhance
            patient care. Committed to delivering compassionate, personalized
            care to every child and family."
          </p>
        </div>

        <div className="availabilitySection">
          <div className="sectionHeader">
            <h3 className="sectionTitle">Availability</h3>
            {/* <div className="controlButtons">
            <button className="controlButton">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="controlButton">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div> */}
          </div>

          {/* <div className="timeSlots">
            {slots.map((slot, index) => (
              <div key={index} className="timeSlot">
                <h4 className="slotDate">{slot.date}</h4>
                <p className="slotTime">{slot.time}</p>
              </div>
            ))}
          </div> */}
          <div className="timeSlots">
            {doctorData?.timeSlots?.map((slot, index) => (
              <div key={slot._id || index} className="timeSlot">
                <p className="slotTime">
                  {slot.startTime} - {slot.endTime}
                </p>
              </div>
            )) || <p>No available time slots.</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorDetail;
