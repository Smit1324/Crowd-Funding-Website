import React from 'react'
import { Link, useParams } from 'react-router-dom'
import raisegph from '../imgs/raise_graph.png'
import raise from '../imgs/raise.png'
import Userdash from '../util/Userdash'
import Userfooter from '../util/Userfooter'

const Uraise = () => {
    const { id } = useParams();
    return (
        <>
            <Userdash uid={id} />
            <div className='container mt-lg-5 mt-3'>

                <div
                    className="row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 raise">
                    <div className="col mb-2 ps-4 d-flex flex-column position-static">
                        <div className='h1 head'>Raise<br /><Link to='#' className='raise-head-comp'>Founder - Friendly<br /></Link> Capital
                        </div>
                        <div className='h6 sub-head mt-2'>Raise funds while increasing product sales, growing your<br />brand, and engaging your community.
                        </div>
                        <div className='mt-3'>
                            <Link className='btn btn-primary btn-lg scr-btn w-lg-25' to='/invest'>Raise Capital</Link>
                        </div>
                    </div>

                    <div className='col-auto d-lg-block'>
                        <img src={raisegph} alt="img" className='raise_img img-fluid' />
                    </div>
                </div>


                <div className='my-lg-5 mb-sm-4'>
                    <div className='row'>
                        <div
                            className="mt-lg-4 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative raise-cards">
                            <div className="col py-5 px-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Heading</h3>
                                <p className="card-text mb-auto mt-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum aperiam cupiditate deleniti officiis esse fuga voluptatem, assumenda, ratione autem molestiae libero voluptatibus aspernatur dolorum, est
                                </p>
                            </div>
                            <div className="col-auto py-4 px-4 d-none d-lg-block">
                                <img src={raise} alt="img" className="bd-placeholder-img img-fluid" />
                            </div>
                        </div>

                        <div
                            className="mt-lg-4 mt-sm-2 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative raise-cards">
                            <div className="col-auto py-4 px-2 d-none d-lg-block">
                                <img src={raise} alt="img" className="bd-placeholder-img img-fluid" />
                            </div>
                            <div className="col py-5 px-4 d-flex flex-column position-static text-lg-end text-sm-start">
                                <h3 className="mb-0">Heading</h3>
                                <p className="card-text mb-auto mt-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum aperiam cupiditate deleniti officiis esse fuga voluptatem, assumenda, ratione autem molestiae libero voluptatibus aspernatur dolorum, est
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-lg-4 mt-sm-2  row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative raise-cards">
                            <div className="col py-5 px-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Heading</h3>
                                <p className="card-text mb-auto mt-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum aperiam cupiditate deleniti officiis esse fuga voluptatem, assumenda, ratione autem molestiae libero voluptatibus aspernatur dolorum, est
                                </p>
                            </div>
                            <div className="col-auto py-4 px-4 d-none d-lg-block">
                                <img src={raise} alt="img" className="bd-placeholder-img img-fluid" />
                            </div>
                        </div>

                        <div
                            className="mt-lg-4 mt-sm-2  row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative raise-cards">
                            <div className="col-auto py-4 px-2 d-none d-lg-block">
                                <img src={raise} alt="img" className="bd-placeholder-img img-fluid" />
                            </div>
                            <div className="col py-5 px-4 d-flex flex-column position-static text-lg-end text-sm-start">
                                <h3 className="mb-0">Heading</h3>
                                <p className="card-text mb-auto mt-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum aperiam cupiditate deleniti officiis esse fuga voluptatem, assumenda, ratione autem molestiae libero voluptatibus aspernatur dolorum, est
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-lg-4 mt-sm-2  row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative raise-cards">
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
            <Userfooter />
        </>



    )
}

export default Uraise;