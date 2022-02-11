import { useState } from "react";
import s from "./Seachbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit }) => {
  const [request, setRequest] = useState("");

  const handleNameChange = (e) => {
    setRequest(e.target.value.toLowerCase());
  };

  const onHandleSubmit = (e) => {
    const requestValue = request;
    e.preventDefault();

    if (requestValue.trim() === "") {
      return alert("Entre name");
    }

    onSubmit(requestValue);
    setRequest("");
  };
  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={onHandleSubmit}>
        <input
          onChange={handleNameChange}
          className={s.input}
          type="text"
          value={request}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
