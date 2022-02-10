import { Component } from "react";
import s from "./Seachbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    request: "",
  };

  handleNameChange = (e) => {
    this.setState({ request: e.target.value.toLowerCase() });
  };

  onHandleSubmit = (e) => {
    const requestValue = this.state.request;
    e.preventDefault();

    if (requestValue.trim() === "") {
      return alert("Entre name");
    }

    this.props.onSubmit(requestValue);
    this.setState({ request: "" });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onHandleSubmit}>
          <input
            onChange={this.handleNameChange}
            className={s.input}
            type="text"
            value={this.state.request}
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
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
