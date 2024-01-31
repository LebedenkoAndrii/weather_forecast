import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "./Header.media.css";

const Header = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(city);
  };

  return (
    <header>
      <h1 className={styles.title}>Weather forecast</h1>
      <div className={styles.search__row}>
        <input
          className={styles.search__inp}
          id="search__inp"
          type="text"
          placeholder="City"
          value={city}
          onChange={handleInputChange}
          maxLength={57}
        />
        <button
          className={styles.search__btn}
          id="search__btn"
          onClick={handleSearchClick}
        >
          <img className={styles.btn__img} src="./search.png" alt="" />
        </button>
      </div>

      <Link to="/Registr" className={styles.sign_up_link}>
        Sign up
        <img src="./add-user.png" alt="sign up" />
      </Link>
    </header>
  );
};

export default Header;
