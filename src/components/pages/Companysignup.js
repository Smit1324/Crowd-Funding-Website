import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../util/Footer'
import Navbar from '../util/Navbar'
import Admin from '../api/admin';
import Company from '../api/company';
import SignUp from '../functions/SignUp';

const Companysignup = () => {
    let navigate = useNavigate();
    const [adminData, setAdminData] = useState(Admin);
    const [companyData, setcompanyData] = useState(Company);
    const [company, setCompany] = useState({
        companyName: "",
        sector: '',
        address: "",
        description: "",
        email: "",
        pass: "",
        
    });
    
    const { companyName, sector, address, description, email, pass } = company;
    
    const onInputChange = e => {
        setCompany({ ...company, [e.target.name]: e.target.value })
    }
    
    const signup=()=>{
        alert("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (!companyName || !sector || !address || !description || !email || !pass) {
            toast.warn('Please fill all the Input areas', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            adminData.map((curElem) => {
                if (company.email === curElem.Email) {
                    toast.error('EMAIL ALREADY EXISTS', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    companyData.map((curElem1) => {
                        if (company.email === curElem1.Email) {
                            toast.error('EMAIL ALREADY EXISTS', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }
                        else {
                            signup();
                        }
                    })
                }
            })



        }
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='container mt-4 px-5'>
                <div className='h2 sign-head ms-lg-4'>Investor Sign Up</div>
                    <form className='mt-4 ms-lg-4'>
                        <div className="mb-3 me-2">
                            <label className="form-label lbl">Company Name</label>
                            <input type="text" className="form-control" id="InputCompanyName" name="companyName" value={companyName} onChange={e => {
                                onInputChange(e)
                            }} autocomplete="off" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lbl">Sector</label>
                            <input type="text" className="form-control" id="Inputsector" aria-describedby="emailHelp" name='sector' value={sector} onChange={e => {
                                onInputChange(e)
                            }} autocomplete="off" />

                        </div>
                        <div className="mb-3">
                            <label className="form-label lbl">Address</label>
                            <textarea type="text" className="form-control py-4" id="InputAddress" aria-describedby="emailHelp" name='address' value={address} onChange={e => {
                                onInputChange(e)
                            }} autocomplete="off" />

                        </div>
                        <div className="mb-3">
                            <label className="form-label lbl">Description</label>
                            <textarea type="text" className="form-control py-4" id="InputDescription" aria-describedby="emailHelp" name='description' value={description} onChange={e => {
                                onInputChange(e)
                            }} autocomplete="off" />

                        </div>

                        <div className="mb-3">
                            <label className="form-label lbl">Email address</label>
                            <input type="email" className="form-control" id="InputEmail2" aria-describedby="emailHelp" name="email" value={email} onChange={e => {
                                onInputChange(e)
                            }} autocomplete="off" />

                        </div>

                        <div className="mb-4">
                            <label className="form-label lbl">Password</label>
                            <input type="password" className="form-control" id="InputPassword2" name="pass" value={pass} onChange={e => {
                                onInputChange(e)
                            }} autocomplete="off" />
                        </div>
                        <button className='btn btn-primary btn-lg mt-3 sc-btn w-100' onClick={e => onSubmit(e)}>Create Account</button>
                    </form>
                </div>

            </div>
            <ToastContainer />
            <Footer />
        </>

    )
}

export default Companysignup