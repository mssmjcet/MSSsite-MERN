import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import React from 'react';
import './index.css';

import { Route,Router, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./components/user/Home";
import Register from "./components/user/Register";

import RegistrationDashBoard from "./components/admin/RegistrationDashBoard";

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path = "/" element = {<Home/>} exact />
  <Route path ="/registerEvent" element={<Register/>} exact/>
  
  <Route path="/admin/registrationDashboard" element={<RegistrationDashBoard/>} exact />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
