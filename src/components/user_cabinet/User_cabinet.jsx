import styles from "./User_cabinet.module.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../srceens/header/Header.jsx";

const User_cabinet = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  return (
    <>
      <Header />
      <div>
        <Link to="/" className="link">
          Go to current forecast
        </Link>
        <h2>User Cabinet</h2>

        {userData ? (
          <div>
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
      </div>
    </>
  );
};
export default User_cabinet;
