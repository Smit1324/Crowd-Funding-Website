import React from 'react'
import { Link } from 'react-router-dom'
import Cards from "../declarations/Cards"
import Footer from '../util/Footer'
import Navbar from '../util/Navbar'

const Invest = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-lg-5 mt-3'>
        <div
          className="row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 inv">
          <div className="col mb-2 ps-4 d-flex flex-column position-static">
            <div className='h1 head'>
              <Link to='#' className='invest-head-comp'>Invest Now</Link>
            </div>
            <div className='h6 sub-head mt-2'>
              Browse latest investment opportunities in SHAYAR
            </div>
          </div>
        </div>


        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 ms-lg-5 ms-sm-2">
          <Cards />

        </div>

      </div>
      <Footer />
    </>

  )
}

export default Invest;