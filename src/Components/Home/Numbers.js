import React from "react";
import { card } from "../Mock";

function Numbers() {
  return (
    <div className="numbers">
      <div className="container">
        <div className="text">
          <span>инфографика</span>
          <h1>Мы в числах</h1>
          <div className="bottom"></div>
        </div>
        <div className="numbers-cards">
          {card.map((item) => {
            return (
              <div className="numbers-card" key={item.id}>
                <div className="number">{item.number}</div>
                <h3>{item.text}</h3>
              </div>
            );
          })}
        </div>
        <div className="lorem">
          <h2>Lorem ipsum dolor sit </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magnafringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
