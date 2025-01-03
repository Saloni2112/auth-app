// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Ragister";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container p-5">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-p-5">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <ToastContainer />
      </div>
    </Router>
  )
}

export default App

