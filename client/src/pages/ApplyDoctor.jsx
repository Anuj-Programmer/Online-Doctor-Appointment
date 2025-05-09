import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { Form, Input, Row, Col, message, Button, Select } from "antd";
import "../styles/ApplyDoctor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import toast, { Toaster } from "react-hot-toast";
import LandingPageNav from "../Components/LandingPageNav";
const { Option } = Select;
import { uploadToCloudinary } from "../lib/uploadToCloudinary";

function ApplyDoctor() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [timeSlots, setTimeSlots] = useState([{ id: 1 }]);

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

  useEffect(() => {
    getUserData();
  }, []);

  // useEffect(() => {
  //   if (!user) {
  //     alert("Please login first");
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 1000);
  //   }
  // }, [user, navigate]);

  const addTimeSlot = () => {
    const newSlot = { id: timeSlots.length + 1 };
    setTimeSlots([...timeSlots, newSlot]);
  };

  const removeTimeSlot = (id) => {
    if (timeSlots.length > 1) {
      setTimeSlots(timeSlots.filter((slot) => slot.id !== id));
    }
  };

  const onfinishHandler = async (values) => {
    try {
      const token = localStorage.getItem("token");
      // if (!token || !user?._id) {
      //   message.error("Please login first");
      //   console.log(token);
      //   console.log(user?._id);

      //   alert("Please token first");
      //   setTimeout(() => {
      //     navigate("/login");
      //   }, 1000);
      //   return;
      // }

      const doctorData = {
        userId: user._id,
        firstName: values.firstName,
        lastName: values.lastName,
        certificate: values.certificate,
        phoneNumber: values.phoneNumber,
        address: values.address,
        specialization: values.specialization,
        experience: Number(values.experience),
        fee: Number(values.fee),
        timeSlots: timeSlots.map((slot) => ({
          startTime: values[`startTime${slot.id}`],
          endTime: values[`endTime${slot.id}`],
        })),
      };

      const response = await axios.post("/api/v1/doctor/apply", doctorData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        toast.success("You have successfully applied as a doctor");
        // message.success(response.data.message);
        // alert("You have successfully applied as a doctor");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toast.error("You have already applied as a doctor");
        // alert("You have already applied as a doctor");
        // message.error(response.data.message);
      }
    } catch (error) {
      console.error("Error details:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
      // message.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];
      console.log("File", file);

      const response = await uploadToCloudinary(file);
      console.log(response);
      // Update the 'certificate' field in the form
      form.setFieldsValue({
        certificate: response.secure_url,
      });
    } catch (error) {
      toast.error("Image upload failed");
    console.error(error);
    }
  };

  return (
    <>
      {/* <LandingPageNav/> */}
      <Nav />
      <Toaster />
      <div className="doc-register-container">
        <main className="main-content-apply">
          <div className="form-container-apply">
            <h2 className="form-title">Apply as a Doctor</h2>
            <p className="form-subtitle">
              Join our network of healthcare professionals
            </p>

            <Form
              form={form}
              layout="vertical"
              onFinish={onfinishHandler}
              className="doctor-form"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your first name!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter first name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input addonBefore="+977" placeholder="Enter phone number" />
              </Form.Item>

              <Form.Item
                label="Certificate Image"
                name="certificate"
                rules={[
                  {
                    required: true,
                    message: "Please upload your certificate!",
                  },
                ]}
              >
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address!" },
                ]}
              >
                <Input.TextArea placeholder="Enter your complete address" />
              </Form.Item>

              <Form.Item
                label="Specialization"
                name="specialization"
                rules={[
                  {
                    required: true,
                    message: "Please select your specialization!",
                  },
                ]}
              >
                <Select placeholder="Select Specialization">
                  <Option value="cardiology">Cardiology</Option>
                  <Option value="dermatology">Dermatology</Option>
                  <Option value="neurology">Neurology</Option>
                  <Option value="orthopedics">Orthopedics</Option>
                  <Option value="pediatrics">Pediatrics</Option>
                </Select>
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Years of Experience"
                    name="experience"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your experience!",
                      },
                    ]}
                  >
                    <Input type="number" min="0" placeholder="Enter years" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Fee Per Consultation"
                    name="fee"
                    rules={[
                      {
                        required: true,
                        message: "Please enter consultation fee!",
                      },
                    ]}
                  >
                    <Input
                      prefix="$"
                      type="number"
                      min="0"
                      placeholder="Enter amount"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div>
              <span className="text-danger">*</span> Time Slots
              </div>
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
                    <Input type="time" />
                  </Form.Item>
                  <span>to</span>
                  <Form.Item
                    name={`endTime${slot.id}`}
                    rules={[{ required: true, message: "End time required!" }]}
                  >
                    <Input type="time" />
                  </Form.Item>
                  {timeSlots.length > 1 && (
                    <Button danger onClick={() => removeTimeSlot(slot.id)}>
                      ×
                    </Button>
                  )}
                </div>
              ))}

              <Button
                type="dashed"
                onClick={addTimeSlot}
                style={{ marginBottom: 16 }}
              >
                + Add Another Time Slot
              </Button>

              <Form.Item>
                <button className="apply-btn" type="submit">
                  Apply Now
                </button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </div>
    </>
  );
}

export default ApplyDoctor;
