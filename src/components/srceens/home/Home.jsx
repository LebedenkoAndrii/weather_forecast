import Header from "./Header/Header";
import { useEffect, useMemo } from "react";
import { days } from "./days.data.js";
import CardItem from "./card-item/CardItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";

const Home = () => {
  // https://api.weatherbit.io/v2.0/forecast/daily?city=Cherkasy&days=7&NC&key=3d66fe9a50a840e7aa5ade137f065004
  // const apiUrl = "https://api.weatherbit.io/v2.0/forecast/daily?";
  // const apiKey = "3d66fe9a50a840e7aa5ade137f065004";
  // const data = 0;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `${apiUrl}city=Cherkasy&days=7&NC&key=${apiKey}`
  //     );
  //     data = await response.json();
  //     // console.log(data.data[0]);
  //   };
  //   fetchData();
  // }, []);
  // const days = useMemo(() => {
  //   days = data.data[(0, 1, 2, 3, 4, 5, 6)];
  // }, []);

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
      <Header />
      <div className={styles.card__container}>
        <Slider {...settings}>
          {days.length ? (
            days.map((days) => <CardItem key={days.id} days={days} />)
          ) : (
            <p>No Forecast</p>
          )}
        </Slider>
      </div>
    </div>
  );
};
export default Home;
