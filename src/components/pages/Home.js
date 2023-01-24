import React from 'react'
import { Link } from 'react-router-dom'
import invest from '../imgs/invest.png'
import first from '../imgs/first_img.png'
import media from '../imgs/media.png'

const Home = () => {
  return (
    <div className='mt-lg-5 mt-3 d-flex flex-wrap position-relative'>

      <div
        className="container ms-lg-5 ms-2 ps-lg-4 row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 home">
        <div className="col mb-2 ps-4 d-flex flex-column position-static">
          <div className='h1 head'>Invest In<br />Our Startup at<br /> <Link to='#' className='head-comp'>Shayar</Link> Community
          </div>
          <div className='h6 sub-head mt-2'>Providing Platform for all talented Souls || Start <br />Investment with as small amount as <i className="fa-solid fa-indian-rupee-sign"></i> 5000
          </div>
          <div className='mt-3'>
            <Link className='btn btn-primary btn-lg scr-btn' to='/invest'>Invest Now <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className='h6 sub d-flex mt-4'>Already a member? <Link to='/login' className='login-link'>Login</Link></div>
        </div>

        <div className='col-auto d-lg-block'>
          <img src={first} alt="img" className='first_img img-fluid' />
        </div>
      </div>

      {/* DEALS */}

      <div className='container-xxl mt-lg-4'>
        <div>
          <p className='text-center h1 div-head'>Latest Deals</p>
          <p className='text-center sub-head'>Access highly-vetted investment opportunities in startups across the various sectors.</p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-lg-5 pb-4 ms-sm-2">

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

          <div className="col mt-lg-5 mb-lg-4">
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

        </div>
        <div className='d-flex justify-content-center'>
          <Link className='btn btn-primary btn-lg scr-btn px-lg-5' to='/invest'>View all</Link>
        </div>
      </div>

      {/* MEDIA */}

      <div className='container-fluid md mt-5 pt-lg-5'>
        <div>
          <p className='text-center h1 div-head'>In the Media</p>
          <p className='text-center sub-head'>We have been covered by top media groups around India.</p>
        </div>
        <div className='mt-5 py-lg-5 med'>
          <img src={media} alt="img" className='media mb-3' />
          <img src={media} alt="img" className='media mb-3' />
          <img src={media} alt="img" className='media mb-3' />
          <img src={media} alt="img" className='media mb-3' />
        </div>
      </div>

      {/* CARDS */}
      <div className='container-fluid mt-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-lg-5 pb-4 ms-sm-2'>

          <div className="col mb-lg-4">
            <div className="card patta bg-primary">
              <div className="card-body">
                <div className='mt-4 d-flex justify-content-center'>
                  <div className='cir d-flex align-items-center justify-content-center'>
                    <i className="fa-solid fa-indian-rupee-sign fs-2 text-light"></i>
                  </div>
                </div>

                <div className='patta-lik mt-5 text-center'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto
                </div>


              </div>
            </div>
          </div>
          <div className="col mb-lg-4">
            <div className="card patta bg-primary">
              <div className="card-body">
                <div className='mt-4 d-flex justify-content-center'>
                  <div className='cir d-flex align-items-center justify-content-center'>
                    <i className="fa-solid fa-indian-rupee-sign fs-2 text-light"></i>
                  </div>
                </div>

                <div className='patta-lik mt-5 text-center'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto
                </div>


              </div>
            </div>
          </div>
          <div className="col mb-lg-4">
            <div className="card patta bg-primary">
              <div className="card-body">
                <div className='mt-4 d-flex justify-content-center'>
                  <div className='cir d-flex align-items-center justify-content-center'>
                    <i className="fa-solid fa-indian-rupee-sign fs-2 text-light"></i>
                  </div>
                </div>

                <div className='patta-lik mt-5 text-center'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus esse possimus architecto
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Link className='btn btn-primary btn-lg scr-btn px-lg-5' to='/signup'>Sign Up</Link>
        </div>
      </div>




    </div>
  )
}

export default Home;