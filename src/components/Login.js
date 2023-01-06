import React from 'react'
import login from '../imgs/login.png'

const Login = () => {
    return (
        <div className='container position-relative mt-5  d-flex'>
            <div>
                <img src={login} alt="img" className='login-img img-fluid' />
            </div>
            <div className='position-absolute end-0 me-5'>
                <div className='h2 sign-head'>Login to Your Account</div>
                <form className='mt-4'>
                    

                    <div className="mb-3">
                        <label className="form-label lbl">Email address</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-4">
                        <label className="form-label lbl">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" />
                    </div>

                    <button className='btn btn-outline-primary btn-lg sc-btn w-100'>Sign In</button>

                    <div className='d-flex justify-content-center w-100 mt-3'>
                        <button className='btn btn-outline-success btn-lg sc-btn-2 me-2'><i class="fa-brands fa-google"></i> Continue with google</button>
                        <button className='btn btn-outline-info btn-lg sc-btn-2 ms-2'><i class="fa-brands fa-facebook"></i> Continue with facebook</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login