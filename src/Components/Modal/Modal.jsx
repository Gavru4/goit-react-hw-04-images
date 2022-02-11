import s from "./Modal.module.css";
import PropTypes from "prop-types";
import { Component, useEffect } from "react";

const Modal = ({ onModalClose, imageURL }) => {
  useEffect(() => {
    window.addEventListener("keydown", onModalClose);

    return () => {
      window.removeEventListener("keydown", onModalClose);
    };
  }, []);

  return (
    <div
      id="overlay"
      className={s.overlay}
      onClick={(e) => {
        onModalClose(e.target.id);
      }}
    >
      <div className={s.modal}>
        <img className={s.image} src={imageURL} alt="" />
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
};
