import styles from "./Registr.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Registr = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mail: "",
    age: "",
    password: "",
    conf_password: "",
    SQ: "",
    answer: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [inputType, setInputType] = useState("password");

  const [imageSrc, setImageSrc] = useState("./show.png");

  const showErrorMessage = (error) => {
    setErrorMessage(error);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegistration = () => {
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/User_cabinet");
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    if (navigate) {
      navigate(-1);
    } else {
      window.history.go(-1);
    }
  };

  // validate
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formData.first_name.trim() === "" ||
      formData.last_name.trim() === "" ||
      formData.mail.trim() === "" ||
      formData.age.trim() === "" ||
      formData.conf_password.trim() === "" ||
      formData.SQ.trim() === "" ||
      formData.answer.trim() === ""
    ) {
      showErrorMessage("Please fill in all the fields");
      return;
    } else if (!emailRegex.test(formData.mail)) {
      showErrorMessage("Please enter a valid email address");
      return;
    } else if (formData.password !== formData.conf_password) {
      showErrorMessage("Passwords do not match");
      return;
    }
    setIsFormValid(true);
    handleRegistration();
  };
  const handleInputChange = () => {
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
    setImageSrc((prevImageSrc) =>
      prevImageSrc === "./show.png" ? "./hidden.png" : "./show.png"
    );
  };

  return (
    <>
      <section className={styles.registration}>
        <Link to="#" onClick={handleGoBack} className={"link"}>
          Go back
        </Link>
        <div className={styles.reg_container}>
          <form className={styles.reg_form} onSubmit={handleSubmit}>
            <fieldset>
              <legend>Registration form</legend>
              <div className={styles.form_row}>
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Bobby"
                  required
                  onChange={handleChange}
                  value={formData.first_name}
                />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Singer"
                  onChange={handleChange}
                  value={formData.last_name}
                />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="mail">E-mail</label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="@mail.com"
                  onChange={handleChange}
                  value={formData.mail}
                />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="18"
                  onChange={handleChange}
                  value={formData.age}
                />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="password">Password</label>
                <input
                  type={inputType}
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  minLength={6}
                  onChange={handleChange}
                  value={formData.password}
                />
                <img
                  src={imageSrc}
                  alt="show"
                  className={styles.changeInputImg}
                  onClick={handleInputChange}
                />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="conf_password">Confirm password</label>
                <input
                  type={inputType}
                  id="conf_password"
                  name="conf_password"
                  placeholder="********"
                  required
                  minLength={6}
                  onChange={handleChange}
                  value={formData.conf_password}
                />
                <img
                  src={imageSrc}
                  alt="show"
                  className={styles.changeInputImg}
                  onClick={handleInputChange}
                />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="select">Secret questions</label>
                <select
                  name="SQ"
                  id="select"
                  onChange={handleChange}
                  value={formData.SQ}
                  required
                >
                  <option>Select...</option>
                  <option defaultValue="Favourite pet`s name">
                    Favourite pet`s name
                  </option>
                  <option value="Favourite car model">
                    Favourite car model
                  </option>
                  <option value="Favourite TV show">Favourite TV show</option>
                </select>
              </div>
              <div className={styles.form_row}>
                <label htmlFor="answer">Answer to this question</label>
                <input
                  type="text"
                  id="answer"
                  name="answer"
                  placeholder="Your answer"
                  required
                  onChange={handleChange}
                  value={formData.answer}
                />
              </div>
              <p className={styles.error_message}>{errorMessage}</p>
              <button type="submit">Sign Up</button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
export default Registr;
