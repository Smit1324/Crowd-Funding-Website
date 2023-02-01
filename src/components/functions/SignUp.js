import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signup from '../imgs/sign_up.png'
import Navbar from '../util/Navbar';
import Footer from '../util/Footer';
import Admin from '../api/admin';

const SignUp = () => {
  let navigate = useNavigate();
  const [adminData, setAdminData] = useState(...Admin);
  const [user, setuser] = useState({
    firstName: "",
    lastName: '',
    email: "",
    pass: ""
  });

  const { firstName, lastName, email, pass } = user;

  const onInputChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }

  const click = e => {
    navigate('/signup/companysignup');
  }

  const onSubmit = async e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !pass) {
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
          if (user.email === users.data.email || user.email === adminData.Email) {
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
            break;
          }
          else {
            i++;
          }
        }
      }

      catch {
        axios.post("https://6381c65053081dd549883e8c.mockapi.io/Crow-Funding", user);
        toast.success('Account Created Successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => navigate(`/userlogin/${i}`), 3000);
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className='container position-relative mt-4  d-flex'>
        <div className='d-none d-md-block d-lg-block'>
          <img src={signup} alt="img" className='signup-img img-fluid' />
        </div>

        <div className='ms-lg-5'>
          <div className='ms-lg-5'>
            <div className='ms-lg-5'>
              <div className='h2 sign-head ms-lg-4'>Create Account</div>
              <form className='mt-4 ms-lg-4'>

                <div className='d-flex'>
                  <div className="mb-3 me-2">
                    <label className="form-label lbl">First Name</label>
                    <input type="text" className="form-control" id="InputFirstName" name="firstName" value={firstName} onChange={e => {
                      onInputChange(e)
                    }} autocomplete="off" />
                  </div>
                  <div className="mb-3 ms-2">
                    <label className="form-label lbl">Last Name</label>
                    <input type="text" className="form-control" id="InputLastName" name="lastName" value={lastName} onChange={e => {
                      onInputChange(e)
                    }} autocomplete="off" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label lbl">Email address</label>
                  <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e => {
                    onInputChange(e)
                  }} autocomplete="off" />

                </div>
                <div className="mb-4">
                  <label className="form-label lbl">Password</label>
                  <input type="password" className="form-control" id="InputPassword1" name="pass" value={pass} onChange={e => {
                    onInputChange(e)
                  }} autocomplete="off" />
                </div>
                <button className='btn btn-primary btn-lg sc-btn w-100' onClick={e => onSubmit(e)}>Create Account</button>
                <button className='btn btn-outline-success mt-2 btn-lg sc-btn w-100' onClick={e => click(e)}>Sign Up As Investor</button>
              </form>
            </div>
          </div>

        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>

  )
}

export default SignUp;