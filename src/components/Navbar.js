import React from 'react'
import logo from '../imgs/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container mt-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo} className='logo' alt='Shayar' /></NavLink >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link" aria-current="page" to="/invest">Invest</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link" aria-current="page" to="/raise">Raise</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link" aria-current="page" to="/contactus">Contact Us</NavLink >
                            </li>
                            <div className="d-flex">
                                <Link className="btn btn-outline-success btn-lg mx-4" id='login' to='/login'>Login</Link>

                                <Link className="btn btn-outline-primary btn-lg" id='signup' to='/signup'>Sign Up</Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;