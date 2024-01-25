import React from "react";
import styles from "./CardItem.module.css";
import wind_arrow from "./wind_arrow.png";

const CarItem = ({ days }) => {
  const getWeatherIconUrl = (iconCode) => {
    const baseUrl = "https://www.weatherbit.io/static/img/icons/";
    return `${baseUrl}${iconCode}.png`;
  };

  const iconUrl = getWeatherIconUrl(days.weather.icon);

  const getArrowRotation = (wind_dir) => {
    return `rotate(${wind_dir}deg)`;
  };
  return (
    <div className={styles.card} id="card">
      <h3 className={styles.date}>{days.valid_date}</h3>
      <div className={styles.row_1}>
        <h1 className={styles.temp}>{days.temp + "°"}</h1>
        <img src={iconUrl} alt="rain" className={styles.weather__icon} />
      </div>

      <h2 className={styles.city}>{days.city_name}</h2>
      <div className={styles.details}>
        <div className={styles.col}>
          <div className={styles.row_2}>
            <p>Humidity: </p>
            <p>{days.rh + "%"}</p>
          </div>
          <div className={styles.row_2}>
            <p>Max temp:</p>
            <p className={styles.max_temp}>{days.max_temp + "°"}</p>
          </div>
          <div className={styles.row_2}>
            <p>Min temp: </p>
            <p className={styles.min_temp}>{days.min_temp + "°"}</p>
          </div>

          <div className={styles.row_2}>
            <p>Wind Speed: </p>
            <p className={styles.wind}>{days.wind_spd + " m/s"}</p>
          </div>
          <div className={styles.wind_dir_row}>
            <p>Wind direction: </p>
            <div className={styles.wind_dir}>
              <p>{days.wind_cdir_full}</p>
              <img
                src={wind_arrow}
                className={styles.wind_arrow}
                style={{
                  transform: getArrowRotation(days.wind_dir),
                  width: "20px",
                }}
              />
            </div>
          </div>
          <div className={styles.row_2}>
            <p>Probability of Precipitation: </p>
            <p>{days.pop + " %"}</p>
          </div>
          <div className={styles.row_2}>
            <p>UV index: </p>
            <p>{days.uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
