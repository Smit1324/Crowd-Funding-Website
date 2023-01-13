import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import first from '../imgs/first_img.png'

const Home = () => {
  return (
    <div className='container mt-lg-5 mt-3 d-flex flex-wrap position-relative'>

      <div
        className="row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 home">
        <div className="col mb-2 ps-4 d-flex flex-column position-static">
          <div className='h1 head'>Invest In<br />Our Startup at<br /> <NavLink to='#' className='head-comp'>Shayar</NavLink> Community
          </div>
          <div className='h6 sub-head mt-2'>Providing Platform for all talented Souls || Start <br />Investment with as small amount as <i className="fa-solid fa-indian-rupee-sign"></i> 5000
          </div>
          <div className='mt-3'>
            <Link className='btn btn-primary btn-lg scr-btn' to='/invest'>Invest Now <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className='h6 sub d-flex mt-4'>Already a member? <NavLink to='/login' className='login-link'>Login</NavLink></div>
        </div>

        <div className='col-auto d-lg-block'>
          <img src={first} alt="img" className='first_img img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Home;