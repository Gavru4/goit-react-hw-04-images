import s from "./Button.module.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button className={s.btn} onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
