import { MutatingDots } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loader = () => {
  return (
    <MutatingDots heigth="50" width="50" color="grey" ariaLabel="loading" />
  );
};

export default Loader;
