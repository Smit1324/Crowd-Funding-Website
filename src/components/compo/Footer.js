import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../imgs/logo.png'
const Footer = () => {
    return (
        <div className="container-fluid foot" id='footer'>

            <div className="container">
                <footer className="d-flex flex-column py-2 my-5 position-relative">

                    <div className='d-flex mb-4 f0'>

                        <div className="mb-3">
                            <NavLink to='/'>
                                <img src={logo} className='logo img-fluid' alt='Shayar' />
                            </NavLink>
                            <p className="text-muted ms-4 lh-lg foot-sub">Shayar Community Pvt Ltd © 2022<br />All Rights Reserved</p>

                        </div>

                        <div className='d-flex mt-4 f1'>

                            <div className="mb-3 mx-5">
                                <h5 className='h5 foot-head mt-2'>Investors</h5>
                                <ul className="nav flex-column mt-3">
                                    <li className="nav-item mb-2">
                                        <NavLink className="nav-link foot-link p-0 text-muted" to="/login">Login</NavLink >
                                    </li>
                                    <li className="nav-item mb-2">
                                        <NavLink className="nav-link foot-link p-0 text-muted" to="/invest">Invest</NavLink >
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3 mx-5">
                                <h5 className='h5 foot-head mt-2'>StartUp</h5>
                                <ul className="nav flex-column mt-3">
                                    <li className="nav-item mb-2">
                                        <NavLink className="nav-link foot-link p-0 text-muted" to="/signup">SignUp</NavLink >
                                    </li>
                                    <li className="nav-item mb-2">
                                        <NavLink className="nav-link foot-link p-0 text-muted" to="/raise">Raise</NavLink >
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3 ms-5 f2">
                                <h5 className='h5 foot-head mt-2'>Get In Touch</h5>
                                <p className='text-muted mt-3 lh-lg f2-txt'>Ouestions or Feedback<br />Ask Us Anything</p>
                                <ul className="nav flex-row text-sm-center text-lg-left f2-icons">
                                    <li className="nav-item mb-2 me-2">
                                        <a className="ext-link" href="https://www.linkedin.com/company/shayar-community-private-limited/?originalSubdomain=in" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a >
                                    </li>
                                    <li className="nav-item mb-2 mx-2">
                                        <a className="ext-link" href="https://www.google.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook"></i></a >
                                    </li>
                                    <li className="nav-item mb-2 mx-2">
                                        <a className="ext-link" href="https://www.google.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-instagram"></i></a >
                                    </li>
                                    <li className="nav-item mb-2 ms-2">
                                        <a className="ext-link" href="https://www.shayar.me/" target="_blank" rel='noreferrer'><i className="fa-solid fa-square-arrow-up-right"></i></a >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='border-top border-dark-subtle py-5'>
                        <p className='text-muted ms-4'>Shayar is a new-age social networking platform where talented poetry writers & shayari lovers from all across the globe meet. At Shayar discover thousands of poetries in one scroll in photo, video & format and in 30+ categories so that you can surf according to your mood. We provide employee engagement programs in corporates where we can entertain & motivate employees through our priorities. We also organize open mics across cities in India.</p>
                        <p className='text-muted ms-4'>
                            Scroll through thousands of poetries at free of cost.
                        </p>
                        <div className='ms-4 mt-5'>
                            <p className='h6 text-muted foot-contact'> Shayar Community Pvt Ltd (CIN : xxxxxxxxxxxxxxxxxxxxx)
                            </p>

                            <p className='mt-3'><a href="#footer" className='text-decoration-none  foot-cnt'><i className="fa-solid fa-phone"></i> +91 70435 07789</a></p>

                            <p className='mt-0'><a href="#footer" className='text-decoration-none  foot-cnt'><i className="fa-solid fa-envelope"></i> info@shayar.me</a></p>

                            <p className='mt-0'><a href="#footer" className='text-decoration-none  foot-cnt'><i className="fa-solid fa-location-dot"></i> G-405,Darshanam Plaza,
                                Danteshwar,Vadodara,
                                Gujarat 390004</a></p>

                        </div>
                    </div>


                </footer>
            </div>
        </div>
    )
}

export default Footer