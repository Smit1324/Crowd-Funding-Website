import React from 'react'
import logo from '../imgs/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container mt-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo} className='logo img-fluid' alt='Shayar' /></NavLink >

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
                            <div className="flex">
                                <Link className="btn btn-outline-info btn-lg mx-4" id='login'>Login</Link>
                                
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