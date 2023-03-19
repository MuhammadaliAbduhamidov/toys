import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import axios from "axios";
import { API_URL } from "../../config";

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

  console.log(data);
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
        >
          {data.data?.map((item) => {
            return (
              <SwiperSlide>
                <div className="product-img" key={item.id}>
                  <img
                    src={`https://api.dev.therepublicoftoys.uz${item.img1}`}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Products;
