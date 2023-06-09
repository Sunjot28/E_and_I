import React, { useState } from 'react'
import './App.css';
import Homepage from './components/Homepage';
import Internships from './components/internships/internship';
import Start from './components/getstarted/getStarted';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ContactUs from './components/ContactUs';
import Events from './components/Event';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [user, setLoginUser] = useState({});
  return ( 
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          {
            user && user._id ? <Route exact path="/home" element={<Homepage />}/> : 
            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          }
          {/* <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>  */}
          <Route path="/register" element={<Register />}/> 
          <Route path="/home" element={<Homepage />}/> 
          <Route path="/internships" element={<Internships />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/contactus" element={<ContactUs />}/>
        </Routes>
      </Router>
    </div> 
  ); 
}

export default App;
