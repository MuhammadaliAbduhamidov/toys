import axios from "axios";
import "../../assets/productPage.css";
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { API_URL } from "../../config";
import { productTabs } from "../Mock";
import { AboutNext } from "../../assets/Svg";
import CardSkeleton from "../CardSkeleton";

function ProductTabs() {
  const [dates, setDates] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isActive, setActive] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectedCategoryHandle = (category, id) => {
    setSelectedCategory(category);
    setActive(id);
  };
  console.log(dates);

  useEffect(() => {
    return () => {
      setLoading(true);
      try {
        const getData = async () => {
          const data = await axios.get(API_URL);
          setDates(data.data);
          setLoading(false);
        };
        getData();
      } catch (error) {
        console.log(error);
      }
    };
  }, [selectedCategory]);

  if (selectedCategory == "All") {
    dates.forEach((item) => {
      item.type = "All";
    });
  }
  return (
    <div className="container">
      <div className="react-tabs-wrapper">
        <div className="react-menu">
          <h1>категория</h1>
          <ul className="category">
            {productTabs.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`lists ${isActive === item.id ? "active" : ""}`}
                  onClick={() => selectedCategoryHandle(item.text, item.id)}
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="react-panel">
          <h1>Машинки и модели</h1>

          {isLoading ? (
            <CardSkeleton selectedCategory={selectedCategory} dates={dates} />
          ) : (
            <div className="react-panel-cards">
              {dates
                .filter((data) => data.type == selectedCategory)
                .map((item) => {
                  return (
                    <div className="react-panel-card" key={item.id}>
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
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
