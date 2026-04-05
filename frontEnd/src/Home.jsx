import React,{useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Home = () => {
    const [data, setData] = React.useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/').then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }, [])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3000/delete/${id}`).then((response)=>{
            setData(data=>data.filter((employee)=>employee.EmployeeID !== id));
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
        <div className='w-70 bg-white rounded p-3'>
            <h2>Employee Records</h2>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Create +</Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>EmployeeID</th>
                        <th>EmployeeName</th>
                        <th>MobileNumber</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((Employee)=>{
                        return (
                            <tr key={Employee.EmployeeID}>
                                <td>{Employee.EmployeeID}</td>
                                <td>{Employee.EmployeeName}</td>
                                <td>{Employee.MobileNumber}</td>
                                <td>{Employee.Department}</td>
                                <td>{Employee.Salary}</td>
                                <td>
                                    <Link to={`/read/${Employee.EmployeeID}`} className='btn btn-sm btn-info'>Read </Link>
                                    <Link to={`/edit/${Employee.EmployeeID}`} className='btn btn-sm btn-warning mx-2'>Edit </Link>
                                    <button className='btn btn-sm btn-danger' onClick={()=>handleDelete(Employee.EmployeeID)}>Delete </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
