import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>Weather forecast</h1>
      <div className={styles.search__row}>
        <input
          className={styles.search__inp}
          id="search__inp"
          type="text"
          placeholder="City"
        />
        <button className={styles.search__btn} id="search__btn">
          <img className={styles.btn__img} src="./search.png" alt="" />
        </button>
      </div>
    </header>
  );
};
export default Header;
