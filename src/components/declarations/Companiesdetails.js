import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admindash from '../util/Admindash'
import Adminnav from '../util/Adminnav';
import Company from '../api/company';

const Companiesdetails = () => {
    const [companiesData, setCompaniesData] = useState(Company);
    console.log(companiesData);

    // useEffect(() => {
    //     loadCompanies();
    // }, []);

    // const loadCompanies = async () => {
        
    //     setCompaniesData(Company);
    // }
    return (
        <>
            <Admindash />
            <Adminnav />
            <div className='container shadow my-5 color'>

                <p className='text-center h2 p-4'>INVESTOR DETAILS</p>
                <div className='py-4 px-3'>
                    <table className="table table-striped">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Company Name</th>
                                <th scope="col" className='hidden'>Invested</th>
                                <th scope='col'>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                companiesData.map((company, index) => (
                                    <tr key={index}>

                                        <th scope='row' className='ps-3'>{index + 1}</th>
                                        <td className='ps-3'>{company.CName}</td>
                                        <td className='hidden ps-4'>0</td>
                                        <td>
                                            <Link className="btn btn-outline-primary btn-sm ms-1" to="/adminlogin/companiesdetails/viewcompany"><i className="fa-solid fa-eye"></i></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default Companiesdetails