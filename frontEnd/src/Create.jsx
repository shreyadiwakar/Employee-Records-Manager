import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const[values, setValues] = React.useState({
        EmployeeName: '',
        MobileNumber: '',
        Department: '',
        Salary: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/employees', values).then((response)=>{
            console.log(response);
            navigate('/');
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
        <div className='w-70 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Employee</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Employee Name:</label>
                        <input type="text"  placeholder='Enter Employee name' className='form-control' onChange={e=> setValues({...values, EmployeeName:e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Mobile Number:</label>
                        <input type="tel"  placeholder='Enter Mobile number' className='form-control' onChange={e=> setValues({...values, MobileNumber:e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Department:</label>
                        <input type="text"  placeholder='Enter Department' className='form-control' onChange={e=> setValues({...values, Department:e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Salary:</label>
                        <input type="number"  placeholder='Enter Salary' className='form-control' onChange={e=> setValues({...values, Salary:e.target.value})}/>
                    </div>
                    <button type="submit" className='btn btn-primary'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default Create