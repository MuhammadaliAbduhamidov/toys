import React from "react";
import Slider from "react-slick";
import { ArrowNext, Download } from "../../assets/Svg";
import ekskavator from "../../assets/images/ekskavator.png";
import skuter from "../../assets/images/skuter.png";
import uycha from "../../assets/images/uycha.png";
import { NavLink } from "react-router-dom";

function Intro() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <div className="intro">
            <div className="intro-text">
              <h1>Enjoy with our products</h1>
              <NavLink to={"/product"}>
                <div className="intro-btn">
                  <button>See more</button>
                  <ArrowNext />
                </div>
              </NavLink>
            </div>
            <div className="intro-img">
              <img src={skuter} alt="" />
            </div>
          </div>
          <div className="intro">
            <div className="intro-text">
              <h1>Safe and attractive</h1>
              <div className="intro-btn">
                <button>See more</button>
                <ArrowNext />
              </div>
            </div>
            <div className="intro-img">
              <img src={ekskavator} alt="" />
            </div>
          </div>
          <div className="intro">
            <div className="intro-text">
              <h1>Choise of your children</h1>
              <div className="intro-btn">
                <button>See more</button>
                <ArrowNext />
              </div>
            </div>
            <div className="intro-img">
              <img src={uycha} alt="" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="intro-bg">
        <div className="container">
          <div className="download">
            <Download />
            <button>Скачать каталог</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
