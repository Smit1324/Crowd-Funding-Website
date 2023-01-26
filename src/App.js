import React from 'react';
import Home from './components/pages/Home';
import Invest from './components/pages/Invest';
import Raise from './components/pages/Raise';
import SignUp from './components/functions/SignUp';
import Login from './components/functions/Login';
import Userlogin from './components/pages/Userlogin';
import Adminlogin from './components/pages/Adminlogin';
import Uhome from './components/pages/Uhome';
import Uinvest from './components/pages/Uinvest';
import Uraise from './components/pages/Uraise';
import Ahome from './components/pages/Ahome';
import Viewuser from './components/functions/Viewuser';
import Usersdetails from './components/declarations/Usersdetails';
import Companiesdetails from './components/declarations/Companiesdetails';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/invest' element={<Invest />}></Route>
          <Route exact path='/raise' element={<Raise />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/userlogin/:id' element={<Userlogin />}></Route>
          <Route exact path='/userhome/:id' element={<Uhome />}></Route>
          <Route exact path='/:id' element={<Uinvest />}></Route>
          <Route exact path='/userraise/:id' element={<Uraise />}></Route>
          <Route exact path='/adminlogin' element={<Adminlogin />}></Route>
          <Route exact path='/adminlogin/ahome' element={<Ahome />}></Route>
          <Route exact path='/adminlogin/usersdetails' element={<Usersdetails />}></Route>
          <Route exact path='/adminlogin/userdetails/viewuser' element={<Viewuser />}></Route>
          <Route exact path='/adminlogin/companiesdetails' element={<Companiesdetails />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
