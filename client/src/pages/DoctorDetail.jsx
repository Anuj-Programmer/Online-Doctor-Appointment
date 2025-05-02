import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const DoctorDetail = () => {
    const {doctorId} = useParams();
const [doctorData, setDoctorData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const getDoctorData = async () => {
    try {
      const res = await axios.get(`/api/v1/doctor/${doctorId}`, {
        headers:{
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      if(res.data.success) {
        setDoctorData(res.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDoctorData()
  }, [])


  console.log(doctorData)
  return (
    <div>
      <h1>Doctor Detail</h1>
      <p>{doctorData?.firstName}</p>
      <p>Doctor ID: {doctorId}</p>

    </div>
  )
}

export default DoctorDetail
