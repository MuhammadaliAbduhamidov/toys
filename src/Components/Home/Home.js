import React from "react";
import Navbar from "./Navbar";
import "../../assets/home.css";
import Intro from "./Intro";
import Products from "./Products";
import About from "./About";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Intro />
      </div>
      <Products />
      <About />
    </>
  );
}

export default Home;
