import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import CardItem from "/src/components/elements/card-item/CardItem";
import { Link } from "react-router-dom";
import DayService from "../../../services/DayService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./WeekForecast.module.css";

const WeekForecast = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Cherkasy");
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const settings = {
    dots: true,
    dotsColor: "#7792bb",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <section className={styles.week_forecast}>
      <Header onSearch={handleSearch} />
      <Link to="/" className="link">
        Go to current forecast
      </Link>
      <h2 className={styles.city}>{city}</h2>

      <div className={styles.card__container}>
        <Slider {...settings}>
          {data.length ? (
            data.map((days) => <CardItem key={days.dt} days={days} />)
          ) : (
            <p className={styles.no_info}>No Forecast</p>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default WeekForecast;
