import React from 'react'
import logo from '../imgs/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const Admindash = () => {
    const navigate = useNavigate();
    const logout = () => {
        toast.info('Logged Out', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => navigate('/'), 3000);
    }
    return (
        <div className="container mt-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/adminlogin/ahome"><img src={logo} className='logo' alt='Shayar' /></NavLink >
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <div className="d-flex">
                                <Link className="btn btn-outline-primary btn-lg mx-4" id='login' to='/adminlogin'>Admin</Link>
                                <button className='btn btn-outline-danger mx-3 px-4' onClick={() => logout()}>Log Out</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </div>
    )
}

export default Admindash;