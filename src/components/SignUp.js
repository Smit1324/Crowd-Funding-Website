import React from 'react'
import signup from '../imgs/sign_up.png'

const SignUp = () => {
  return (
    <div className='container position-relative mt-4  d-flex'>
      <div>
        <img src={signup} alt="img" className='signup-img img-fluid' />
      </div>
      <div className='position-absolute end-0 me-5'>
        <div className='h2 sign-head'>Create Account</div>
        <form className='mt-4'>
          <div className='d-flex'>
            <div className="mb-3 me-2">
              <label className="form-label lbl">First Name</label>
              <input type="text" className="form-control" id="InputFirstName" />
            </div>
            <div className="mb-3 ms-2">
              <label className="form-label lbl">Last Name</label>
              <input type="text" className="form-control" id="InputLastName" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label lbl">Email address</label>
            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-4">
            <label className="form-label lbl">Password</label>
            <input type="password" className="form-control" id="InputPassword1" />
          </div>

          <button className='btn btn-primary btn-lg sc-btn w-100'>Create Account</button>

          <div className='d-flex justify-content-center w-100 mt-3'>
            <button className='btn btn-outline-success btn-lg sc-btn-2 me-2'><i class="fa-brands fa-google"></i> Continue with google</button>
            <button className='btn btn-outline-info btn-lg sc-btn-2 ms-2'><i class="fa-brands fa-facebook"></i> Continue with facebook</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;