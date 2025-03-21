import React from "react";
import { Form, Input } from "antd";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
    const onfinishHandler = async (values) => {
      
        try {
          const res = await axios.post("/api/v1/user/login", values)
          if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            alert("Login Sucessfull")
            setTimeout(() => navigate('/'), 1000); 
          }
        } catch (error) {
          alert("Invalid email or password")
        }
      };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h1 className="text-center"> Login form</h1>
         
          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="Enter Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Enter Password" />
          </Form.Item>

          <button className="btn btn-primary w-100 mb-3" type="submit">
            Login
          </button>
          <p>
            Dont have an account?{" "}
            <Link to="/register" className="ms-2">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
}


