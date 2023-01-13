import React from 'react'
import { NavLink } from 'react-router-dom'
import raise from '../imgs/raise.png'

const Invest = () => {
  return (
    <div className='container mt-lg-5 mt-3'>
      <div
        className="row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 raise">
        <div className="col mb-2 ps-4 d-flex flex-column position-static">
          <div className='h1 head'>
          <NavLink to='#' className='invest-head-comp'>Invest Now</NavLink>
          </div>
          <div className='h6 sub-head mt-2'>
            Browse latest investment opportunities in SHAYAR
          </div>
        </div>
      </div>
      <div className='my-5'>
        <div className='row'>
          <div
            className="mt-4 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative raise-cards">
            <div className="col py-5 px-4 d-flex flex-column position-static">
              <h3 className="mb-0">Heading</h3>
              <p className="card-text mb-auto mt-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum aperiam cupiditate deleniti officiis esse fuga voluptatem, assumenda, ratione autem molestiae libero voluptatibus aspernatur dolorum, est
              </p>
            </div>
            <div className="col-auto py-4 px-4 d-none d-lg-block">
              <img src={raise} alt="img" className="bd-placeholder-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invest;