import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import raise from '../imgs/raise_graph.png'

const Raise = () => {
  return (
    <div className='container mt-5 d-flex position-relative'>
      <div className='ms-4 d-flex flex-column'>
        <div className='h1 head'>Raise<br /><NavLink to='#' className='raise-head-comp'>Founder - Friendly<br /></NavLink> Capital</div>
        <div className='h6 sub-head mt-3'>Raise funds while increasing product sales, growing your<br />brand, and engaging your community.</div>
        <div className='mt-4'>
          <Link className='btn btn-primary btn-lg sc-btn w-50' to='/invest'>Raise Capital</Link>
        </div>
      </div>

      <div>
        <img src={raise} alt="img" className='raise_img' />
      </div>
    </div>
  )
}

export default Raise;