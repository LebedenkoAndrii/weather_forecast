import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import CardItem from "/src/components/elements/card-item/CardItem";
import { Link } from "react-router-dom";
import DayService from "../../../services/DayService";
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
        const response = await DayService.getAll(city);
        setData(response.list);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Link to="/weekForecast" className={"link"}>
        Go to week forecast
      </Link>
      <h2 className={styles.city}>{city}</h2>

      <div className={styles.card__container}>
        {data.length ? (
          <CardItem key={data[0].ts} days={data[0]} />
        ) : (
          <p className={styles.no_info}>No Forecast</p>
        )}
      </div>
    </div>
  );
};

export default Home;
