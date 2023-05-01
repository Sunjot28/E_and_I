// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Homepage from './components/Homepage';
// import Internships from './components/internships/internship';
// import Start from './components/getstarted/getStarted';
// import Login from './components/login/Login';
// import Register from './components/register/Register';
// import ContactUs from './components/ContactUs';
// import Events from './components/Event';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// function App() {
//   const [user, setUser] = useState({}); 

//   useEffect(() => {
//     // Check if the user is logged in by making an API call
//     fetch('/api/user')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data._id) {
//           // User is logged in
//           setUser(data);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Start />} />
//           {!user._id ? (
//             <>
//               <Route path="/login" element={<Login setUser={setUser} />} />
//               <Route path="/register" element={<Register />} />
//               <Navigate to="/login" replace />
//             </>
//           ) : (
//             <>
//               <Route path="/home" element={<Homepage />} />
//               <Route path="/internships" element={<Internships />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/contactus" element={<ContactUs />} />
//               <Route path="*" element={<Navigate to="/home" replace />} />
//             </>
//           )}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react'
import './App.css';
import Homepage from './components/Homepage';
import Internships from './components/internships/internship';
import Start from './components/getstarted/getStarted';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ContactUs from './components/ContactUs/ContactUs';
import Events from './components/Event';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {

  const [user, setUser1] = useState(null);

  useEffect(() => {
    const checkUserSession = async () => {
      const response = await fetch('/api/check-session');
      const data = await response.json();
      setUser1(data.user);
    };
    checkUserSession();
  }, []);

  const handleLogin = async (user) => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    setUser1(data.user);
  };

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST', // Change the method to GET
    });
    const data = await response.json();
    if (response.status === 200) {
      setUser1(null);
    }
  };
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          {user ? (
            <>
              <Route path="/home" element={<Homepage handleLogout={handleLogout}/>} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contactus" element={<ContactUs />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login setUser1={setUser1} />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;