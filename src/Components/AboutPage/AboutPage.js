import React from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import ScrollTop from "../ScrollTop";
import AboutIn from "./AboutIn";
import '../../assets/about.css'

function AboutPage() {
  return (
    <>
      <ScrollTop />
      <div className="wrapper">
        <Navbar />
      </div>
      <AboutIn />
      <Footer />
    </>
  );
}

export default AboutPage;
