import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import CardItem from "/src/components/elements/card-item/CardItem";
import { Link } from "react-router-dom";
import DayService from "../../../services/DayService";
import Location from "../../../services/location";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./WeekForecast.module.css";

const WeekForecast = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Cherkasy");

  const settings = {
    dots: true,
    dotsColor: "#7792bb",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCity = await Location.getLocation();
        setCity(currentCity);

        const response = await DayService.getAll(currentCity);
        setData(response.list);
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
      const response = await DayService.getAll(searchCity);
      setData(response.list);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };
  return (
    <section className={styles.week_forecast}>
      <Header onSearch={handleSearch} />
      <Link to="/" className="link">
        Go to current forecast
      </Link>
      <h2 className="city">{city}</h2>

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
