import React from "react";
import map from "../../assets/images/map.svg";

function Export() {
  return (
    <div className="export">
      <div className="container">
        <div className="text">
          <span>Мы в мире!</span>
          <h1>Куда мы экспортируем?</h1>
          <div className="bottom"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magnafringilla urna, porttitor
          rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          fringilla est Lorem ipsum dolor sit amet, consectetur adipiscing elit
          ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
          urna, porttitor.{" "}
        </p>
        <img src={map} alt="" />
      </div>
    </div>
  );
}

export default Export;
