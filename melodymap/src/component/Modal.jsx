import React from "react";
import "../css/modal.css";

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
