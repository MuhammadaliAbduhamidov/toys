import React from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import Carusel from "./Carusel";
import "../../assets/offerPage.css";
import Products from "../Home/Products";
import Slider from "./Slider";
import ScrollTop from "../ScrollTop";

function OfferPage() {
  return (
    <>
      <ScrollTop />
      <div className="wrapper">
        <Navbar />
      </div>
      <Carusel />
      <Slider />
      <Footer />
    </>
  );
}

export default OfferPage;
