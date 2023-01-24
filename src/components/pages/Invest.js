import React from 'react'
import { Link } from 'react-router-dom'
import invest from '../imgs/invest.png'

const Invest = () => {
  return (
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

        <div className="col mt-5 mb-lg-4">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-lg-1 mb-sm-3 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col mt-lg-5 mt-sm-1 mb-lg-4">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col mt-lg-3 mt-sm-1 mb-lg-4">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col mt-lg-3 mt-sm-1 mb-lg-4">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col mt-lg-3 mt-sm-1 mb-lg-4">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col mt-lg-3 mt-sm-1 mb-lg-4">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col mt-lg-3 mt-sm-1 mb-lg-5">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col mt-lg-3 mt-sm-1 mb-lg-5">
          <div className="card shadow-sm inv0">
            <img src={invest} className="card-img-top img-fluid" alt='img' />
            <div className="card-body">
              <div className='d-flex mt-2'>
                <img src={invest} className="inv1 ms-0" alt="img" />
                <div className='inv-name ms-2 pb-5'>
                  <p className='h5 mb-1 mt-1'>Company's Name</p>
                  <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>Sector</div>
                </div>
              </div>

              <div className='text-muted mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto sint enim placeat blanditiis consectetur autem, voluptatem voluptatibus
              </div>

              <div className='inv-divi mt-4'></div>

              <div className="d-flex justify-content-between mt-4">
                <div className='inv-per align-items-center'>
                  <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>69.999%</p>
                  <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                </div>
                <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                  <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
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