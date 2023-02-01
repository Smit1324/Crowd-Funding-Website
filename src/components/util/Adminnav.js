import React from 'react'
import { Link } from 'react-router-dom';

const Adminnav = () => {
    return (
        <>
            <div className='container d-flex justify-content-around my-4 h-50 w-100'>
                <div className='d-flex w-50 justify-content-between'>
                    <Link className='btn btn-outline-dark px-5' to="/adminlogin/usersdetails">User details</Link>
                    <Link className='btn btn-outline-dark px-5' to="/adminlogin/companiesdetails">Investors details</Link>
                </div>

            </div>
        </>
    )
}

export default Adminnav