import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${id}`).then((response)=>{
            console.log(response);
            setValues({
                ...values,
                EmployeeName: response.data[0].EmployeeName,
                MobileNumber: response.data[0].MobileNumber,
                Department: response.data[0].Department,
                Salary: response.data[0].Salary
            });

        }).catch((error)=>{
            console.log(error);
        })
    }, [])

    const[values, setValues] = React.useState({
            EmployeeName: '',
            MobileNumber: '',
            Department: '',
            Salary: ''
        })

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/edit/${id}`, values).then((response)=>{
            console.log(response);
            navigate('/'); // Navigate back to the main page after update
        }).catch((error)=>{
            console.log(error);
        }       
        )
    }
    return (
        <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
            <div className='w-70 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Employee</h2>
                        <div className='mb-2'>
                            <label htmlFor=''>Employee Name:</label>
                            <input type="text"  placeholder='Enter Employee name' className='form-control' value={values.EmployeeName} onChange={e=> setValues({...values, EmployeeName:e.target.value})}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor=''>Mobile Number:</label>
                            <input type="tel"  placeholder='Enter Mobile number' className='form-control' value={values.MobileNumber} onChange={e=> setValues({...values, MobileNumber:e.target.value})}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor=''>Department:</label>
                            <input type="text"  placeholder='Enter Department' className='form-control' value={values.Department} onChange={e=> setValues({...values, Department:e.target.value})}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor=''>Salary:</label>
                            <input type="number"  placeholder='Enter Salary' className='form-control' value={values.Salary} onChange={e=> setValues({...values, Salary:e.target.value})}/>
                        </div>
                        <button type="submit" className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Edit