import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Invest from './components/Invest';
import Raise from './components/Raise';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Success from './components/Success';
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
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/success' element={<Success />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
