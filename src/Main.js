import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Projects1 from "./pages/Projects1";
import Projects2 from "./pages/Projects2";
import Contact from "./pages/Contact";



function Main() {
    return (
      <Router >
        <NavBar />
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/Projects1" element={<Projects1 />} />
            <Route path="/Projects2" element={<Projects2 />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          </div>
      </Router >
    );
  }
 
export default Main;