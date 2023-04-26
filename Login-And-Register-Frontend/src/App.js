import React from "react";
import "./App.css";
// import Start from './components/getStarted';
// import Homepage from './components/Homepage';
// import Event from "./components/Event";
import Login from './components/login/Login';
import Register from './components/register/Register';
// import Internships from "./components/Internships.js";
// import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Start />} /> */}
          {/* <Route path="/" element={<Homepage />}/> */}
          {/* <Route path="/Event" element={<Event />} /> */}
          {/* <Route path="/internships" element={<Internships />} /> */}
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>  
          {/* <Route path="/ContactUs" element={<ContactUs />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
