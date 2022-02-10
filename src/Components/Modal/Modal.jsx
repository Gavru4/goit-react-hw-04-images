import s from "./Modal.module.css";
import PropTypes from "prop-types";
import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.onModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onModalClose);
  }

  render() {
    const { imageURL, onModalClose } = this.props;
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
  }
}
export default Modal;

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  // onKeyPress: PropTypes.func.isRequired,
};
