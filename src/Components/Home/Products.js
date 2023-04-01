import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import axios from "axios";
import { API_URL } from "../../config";
import { NavLink } from "react-router-dom";

function Products() {
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

  return (
    <div className="container">
      <div className="products">
        <div className="text">
          <span>категория</span>
          <h1>Продукты</h1>
          <div className="bottom"></div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation, A11y]}
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
        >
          {data.data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <NavLink to={"/product"}>
                  <div className="product-img">
                    <img
                      src={`https://api.dev.therepublicoftoys.uz${item.img1}`}
                      alt=""
                    />
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

export default Products;
