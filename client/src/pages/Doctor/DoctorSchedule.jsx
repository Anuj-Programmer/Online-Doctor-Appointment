import React, {useState, useEffect} from 'react'
import "../../styles/schedule.css"
import { Form, Input, Row, Col, Button, Select } from "antd";
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function DoctorSchedule() {
    const [timeSlots, setTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchTimeSlots = async () => {
            try {
                const response = await axios.get(`/api/v1/doctor/time-slots/${user._id}`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                if (response.data.success) {
                    setTimeSlots(response.data.data.map((slot, index) => ({
                        id: index + 1,
                        startTime: slot.startTime,
                        endTime: slot.endTime
                    })) || []);
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Error fetching time slots:', error);
                toast.error('Error fetching time slots');
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchTimeSlots();
        }
    }, [user]);

    const addTimeSlot = () => {
        const newSlot = { id: timeSlots.length + 1 };
        setTimeSlots([...timeSlots, newSlot]);
    };
  
    const removeTimeSlot = (id) => {
        if (timeSlots.length > 1) {
            setTimeSlots(timeSlots.filter((slot) => slot.id !== id));
        }
    };

    const handleSave = async () => {
        try {
            // Validate all time slots have both start and end times
            const hasEmptySlots = timeSlots.some(slot => !slot.startTime || !slot.endTime);
            if (hasEmptySlots) {
                toast.error('Please fill in all time slots');
                return;
            }

            const formattedSlots = timeSlots.map(slot => ({
                startTime: slot.startTime,
                endTime: slot.endTime
            }));

            const response = await axios.put(
                `/api/v1/doctor/time-slots/${user._id}`,
                { timeSlots: formattedSlots },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
            );

            if (response.data.success) {
                toast.success('Time slots updated successfully!');
                // Update local state with the saved time slots
                setTimeSlots(response.data.data.map((slot, index) => ({
                    id: index + 1,
                    startTime: slot.startTime,
                    endTime: slot.endTime
                })));
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error saving time slots:', error);
            toast.error(error.response?.data?.message || 'Error saving time slots');
        }
    };

    if (!user) {
        return <div className="error-container">Please log in to access this page</div>;
    }

    if (loading) {
        return <div className="loading-container">Loading time slots...</div>;
    }

    return (
        <main className="schedule-content">
            <h2 className="schedule-title">Available Time Slots</h2>
            <div className="schedule-container">
                <div className="time-slots">
                    {timeSlots.map((slot) => (
                        <div
                            key={slot.id}
                            className="time-slot"
                            style={{ display: "flex", alignItems: "center", gap: "8px" }}
                        >
                            <Form.Item
                                name={`startTime${slot.id}`}
                                rules={[
                                    { required: true, message: "Start time required!" },
                                ]}
                            >
                                <Input 
                                    type="time" 
                                    defaultValue={slot.startTime}
                                    onChange={(e) => {
                                        const updatedSlots = timeSlots.map(s => 
                                            s.id === slot.id ? {...s, startTime: e.target.value} : s
                                        );
                                        setTimeSlots(updatedSlots);
                                    }}
                                />
                            </Form.Item>
                            <span>to</span>
                            <Form.Item
                                name={`endTime${slot.id}`}
                                rules={[{ required: true, message: "End time required!" }]}
                            >
                                <Input 
                                    type="time" 
                                    defaultValue={slot.endTime}
                                    onChange={(e) => {
                                        const updatedSlots = timeSlots.map(s => 
                                            s.id === slot.id ? {...s, endTime: e.target.value} : s
                                        );
                                        setTimeSlots(updatedSlots);
                                    }}
                                />
                            </Form.Item>
                            {timeSlots.length > 1 && (
                                <Button danger onClick={() => removeTimeSlot(slot.id)}>
                                    ×
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                <Button className='timeslot-btn'
                    type="dashed"
                    onClick={addTimeSlot}
                    style={{ marginBottom: 16 }}
                >
                    + Add Another Time Slot
                </Button> </div>  
            </div>
            <button className="save-changes-btn" onClick={handleSave}>Save Changes</button>
            <Toaster position="top-center" />
        </main>
    )
}

export default DoctorSchedule
