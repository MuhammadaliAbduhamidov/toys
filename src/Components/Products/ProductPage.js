import React from "react";
import "../../assets/productPage.css";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import ScrollTop from "../ScrollTop";
import ProductTabs from "./ProductTabs";

function ProductPage() {
  return (
    <>
      <ScrollTop />
      <div className="wrapper">
        <Navbar />
      </div>
      <ProductTabs />
      <Footer />
    </>
  );
}

export default ProductPage;
