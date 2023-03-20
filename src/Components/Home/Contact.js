import React from "react";
import Group from "../../assets/images/Group 90.png";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-item">
          <h1>Есть вопросы? Мы вам перезвоним</h1>
          <form action="input">
            <div className="inp-flex">
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Ваша имя" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Сообщения"
            ></textarea>
            <button>Отправить</button>
          </form>
          <div className="position">
            <img src={Group} alt="" />
            <img src={Group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
