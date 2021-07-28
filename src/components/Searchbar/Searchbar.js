import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    value: "",
  };
  handleChange = (evt) => {
    this.setState({ value: evt.target.value.toLowerCase() });
    console.log(evt.target.value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.value.trim() === "") {
      toast.error("Введите поисковый запрос");
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles["SearchForm-button"]}>
            <span className={styles["SearchForm-button-label"]}>Search</span>
          </button>

          <input
            className={styles["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
