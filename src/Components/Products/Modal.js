import React from "react";

function Modal({ setModal }) {
  const backModal = (e) => {
    if (e.target.className == "modal-form") {
      setModal(false);
    }
  };
  return (
    <div className="modal-form" onClick={backModal}>
      <div className="modal-body">
        <input type="email" placeholder="Ваш номер или e-mail" />
        <input type="text" placeholder="Ваша имя" />
        <button>Order</button>
      </div>
    </div>
  );
}

export default Modal;
