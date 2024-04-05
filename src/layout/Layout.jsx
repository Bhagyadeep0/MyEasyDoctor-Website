// import react
import React from "react";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import Footer from "../components/Footer";
import Doctors from "../pages/Doctors";
import Social from "../components/Social";

const Layout = () => {
  return (
    <Router>
      <Header />
      {/* <Social /> under progress  */}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Layout;
