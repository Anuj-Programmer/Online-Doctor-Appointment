import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import toast, { Toaster } from "react-hot-toast";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../styles/BookingPage.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBookingDoctorData = async () => {
    try {
      const res = await axios.get(`/api/v1/doctor/${doctorId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch doctor details");
    }
  };

  const confirmBooking = async () => {
    try {
      const parsedTimeSlot = JSON.parse(selectedSlot);
      const { _id, ...cleanTimeSlot } = parsedTimeSlot;

      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId,
          date: selectedDate,
          timeSlot: cleanTimeSlot,
          fee: doctor.fee,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.data.success) {
        toast.success("Appointment booked successfully");
        setTimeout(() => {
          navigate("/appointment");
        }, 1000); // navigate after 1 second
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Booking error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "Failed to book appointment");
      } else {
        toast.error("Error while booking appointment");
      }
    } finally {
      setShowModal(false);
    }
  };

  const handleBookClick = () => {
    if (!selectedDate || !selectedSlot) {
      toast.error("Please select both date and time slot");
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target.className === "modal-overlay-booking") {
      closeModal();
    }
  };

  const getBookedSlots = async () => {
    if (!selectedDate) return;

    setLoadingSlots(true);
    try {
      const res = await axios.post(
        "/api/v1/user/get-booked-slots",
        { doctorId, date: selectedDate },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      if (res.data.success) {
        setBookedSlots(res.data.data || []);
      } else {
        setBookedSlots([]);
        toast.error(res.data.message || "Failed to fetch booked slots");
      }
    } catch (error) {
      console.log(error);
      setBookedSlots([]);
      toast.error(error.response?.data?.message || "Failed to fetch booked slots");
    } finally {
      setLoadingSlots(false);
    }
  };

  useEffect(() => {
    getBookedSlots();
  }, [selectedDate]);

  useEffect(() => {
    getBookingDoctorData();
  }, [doctorId]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="booking-page">
        <Nav />
        <Toaster position="top-center" />
        <div className="contact-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="header-left-image"
            alt="Decorative left element"
          />
          <h1 className="contact-title">Book an Appointment</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="header-right-image"
            alt="Decorative right element"
          />
        </div>

        <div className="booking-container">
          {doctor && (
            <div className="doctor-card-booking">
              <div className="doctor-info-booking">
                <h2 className="doctor-name-booking">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h2>
                <p className="doctor-details-booking">
                  Specialization: {doctor.specialization}
                </p>
                <p className="doctor-details-booking">
                  Experience: {doctor.experience} years
                </p>
                <p className="doctor-details-booking">
                  Address: {doctor.address}
                </p>
                <p className="doctor-fee-booking">Fee: Rs{doctor.fee}</p>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label className="form-label">Select Appointment Date</label>
                  <DatePicker
                    className="form-control"
                    onChange={(date, dateString) => {
                      const selectedDateObj = dayjs(date);
                      const today = dayjs().startOf("day");

                      if (selectedDateObj.isBefore(today)) {
                        toast.error("Cannot select a past date");
                        setSelectedDate(null);
                        setSelectedSlot("");
                        return;
                      }
                      setSelectedDate(dateString);
                      setSelectedSlot("");
                    }}
                    format="YYYY-MM-DD"
                    disabledDate={(current) => {
                      return current && current < dayjs().startOf("day");
                    }}
                  />
                </div>

                {selectedDate && (
                  <div className="form-group">
                    <label className="form-label">Select Time Slot</label>
                    {loadingSlots ? (
                      <div className="loading-slots">
                        Loading available time slots...
                      </div>
                    ) : (
                      <select
                        className="form-control"
                        value={selectedSlot}
                        onChange={(e) => {
                          const selected = JSON.parse(e.target.value);
                          const isBooked = bookedSlots.some(
                            (slot) =>
                              slot.startTime === selected.startTime &&
                              slot.endTime === selected.endTime
                          );

                          if (isBooked) {
                            toast.error("This slot is already booked!");
                          } else {
                            setSelectedSlot(e.target.value);
                          }
                        }}
                      >
                        <option value="">Choose a time slot</option>
                        {doctor.timeSlots &&
                          doctor.timeSlots.map((slot, index) => {
                            const isBooked = bookedSlots.some(
                              (booked) =>
                                booked.startTime === slot.startTime &&
                                booked.endTime === slot.endTime
                            );

                            return (
                              <option
                                key={index}
                                value={JSON.stringify(slot)}
                                disabled={isBooked}
                                style={
                                  isBooked ? { backgroundColor: "#ccc" } : {}
                                }
                              >
                                {slot.startTime} - {slot.endTime}{" "}
                                {isBooked ? "(Booked)" : ""}
                              </option>
                            );
                          })}
                      </select>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  className="booking-button"
                  onClick={handleBookClick}
                  disabled={!selectedDate || !selectedSlot}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay-booking" onClick={handleModalClick}>
          <div className="modal-content-booking">
          <div className="modal-close" onClick={closeModal}>×</div> {/* Add close button */}
            <h2>Select Payment Method</h2>
            <div className="modal-images-booking">
              <img
                src="https://esewa.com.np/common/images/esewa.png"
                alt="eSewa"
                onClick={confirmBooking}
              />
              <img
                src="https://khalti-static.s3.ap-south-1.amazonaws.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg"
                alt="Khalti"
                onClick={confirmBooking}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default BookingPage;
