import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DatePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
// import 'antd/dist/reset.css';
import toast, { Toaster } from "react-hot-toast";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../styles/BookingPage.css";
import dayjs from "dayjs";

function ReschedulePage() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { doctorId } = useParams();

  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [appointmentData, setAppointmentData] = useState([]);

  // const [loading, setLoading] = useState(false);
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

  const fetchAppointmentData = async () => {
    try {
      console.log("User ID", user?._id);
      const res = await axios.post(
        `/api/v1/user/get-user-appointments`,
        {
          userId: user._id,
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      if (res.data.success) {
        setAppointmentData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppointmentData();
  }, [user?._id]);

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

  useEffect(() => {
    getBookedSlots();
  }, [selectedDate]);

  useEffect(() => {
    getBookingDoctorData();
  }, [doctorId]);

  useEffect(() => {
    getUserData();
  }, []);

  console.log(doctor);
  

  const handleRescheduleAppointment = async (
    appointmentId,
    newDate,
    newTimeSlot
  ) => {
    try {
      if (!appointmentId) {
        toast.error("No appointment selected for rescheduling.");
        return;
      }

      if (!newDate || !newTimeSlot) {
        toast.error("Please select both date and time slot");
        return;
      }

      // Validate that the selected date is not in the past
      const selectedDateObj = dayjs(newDate);
      const today = dayjs().startOf("day");

      if (selectedDateObj.isBefore(today)) {
        toast.error("Cannot reschedule to a past date");
        return;
      }

      const parsedTimeSlot = JSON.parse(newTimeSlot);
      const { _id, ...cleanTimeSlot } = parsedTimeSlot;
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/v1/user/reschedule-appointment`,
        {
          appointmentId,
          newDate,
          timeSlot: cleanTimeSlot,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success(
          "Appointment rescheduled successfully, waiting for doctor approval"
          
        );
        setTimeout(() => {
          navigate("/appointment");
        }, 1000);
        // Optionally navigate to appointments page or show success message
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
      toast.error("Failed to reschedule appointment");
    }
  };

  const getBookedSlots = async () => {
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
      toast.error(
        error.response?.data?.message || "Failed to fetch booked slots"
      );
    }
  };

  //   console.log("Doctor ID", doctorId);
  //   console.log("User ID", user?.email);

  return (
    <>
    <div className="booking-page">
      <Nav />
      {/* <Toaster position="top-center" /> */}
      <div className="contact-header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
          className="header-left-image"
          alt="Decorative left element"
        />
        <h1 className="contact-title">Reschedule Appointment</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
          className="header-right-image"
          alt="Decorative right element"
        />
      </div>
      <div className="booking-container">
        <Toaster position="top-center" />
        {/* <div className="booking-header">
                    <h1>Book Appointment</h1>
                </div> */}

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
              <p className="doctor-fee-booking">Fee: ${doctor.fee}</p>
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
                      return;
                    }
                    setSelectedDate(dateString);
                  }}
                  format="YYYY-MM-DD"
                  disabledDate={(current) => {
                    return current && current < dayjs().startOf("day"); // ✅ This is the corrected version
                  }}
                />
              </div>

              {selectedDate && (
                <div className="form-group">
                  <label className="form-label">Select Time Slot</label>
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
                            style={isBooked ? { backgroundColor: "#ccc" } : {}}
                          >
                            {slot.startTime} - {slot.endTime}{" "}
                            {isBooked ? "(Booked)" : ""}
                          </option>
                        );
                      })}
                  </select>
                </div>
              )}

              <button
                type="button"
                className="booking-button"
                onClick={() => {
                  if (!appointmentData.length || !appointmentData[0]._id) {
                    toast.error("No appointment found to reschedule.");
                    return;
                  }

                  if (!selectedDate || !selectedSlot) {
                    toast.error("Please select both date and time slot.");
                    return;
                  }

                  handleRescheduleAppointment(
                    appointmentData[0]._id,
                    selectedDate,
                    selectedSlot
                  );
                }}
              >
                Reschedule Appointment
              </button>
            </div>
          </div>
        )}
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default ReschedulePage;
