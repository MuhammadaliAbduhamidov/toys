import React from "react";
import Navbar from "./Navbar";
import "../../assets/home.css";
import Intro from "./Intro";

function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Intro />
    </div>
  );
}

export default Home;
