import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import React from 'react';
import './index.css';

import { Route,Router, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/user/Home";
import Register from "./components/user/Register";
import Projects from "./components/user/Projects";
import Events from './components/user/Events';
import Teams from "./components/user/Teams";
import RegistrationDashboard from "./components/admin/RegistrationDashBoard";
import EventsDashboard from "./components/admin/EventsDashboard";
import ProjectsDashBoard from './components/admin/ProjectsDashboard';
import AdminHome from './components/admin/AdminHome';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path = "/" element = {<Home/>} exact />
  <Route path ="/register" element={<Register/>} exact/>
  <Route path ="/projects" element={<Projects/>} exact/>
  <Route path="/teams" element={<Teams/>}  exact/>
  <Route path="/events" element={<Events/>}  exact/>

  <Route path="/admin/home" element={<AdminHome/>} exact/>
  <Route path="/admin/login" element={<AdminLogin/>} exact />
  <Route path="/admin/registrationsDashboard" element={<RegistrationDashboard/>} exact />
  <Route path="/admin/eventsDashboard" element={<EventsDashboard/>} exact />
  <Route path="/admin/projectsDashboard" element={<ProjectsDashBoard/>} exact />
  </Routes>
 </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// "start": "node server/index.js",