import React from 'react'
import logo from '../imgs/logo.png'
import menu from '../imgs/MENU.svg'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';

const Userdash = ({ uid }) => {
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
    const id=uid;
    const User = () => {
        navigate(`/userlogin/${id}`);
    }
    return (
        <div className="container mt-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={`/userhome/${id}`}><img src={logo} className='logo' alt='Shayar' /></NavLink >
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link" aria-current="page" to={`/${id}`}>Invest</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link" aria-current="page" to={`/userraise/${id}`}>Raise</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link link" aria-current="page" href="#footer">Contact Us</a >
                            </li>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary mx-3 px-4" id='login' onClick={() => User()}>User</button>

                                <button className='btn btn-outline-danger mx-3 px-4' onClick={() => logout()}>Log Out</button>
                            </div>
                        </ul>
                    </div>
                    <div className='d-md-none d-lg-none d-block'>
                        <a className="navbar-brand" href="#footer"><img src={menu} className='menu' alt='Shayar' /></a >
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </div>
    )
}

export default Userdash;