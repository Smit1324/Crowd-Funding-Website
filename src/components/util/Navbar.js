import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import menu from '../imgs/MENU.svg'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [i, setI] = useState(1)
    const del=async()=>{
        await axios.delete(`https://6381c65053081dd549883e8c.mockapi.io/Crow-Funding/${i}`);
        setI(i+1);
    }
    return (
        <div className="container mt-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo} className='logo' alt='Shayar' /></NavLink >
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link px-3" aria-current="page" to="/invest">Invest</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link px-3" aria-current="page" to="/raise">Raise</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link link px-3" aria-current="page" href="#footer">Contact Us</a >
                            </li>
                            <div className="d-flex">
                                <Link className="btn btn-outline-success btn-lg mx-4" id='login' to='/login'>Login</Link>

                                <Link className="btn btn-outline-primary btn-lg" id='signup' to='/signup'>Sign Up</Link>

                                {/* <button classname="btn btn-outline-danger btn-lg" onClick={()=>del()}>Delete User</button> */}

                            </div>
                        </ul>
                    </div>
                    <div className='d-md-none d-lg-none d-block'>
                        <a className="navbar-brand" href="#footer"><img src={menu} className='menu' alt='Shayar' /></a >
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;