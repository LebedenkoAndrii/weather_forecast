import React from "react";
import styles from "./CardItem.module.css";

const CarItem = ({ days }) => {
  const getWeatherIconUrl = (iconCode) => {
    const baseUrl = "https://www.weatherbit.io/static/img/icons/";
    return `${baseUrl}${iconCode}.png`;
  };

  const iconUrl = getWeatherIconUrl(days.weather.icon);
  return (
    <div className={styles.card} id="card">
      <img src={iconUrl} alt="rain" className={styles.weather__icon} />
      <h1 className={styles.temp}>{days.temp + "°"}</h1>
      <h2 className={styles.city}>{days.city_name}</h2>
      <div className={styles.details}>
        <div className={styles.col}>
          <div className={styles.info}>
            <p>Humidity: </p>
            <p>{days.rh + "%"}</p>
          </div>
          <div className={styles.info}>
            <p>Wind Speed: </p>
            <p className={styles.wind}>{days.wind_spd + " km/h"}</p>
          </div>

          <div className={styles.info}>
            <p>Max temp:</p>
            <p className={styles.max_temp}>{days.max_temp + "°"}</p>
          </div>
          <div className={styles.info}>
            <p>Min temp: </p>
            <p className={styles.min_temp}>{days.min_temp + "°"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
