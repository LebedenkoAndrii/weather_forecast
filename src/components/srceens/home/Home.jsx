import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import CardItem from "./card-item/CardItem";
import DayService from "../../../services/DayService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Cherkasy");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DayService.getAll(city);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const settings = {
    dots: true,
    dotsColor: "#fff",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className={styles.card__container}>
        <Slider {...settings}>
          {data.length ? (
            data.map((days) => <CardItem key={days.ts} days={days} />)
          ) : (
            <p>No Forecast</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
