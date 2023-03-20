import React from "react";
import Navbar from "./Navbar";
import "../../assets/home.css";
import Intro from "./Intro";
import Products from "./Products";
import About from "./About";
import Numbers from "./Numbers";
import Export from "./Export";
import Showroom from "./Showroom";
import Partner from "./Partner";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Intro />
      </div>
      <Products />
      <About />
      <Numbers />
      <Export />
      <Showroom />
      <Partner />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
