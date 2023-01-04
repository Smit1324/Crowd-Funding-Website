import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Invest from './components/Invest';
import Raise from './components/Raise';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/invest' element={<Invest />}></Route>
          <Route exact path='/raise' element={<Raise />}></Route>
          <Route exact path='/contactus' element={<ContactUs />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
        </Routes>
      </Router>
        
    </>
  );
}

export default App;
