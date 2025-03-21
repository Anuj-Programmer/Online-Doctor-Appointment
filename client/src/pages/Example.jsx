
import React, { useState } from "react";
import '../styles/RegisterStyles.css'
import { Form, Input } from "antd";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [alert, setAlert] = useState({ message: '', type: '' }); // For managing the alert state
  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/v1/user/register', values);
      if (res.data.success) {
        setAlert({ message: 'Register Successfully', type: 'success' });
        setTimeout(() => navigate('/login'), 2000);  // Navigate after 2 seconds
      } else {
        setAlert({ message: "user already exists!", type: 'danger' });
      }
    } catch (error) {
      console.log(error);
      setAlert({ message: 'Something went Wrong', type: 'danger' });
    }
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
        <h1 className="text-center"> Register form</h1>

        {/* Display Bootstrap Alert */}
        {alert.message && (
          <div className={`alert alert-${alert.type} mt-3`} role="alert">
            {alert.message}
          </div>
        )}
       

        <Form.Item label="Name" name="name">
          <Input type="text" placeholder="Enter your name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter Email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder="Enter Password" />
        </Form.Item>
        
        <button className="btn btn-primary w-100 mb-3" type="submit">
          Register
        </button>
        <p>Already have an account? <Link to="/login" className="ms-2">Login</Link></p>
      </Form>
    </div>
  );
}

export default Register;
