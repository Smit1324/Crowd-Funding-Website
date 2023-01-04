import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import first from '../imgs/first_img.png'

const Home = () => {
  return (
    <div className='container mt-5 d-flex position-relative'>
      <div className='d-flex flex-column'>
        <div className='h1 head'>Invest In<br />Our Startup at<br /> <NavLink to='#' className='head-comp'>Shayar</NavLink> Community</div>
        <div className='h6 sub-head mt-2'>Providing Platform for all talented Souls || Start <br />Investment with as small amount as <i class="fa-solid fa-indian-rupee-sign"></i> 5000</div>
        <div className='mt-3'>
          <Link className='btn btn-primary btn-lg' id='invest' to='/invest'>Invest Now <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className='h6 sub d-flex mt-4'>Already a member? <NavLink to='/login' className='login-link'>Login</NavLink></div>
      </div>

      <div>
        <img src={first} alt="img" className='first_img'/>
      </div>
    </div>
  )
}

export default Home;