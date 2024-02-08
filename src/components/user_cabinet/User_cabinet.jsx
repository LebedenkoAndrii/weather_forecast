import styles from "./User_cabinet.module.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../srceens/header/Header.jsx";

const User_cabinet = () => {
  const [userData, setUserData] = useState(null);

  const logOut = () => {
    localStorage.clear("user");
    window.location.reload();
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  return (
    <>
      <section className={styles.user_cabinet}>
        <Header />
        <Link to="/" className="link">
          Go to current forecast
        </Link>
        <div className={styles.data_container}>
          <h2>User Cabinet</h2>

          {userData ? (
            <div className={styles.user_data}>
              <p>
                Welcome, {userData.first_name} {userData.last_name}!
              </p>
              <p>Email: {userData.mail}</p>
              <p>Age: {userData.age}</p>
              <p>Password: {userData.conf_password}</p>
              <p>Secret question: {userData.SQ}</p>
              <p>Answer: {userData.answer}</p>
            </div>
          ) : (
            <p>No user data found. Please sign up.</p>
          )}
          <button onClick={logOut}>Log out</button>
        </div>
      </section>
    </>
  );
};
export default User_cabinet;
