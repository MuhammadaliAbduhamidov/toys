import React from "react";
import image5 from "../../assets/images/image 5.png";
import image6 from "../../assets/images/image 6.png";
import image7 from "../../assets/images/image 7.png";
import image8 from "../../assets/images/image 8.png";

function AboutIn() {
  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="about-txt">
          <h1>О нас</h1>
          <p>
            Компания была основана в 2009 году и производит сотни игрушек. Он
            производит глухие пластмассовые игрушки для детей, а также
            экспортирует их по всему миру. Игрушки изготовлены из
            высококачественного пластика современными технологами. Сегодня в
            компании работает более 40 человек, она экспортирует свою продукцию
            в Россию, Азербайджан, Таджикистан, Казахстан, Киргизию и Грузию.
          </p>
        </div>
        <div className="about-images">
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutIn;
