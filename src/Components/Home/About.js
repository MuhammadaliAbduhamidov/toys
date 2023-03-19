import React from "react";
import toys from "../../assets/images/toys.png";
import { AboutNext } from "../../assets/Svg";

function About() {
  return (
    <>
      <div className="about">
        <div></div>
        <div className="about-text">
          <div className="text">
            <span>о нас</span>
            <h1>Cамый лучший производителть </h1>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="about-item">
        <div className="about-img">
          <img src={toys} alt="" />
        </div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magnafringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor.{" "}
          </p>
          <div className="about-btn">
            <button>подробнее</button>
            <AboutNext />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
