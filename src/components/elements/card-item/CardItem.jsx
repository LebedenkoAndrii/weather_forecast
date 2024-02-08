import React from "react";
import styles from "./CardItem.module.css";
import wind_arrow from "./wind_arrow.png";

const CardItem = ({ days }) => {
  const getWeatherIconUrl = (iconCode) => {
    const baseUrl = "https://openweathermap.org/img/wn/";
    return `${baseUrl}${iconCode}.png`;
  };

  const iconUrl = getWeatherIconUrl(days.weather[0].icon);

  const getArrowRotation = (wind_dir) => {
    return `rotate(${wind_dir}deg)`;
  };

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const currentDate = `${year}-${month}-${day}`;

    return currentDate;
  }

  const todayDate = getCurrentDate();
  return (
    <div className={styles.card} id="card">
      <h3 className={styles.date}>
        {days["dt_txt"]?.slice(0, 16) || todayDate || ""}
      </h3>

      <div className={styles.row_1}>
        <h1 className={styles.temp}>{Math.round(days.main.temp) + "°"}</h1>
        <img src={iconUrl} alt="rain" className={styles.weather__icon} />
      </div>

      <div className={styles.details}>
        <div className={styles.col}>
          <div className={styles.row_2}>
            <p>Feels like: </p>
            <p>{Math.round(days.main.feels_like) + "°" || "-"}</p>
          </div>
          {days.pop && (
            <div className={styles.row_2}>
              <p>POP: </p>
              <p>{days.pop * 100 + " %" || "-"} </p>
            </div>
          )}
          <div className={styles.row_2}>
            <p>Humidity: </p>
            <p>{days.main.humidity + "%"}</p>
          </div>
          <div className={styles.row_2}>
            <p>Description:</p>
            <p>{days.weather[0].description}</p>
          </div>

          <div className={styles.row_2}>
            <p>Wind Speed: </p>
            <p>{days.wind.speed.toFixed(1) + " m/s" || "-"}</p>
          </div>
          <div className={styles.wind_dir_row}>
            <p>Wind direction: </p>
            <img
              src={wind_arrow}
              className={styles.wind_arrow}
              style={{
                transform: getArrowRotation(days.wind.deg),
                width: "20px",
              }}
            />
          </div>

          <div className={styles.row_2}>
            <p>Pressure: </p>
            <p>{days.main.pressure || "-"} hPa </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
