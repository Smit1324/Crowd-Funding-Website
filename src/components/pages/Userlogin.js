import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Userdash from '../util/Userdash';
import Userfooter from '../util/Userfooter';
import View from '../declarations/View';


const Userlogin = () => {

  const [user, setuser] = useState({
    firstName: "",
    lastName: '',
    email: "",
    pass: ""
  });

  const { firstName, lastName, email, pass } = user;

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`https://6381c65053081dd549883e8c.mockapi.io/Crow-Funding/${id}`);
    await setuser(res.data);
  }

  return (
    <>
      <Userdash uid={user.id} />
      <div className='container d-flex flex-column mt-2'>
        <p className='h2 mt-2 ms-4'>Welcome {user.firstName} {user.lastName}
        </p>
        <p className='h5 mt-1 ms-4 sub-head'> You have Successfully Logged in
        </p>
      </div>
      <div className='container mt-3 d-flex justify-content-around'>
        <div className='border border-dark-subtle w-50 h-25 px-4 mx-3 rounded-4'>
          <div className='d-flex'>
            <div className='border rounded-circle my-3 me-5 d-flex justify-content-center align-items-center' style={{ width: "58px", 'background-color': "rgb(232, 237, 255)", color: "orange" }}><i className="fa-solid fa-rocket fs-4 text-primary"></i></div>
            <div>
              <p className='h5 mt-3'>0 Startups</p>
              <p className='text-muted'>In my Portfolio</p>
            </div>
          </div>

        </div>
        <div className='border border-dark-subtle w-50 h-25 px-4 mx-3 rounded-4'>
          <div className='d-flex'>
            <div className='border rounded-circle my-3 me-5 d-flex justify-content-center align-items-center' style={{ width: "58px", 'background-color': "rgb(252, 240, 230)", color: "orange" }}><i className="fa-solid fa-indian-rupee-sign fs-4"></i></div>
            <div>
              <p className='h5 mt-3'>0</p>
              <p className='text-muted'>Total Investments</p>
            </div>

          </div>
        </div>
        <div className='border border-dark-subtle w-50 h-25 px-4 mx-3 rounded-4'>
          <div className='d-flex'>
            <div className='border rounded-circle my-3 me-5 d-flex justify-content-center align-items-center' style={{ width: "58px", 'background-color': "rgb(239, 230, 250)", color: "#9500ff" }}><i className="fa-sharp fa-solid fa-circle-check fs-4"></i></div>
            <div>
              <p className='h5 mt-3'>0</p>
              <p className='text-muted'>Portfolio Evalution</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-4 d-flex flex-column justify-content-center align-items-center' style={{ height: "60vh" }}>
        <div className='d-flex'>
          <div>
            <View />
          </div>
          <div className='mt-3'>
            <p className='h5'>You haven't made any Investments till now</p>
            <Link to={`/${id}`} className="login-link">Explore Deals</Link>
          </div>
        </div>


      </div>


      <Userfooter />
    </>

  )
}

export default Userlogin;