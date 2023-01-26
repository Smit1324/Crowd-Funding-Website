import React, { useState } from 'react';
import Company from "../api/company.js";

const Cards = () => {

    const [companyData, setCompanyData] = useState(Company);

    return (
        <>

            {
                companyData.map((curElem) => {
                    return (
                        <div className="col mt-5 mb-lg-4" key={curElem.id}>
                            <div className="card shadow-sm inv0">
                                <img src={curElem.image} className="card-img-top img-fluid" alt='img' />
                                <div className="card-body">
                                    <div className='d-flex mt-2'>
                                        <img src={curElem.logo} className="inv1 ms-0" alt="img" />
                                        <div className='inv-name ms-2 pb-5'>
                                            <p className='h5 mb-lg-1 mb-sm-3 mt-1'>{curElem.CName}</p>
                                            <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center'>{curElem.Sector}</div>
                                        </div>
                                    </div>

                                    <div className='text-muted mt-5'>
                                        {curElem.Desc}
                                    </div>

                                    <div className='inv-divi mt-4'></div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <div className='inv-per align-items-center'>
                                            <p className='text-success fs-5 fw-semibold mb-0 ms-2 mt-1'>{curElem.Percent}</p>
                                            <p className='text-muted fs-6 ms-2 inv2'>Raised</p>
                                        </div>
                                        <div className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 text-success fw-semibold'>
                                            <i className="fa-regular fa-circle-check me-2"></i> Succcessfully Invested
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>


    )
}

export default Cards;