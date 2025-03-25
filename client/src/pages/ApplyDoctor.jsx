import React from "react";
import Nav from "../Components/Nav";
import { Form, Input, Row, Col, message } from "antd";
import "../styles/ApplyDoctor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApplyDoctor() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onfinishHandler = async (values) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        message.error("Please login first");
        navigate("/login");
        return;
      }
      
      const response = await axios.post(
        "/api/v1/doctor/apply",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        message.success(response.data.message);
        navigate("/");
      } else {
        message.error(response.data.message);
        alert("Doctor already applied with this email or phone number");
      }
    } catch (error) {
      console.error("Error details:", error);
      message.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Nav />
      <div className="apply-doctor-container">
        <h1 className="text-center">Apply Doctor</h1>
        <div className="form-container">
          <Form 
            form={form}
            layout="vertical" 
            onFinish={onfinishHandler}
          >
            <Row gutter={20}>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="firstName" 
                  label="First Name"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="lastName" 
                  label="Last Name"
                  rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="phone" 
                  label="Phone"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="email" 
                  label="Email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="address" 
                  label="Address"
                  rules={[{ required: true, message: 'Please input your address!' }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="specialization" 
                  label="Specialization"
                  rules={[{ required: true, message: 'Please input your specialization!' }]}
                >
                  <Input placeholder="Specialization" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="experience" 
                  label="Experience"
                  rules={[{ required: true, message: 'Please input your experience!' }]}
                >
                  <Input placeholder="Experience in years" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="feePerConsultation" 
                  label="Fee Per Consultation"
                  rules={[{ required: true, message: 'Please input your consultation fee!' }]}
                >
                  <Input type="number" placeholder="Consultation Fee" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item 
                  name="timings" 
                  label="Available Timings"
                  rules={[{ required: true, message: 'Please input your available timings!' }]}
                >
                  <Input.TextArea 
                    placeholder="Enter timings (comma separated) e.g., 9:00 AM - 10:00 AM, 2:00 PM - 3:00 PM"
                    onChange={(e) => {
                      // Convert comma-separated string to array before submission
                      const timingsArray = e.target.value.split(',').map(time => time.trim());
                      form.setFieldsValue({ timings: timingsArray });
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className="submit-button-container">
              <button className="submit-button" type="submit">
                Submit Application
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ApplyDoctor;
  