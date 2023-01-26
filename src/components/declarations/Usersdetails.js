import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admindash from '../util/Admindash'
import Adminnav from '../util/Adminnav';

const Usersdetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get("https://6381c65053081dd549883e8c.mockapi.io/Crow-Funding");
        setUsers(res.data);
    }
    return (
        <>
            <Admindash />
            <Adminnav />
            <div className='container shadow my-5 color'>

                <p className='text-center h2 p-4'>USER DETAILS</p>
                <div className='py-4 px-3'>
                    <table className="table table-striped">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">Sr.no</th>
                                <th scope="col">User Name</th>
                                <th scope="col" className='hidden'>Invested</th>
                                <th scope="col" className='hidden'>Startups</th>
                                <th scope='col'>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>

                                        <th scope='row' className='ps-3'>{index + 1}</th>
                                        <td>{user.firstName} {user.lastName}</td>
                                        <td className='hidden ps-4'>0</td>
                                        <td className='hidden ps-4'>0</td>
                                        <td>
                                            <Link className="btn btn-outline-primary btn-sm ms-3" to="/adminlogin/userdetails/viewuser"><i className="fa-solid fa-eye"></i></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Usersdetails