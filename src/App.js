import React from 'react';
import Navbar from './components/compo/Navbar';
import Footer from './components/compo/Footer';
import Home from './components/pages/Home';
import Invest from './components/pages/Invest';
import Raise from './components/pages/Raise';
import SignUp from './components/functions/SignUp';
import Login from './components/functions/Login';
import Success from './components/functions/Success';
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
