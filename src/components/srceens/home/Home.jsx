import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import CardItem from "/src/components/elements/card-item/CardItem";
import { Link } from "react-router-dom";
import currentDayService from "../../../services/currentDayService";
import Location from "../../../services/location";
import styles from "./Home.module.css";
const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Kyiv");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCity = await Location.getLocation();
        setCity(currentCity);

        const response = await currentDayService.getAll(currentCity);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (searchCity) => {
    setCity(searchCity);
    try {
      const response = await currentDayService.getAll(searchCity);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };
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
