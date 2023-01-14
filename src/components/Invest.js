import React from 'react'
import { NavLink } from 'react-router-dom'
import invest from '../imgs/invest.png'

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


      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">

        <div className="col">
          <div className="card shadow-sm">
            <img src={invest} className="card-img-top img-fluid" width="100%" height="225" />
            <div className="card-body text-center">
              <p className="card-textr">
                <h3>METEOR 350</h3>
                ROYAL ENFIELD
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-light px-4">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm text-bg-dark">
            <img src={invest} className="card-img-top hover" width="100%" height="225" />

            <div className="card-body text-center">
              <p className="card-textr">
                <h3>INTERCEPTOR</h3>
                ROYAL ENFIELD
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-light px-4">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm text-bg-dark">
            <img src={invest} className="card-img-top hover" width="100%" height="225" />

            <div className="card-body text-center">
              <p className="card-textr">
                <h3>SCRAM 411</h3>
                ROYAL ENFIELD
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-light px-4">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>


    </div>
  )
}

export default Invest;