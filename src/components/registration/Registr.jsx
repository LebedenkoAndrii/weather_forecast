import styles from "./Registr.module.css";
import { Link, useNavigate } from "react-router-dom";
const Registr = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (navigate) {
      navigate(-1);
    } else {
      window.history.go(-1);
    }
  };
  return (
    <>
      <Link to="#" onClick={handleGoBack} className={"link"}>
        Go back
      </Link>

      <form action="" className={styles.reg_form}>
        <fieldset>
          <legend>Registration form</legend>
          <div className={styles.form_row}>
            <label htmlFor="first_name">First name</label>
            <input type="text" id="first_name" placeholder="Bobby" />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="last_name">Last name</label>
            <input type="text" id="last_name" placeholder="Singer" />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="mail">E-mail</label>
            <input type="email" id="mail" placeholder="@mail.com" />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="18" />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="********" />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="conf_password">Confirm password</label>
            <input type="password" id="conf_password" placeholder="********" />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="select">Secret questions</label>
            <select name="select" id="select">
              <option value="">Favourite pet`s name</option>
              <option value="">Favourite car model</option>
              <option value="">Favourite TV show</option>
            </select>
          </div>
          <div className={styles.form_row}>
            <label htmlFor="answer">Answer to this question</label>
            <input type="text" id="answer" placeholder="Your answer" />
          </div>
          <button type="submit">Sign Up</button>
        </fieldset>
      </form>
    </>
  );
};
export default Registr;
