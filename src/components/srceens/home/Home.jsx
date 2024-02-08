import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import CardItem from "/src/components/elements/card-item/CardItem";
import { Link } from "react-router-dom";
import currentDayService from "../../../services/currentDayService";
import styles from "./Home.module.css";
const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Cherkasy");
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await currentDayService.getAll(city);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, [city]);

  return (
    <section className={styles.home}>
      <Header onSearch={handleSearch} />
      <Link to="/weekForecast" className={"link"}>
        Go to week forecast
      </Link>
      <h2 className="city">{city}</h2>

      <div className={styles.card__container}>
        {!!Object.keys(data).length ? (
          <CardItem key={data.id} days={data} />
        ) : (
          <p className={styles.no_info}>No Forecast</p>
        )}
      </div>
    </section>
  );
};

export default Home;
