import React from 'react'
import { Link } from 'react-router-dom'
import first from '../imgs/first_img.png'
import media from '../imgs/media.png'
import Boxes from '../declarations/Boxes';
import Admindash from '../util/Admindash';

const Ahome = () => {
    return (
        <>
            <Admindash />
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
                    </div>

                    <div className='col-auto d-lg-block'>
                        <img src={first} alt="img" className='first_img img-fluid' />
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

                {/* BOXES */}
                <div className='container-fluid mt-5'>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-lg-5 pb-4 ms-sm-2'>

                        <Boxes />
                        <Boxes />
                        <Boxes />

                    </div>
                </div>
            </div>
        </>

    )
}

export default Ahome;