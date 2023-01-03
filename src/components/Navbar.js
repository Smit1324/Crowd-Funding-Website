import React from 'react'
import logo from '../imgs/logo.png'
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} className='logo'/></a>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <a className="nav-link active link" aria-current="page" href="#">Invest</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link link" aria-current="page" href="#">Raise</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link link" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <div className="flex">
                                <button type="button" className="btn btn-outline-info btn-lg mx-4" id='login'>Login</button>
                                {/* <div className='ver_div'></div> */}
                                <button type="button" className="btn btn-outline-primary btn-lg" id='signup'>Sign Up</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;