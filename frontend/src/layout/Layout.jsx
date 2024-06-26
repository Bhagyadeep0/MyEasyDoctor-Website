// import react
import React from "react";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import Footer from "../components/Footer";
import Doctors from "../pages/Doctors";
import Social from "../components/Social";
import ToTop from "../components/ToTop";
import DoctorProfile from "../components/Doctor/DoctorProfile";
import Login from "../pages/Login";
import NoPage from "../components/NoPage";

const Layout = () => {
  return (
    <Router>
      {/* <ToTop /> */}
      <Header />
      {/* <Social /> under progress  */}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor-profile" element={<DoctorProfile/>} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Layout;
