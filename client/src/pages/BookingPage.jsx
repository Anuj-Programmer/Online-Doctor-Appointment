import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DatePicker } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/features/userSlice';
// import 'antd/dist/reset.css';
import { toast, Toaster } from 'react-hot-toast';

function BookingPage() {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const { doctorId } = useParams();
    
    // const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    // const [loading, setLoading] = useState(false);
    const getUserData = async () => {
        try {
            const res = await axios.post('/api/v1/user/getUserData', {}, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
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
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            if (res.data.success) {
                setDoctor(res.data.data);   

            }
        } catch (error) {
            console.log(error);
            // toast.error('Failed to fetch doctor details');
        }
    };

    const handleBookAppointment = async () => {
        try {
            if (!selectedDate || !selectedSlot) {
                toast.error('Please select both date and time slot');
                return;
            }

            const parsedTimeSlot = JSON.parse(selectedSlot);
            // Remove _id from timeSlot if it exists
            const { _id, ...cleanTimeSlot } = parsedTimeSlot;

            const res = await axios.post('/api/v1/user/book-appointment', {
                doctorId,
                date: selectedDate,
                timeSlot: cleanTimeSlot,
                fee: doctor.fee
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            
            if (res.data.success) {
                toast.success('Appointment booked successfully');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error('Booking error:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                toast.error(error.response.data.message || 'Failed to book appointment');
            } else if (error.request) {
                // The request was made but no response was received
                toast.error('No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                toast.error('Error setting up appointment request');
            }
        }
    };


    useEffect(() => {
        getBookingDoctorData();
    }, [doctorId]);

    useEffect(() => {
        getUserData();
    }, []);

    console.log("Doctor ID", doctorId);
    console.log("User ID", user?.email);
    
    
    return (
        <div className="container mx-auto px-4 py-8">
            <Toaster position="top-center"/>
            <h1 className="text-3xl font-bold mb-8">Book Appointment</h1>

            {doctor && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">
                            Dr. {doctor.firstName} {doctor.lastName}
                        </h2>
                        <p className="text-gray-600 mb-1">
                            Specialization: {doctor.specialization}
                        </p>
                        <p className="text-gray-600 mb-1">
                            Experience: {doctor.experience} years
                        </p>
                        <p className="text-gray-600 mb-1">
                            Address: {doctor.address}
                        </p>
                        <p className="text-gray-600 mb-4">
                            Fee: ${doctor.fee}
                        </p>
                    </div>

                    <form>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Select Appointment Date
                            </label>
                            <DatePicker
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(date, dateString) => setSelectedDate(dateString)}
                                format="YYYY-MM-DD"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Select Time Slot
                            </label>
                            <select
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedSlot}
                                onChange={(e) => setSelectedSlot(e.target.value)}
                            >
                                <option value="">Choose a time slot</option>
                                {doctor.timeSlots && doctor.timeSlots.map((slot, index) => (
                                    <option key={index} value={JSON.stringify(slot)}>
                                        {slot.startTime} - {slot.endTime}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-blue-500 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                            onClick={handleBookAppointment}
                        >
                            Book Appointment
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default BookingPage;
