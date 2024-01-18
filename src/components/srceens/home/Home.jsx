import styles from "./Home.module.css";
import Header from "./Header/Header";
import axios from "axios";

const Home = () => {
  // api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=b24b6c17108082809c46ccf97cf164f8

  return (
    <div>
      <Header />
      <div className="card-container"></div>
    </div>
  );
};
export default Home;
