import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";
import question from "../../assets/images/question.png";
import password from "../../assets/images/password.png";
import Modal from "../Products/Modal";

function Carusel() {
  const param = useParams();
  const [malumot, setMalumot] = useState([]);
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await axios.get(`${API_URL}/${param.id}`);
        setMalumot(data.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [param]);
  if (isModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="container">
      <div className="carusel">
        <Carousel>
          <div className="carusel-img">
            <img src={`https://api.dev.therepublicoftoys.uz${malumot.img1}`} />
          </div>
          <div className="carusel-img">
            <img src={`https://api.dev.therepublicoftoys.uz${malumot.img2}`} />
          </div>
        </Carousel>
        <div className="carusel-text">
          <h1>{malumot.title_uz}</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Артикул</span>
                  <img src={question} alt="" />
                </td>
                <td>{malumot.articul}</td>
              </tr>
              <tr>
                <td>
                  <span>EAN-13</span>
                  <img src={question} alt="" />
                </td>
                <td>
                  <img src={password} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Размер игрушки в собранном виде</span>
                  <img src={question} alt="" />
                </td>
                <td>{malumot.size_toy}</td>
              </tr>
              <tr>
                <td>
                  <span>Вид упаковки</span>
                  <img src={question} alt="" />
                </td>
                <td>{malumot.case_ru}</td>
              </tr>
              <tr>
                <td>
                  <span>Размер в упаковке</span>
                  <img src={question} alt="" />
                </td>
                <td> {malumot.size_case}</td>
              </tr>
              <tr>
                <td>
                  <span>Вид групповой упаковки </span>
                  <img src={question} alt="" />
                </td>
                <td> Гофрокороб</td>
              </tr>
              <tr>
                <td>
                  <span>Примерный объем в упаковке </span>
                  <img src={question} alt="" />
                </td>
                <td>{malumot.weight}</td>
              </tr>
              <tr>
                <td>
                  <span>Количество в упаковке </span>
                  <img src={question} alt="" />
                </td>
                <td> {malumot.count}</td>
              </tr>
              <tr>
                <td>
                  <span>Сертификат №1 </span>
                </td>
                <td>
                  <button>Скачать</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setModal(true)}>Order</button>
        </div>
        {isModal && <Modal setModal={setModal} />}
      </div>
    </div>
  );
}

export default Carusel;
