import React, { useState } from "react";
import dokon from "../../assets/images/dokon.png";
import zavod from "../../assets/images/zavod.png";
import { Rotation } from "../../assets/Svg";

function Showroom() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  if (show1) {
    document.body.style.overflow = "hidden";
  } else if (show2) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="showroom" id="showroom">
      <div className="container">
        <div className="text">
          <span>Смотрите в 360 градусе</span>
          <h1>Шоврум и завод</h1>
          <div className="bottom"></div>
        </div>
        <div className="showroom-double">
          <div className="showroom-item">
            <div className="showroom-img">
              <div className="showroom-bg"></div>
              <img src={dokon} alt="" />
            </div>
            <div className="showroom-btn" onClick={() => setShow1(true)}>
              <Rotation />
              <button>Cмотреть шоурум</button>
            </div>
            {show1 && (
              <div className={`modal ${show1 ? "active" : ""}`}>
                <div className="modal-body">
                  <div className="back" onClick={() => setShow1(false)}>
                    <span>&times;</span>
                  </div>
                  <iframe src="https://therepublicoftoys.uz/showroom/showroom1/ToyShowRoom/index.htm"></iframe>
                </div>
              </div>
            )}
          </div>
          <div className="showroom-item">
            <div className="showroom-img">
              <div className="showroom-bg "></div>
              <img src={zavod} alt="" />
            </div>
            <div className="showroom-btn" onClick={() => setShow2(true)}>
              <Rotation />
              <button>Cмотреть шоурум</button>
            </div>
            {show2 && (
              <div className={`modal ${show2 ? "active" : ""}`}>
                <div className="modal-body">
                  <div className="back" onClick={() => setShow2(false)}>
                    <span>&times;</span>
                  </div>
                  <iframe src="https://therepublicoftoys.uz/showroom/showroom2/ToyFactory/index.htm"></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showroom;
