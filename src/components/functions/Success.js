import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center success'>
      <p className='h2 my-2'>
        Welcome back User
      </p>
      <p className='h3 my-2'>
        You have Successfully Logged in
      </p>
      <Link className='btn btn-primary btn-lg scr-btn  my-2' to='/'><i className="fa-solid fa-arrow-left"></i> Back to Home page</Link>
      <Link className='btn btn-primary btn-lg scr-btn  my-2' to='/invest'>Investment <i className="fa-solid fa-arrow-right"></i></Link>
      <Link className='btn btn-primary btn-lg scr-btn  my-2' to='/raise'>Raise Fund <i className="fa-solid fa-arrow-right"></i></Link>

    </div>
  )
}

export default Success;