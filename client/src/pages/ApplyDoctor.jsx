import React from "react";
import Nav from "../Components/Nav";
import { Form, Input } from "antd";
import "../styles/ApplyDoctor.css"

function ApplyDoctor() {
  const onfinishHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Nav />

      Apply doctor page
    </div>
  );
}

export default ApplyDoctor;
  