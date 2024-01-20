import React, { useState } from "react";
import styles from "./Header.module.css";

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
        />
        <button
          className={styles.search__btn}
          id="search__btn"
          onClick={handleSearchClick}
        >
          <img className={styles.btn__img} src="./search.png" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
