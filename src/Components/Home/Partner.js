import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { partner } from "../Mock";

function Partner() {
  return (
    <div className="container">
      <div className="partner">
        <div className="text">
          <span>на доверяют</span>
          <h1>Партнеры</h1>
          <div className="bottom"></div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation]}
          navigation
          breakpoints={{
            320: {
              width: 450,
              slidesPerView: 1,
            },
            500: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            976: {
              width: 976,
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {partner.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="partner-img">
                  <img src={item.img} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Partner;
