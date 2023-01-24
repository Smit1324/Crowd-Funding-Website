import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from '../imgs/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();

    const [log, setlog] = useState({
        eml: "",
        pwd: ''
    })

    const { eml, pwd } = log;

    const onInputChange = e => {
        setlog({ ...log, [e.target.name]: e.target.value });
    }

    const onLogin = async e => {

        e.preventDefault();
        if (!eml || !pwd) {
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
            let i = 1;

            try {
                while (i !== undefined) {
                    const users = await axios.get(`https://6381c65053081dd549883e8c.mockapi.io/Crow-Funding/${i}`);
                    if (log.eml === users.data.email && log.pwd === users.data.pass) {
                        setTimeout(() => navigate('/success'), 3000);
                        break;
                    }
                    else {
                        i++;
                    }
                }
            }

            catch {
                toast.error('NO USER FOUND', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                toast.warning('Check Email and Password', {
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

        }
    }

    return (
        <div className='container position-relative mt-5 d-flex login'>
            <div className='d-none d-md-block d-lg-block'>
                <img src={login} alt="img" className='login-img img-fluid' />
            </div>
            <div className='ms-lg-5'>
                <div className='h2 sign-head ms-lg-4'>Login to Your Account</div>
                <form className='mt-4 ms-lg-4'>


                    <div className="mb-3">
                        <label className="form-label lbl">Email address</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" name="eml" value={eml} onChange={e => {
                            onInputChange(e)
                        }} autoComplete="off" />

                    </div>
                    <div className="mb-4">
                        <label className="form-label lbl">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" name="pwd" value={pwd} onChange={e => {
                            onInputChange(e)
                        }} autoComplete="off" />
                    </div>

                    <button className='btn btn-outline-primary btn-lg sc-btn w-100' onClick={e => onLogin(e)}>Sign In</button>

                    <div className='d-flex justify-content-center w-100 mt-3'>
                        <button className='btn btn-outline-success btn-lg sc-btn-2 me-2'><i className="fa-brands fa-google"></i> Continue with google</button>
                        <button className='btn btn-outline-info btn-lg sc-btn-2 ms-2'><i className="fa-brands fa-facebook"></i> Continue with facebook</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login