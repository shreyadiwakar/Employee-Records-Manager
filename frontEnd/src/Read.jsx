import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const {id} = useParams();
    const [data, setData] = React.useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${id}`).then((response)=>{
            console.log(response);
            setData(response.data);

        }).catch((error)=>{
            console.log(error);
        })
    }, [])
  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
        <div className='w-70 bg-white rounded p-3'>
            <h1>Employee Details</h1>
            <p><strong>Employee ID:</strong> {data[0]?.EmployeeID}</p>
            <p><strong>Employee Name:</strong> {data[0]?.EmployeeName}</p>
            <p><strong>Mobile Number:</strong> {data[0]?.MobileNumber}</p>
            <p><strong>Department:</strong> {data[0]?.Department}</p>
            <p><strong>Salary:</strong> {data[0]?.Salary}</p>
            <Link to="/" className='btn btn-primary'>Back</Link>
            <Link to={`/Edit/${id}`} className='btn btn-warning mx-2'>Edit</Link>
        </div>
    </div>
  )
}

export default Read