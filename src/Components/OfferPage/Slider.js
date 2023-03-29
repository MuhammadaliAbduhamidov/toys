import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import axios from "axios";
import { API_URL } from "../../config";
import { NavLink } from "react-router-dom";
import { AboutNext } from "../../assets/Svg";

function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const dates = await axios.get(API_URL);
        setData(dates);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="container">
      <div className="products" style={{ paddingBottom: "300px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation, A11y]}
          navigation
        >
          {data.data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <NavLink
                  to={`/product/${item.id}`}
                  key={item.id}
                  onClick={scrollUp}
                >
                  <div className="react-panel-card">
                    <img
                      src={`https://api.dev.therepublicoftoys.uz${item.img1}`}
                      alt=""
                    />
                    <div className="card-text">
                      <h1>{item.title_uz}</h1>
                      <span>{item.case_uz}</span>
                    </div>
                    <div className="card-hover">
                      <h3>Подробнее</h3>
                      <AboutNext />
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
