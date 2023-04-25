<<<<<<< HEAD
import React from "react";
import "./App.css";
// import Start from './components/getStarted';
import Homepage from './components/Homepage';
import Event from "./components/Event";
// import Login from './components/login/Login';
// import Register from './components/register/Register';
// import Internships from "./components/Internships.js";
// import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Start />} /> */}
          <Route path="/" element={<Homepage />}/>
          <Route path="/Event" element={<Event />} />
          {/* <Route path="/internships" element={<Internships />} /> */}
          {/* <Route path="/" element={<Login />}/> */}
          {/* <Route path="/register" element={<Register />}/>   */}
          {/* <Route path="/ContactUs" element={<ContactUs />}/> */}
        </Routes>
      </Router>
    </div>
  );
=======
import React from 'react'
import './App.css';
import Homepage from './components/Homepage';
// import Login from './components/login/Login';
// import Register from './components/register/Register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return ( 
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          {/* <Route path="/" element={<Login />}/> */}
          {/* <Route path="/register" element={<Register />}/> */}
        </Routes>
      </Router>
    </div> 
  ); 
>>>>>>> cd47e74cfa1b4b413b3643cb71cfc64ddebc6e79
}

export default App;
