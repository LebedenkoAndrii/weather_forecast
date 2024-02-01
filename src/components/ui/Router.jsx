import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "/src/components/srceens/home/Home";
import WeekForecast from "/src/components/srceens/weekForecast/WeekForecast";
import Registr from "/src/components/registration/Registr";
import User_cabinet from "/src/components/user_cabinet/User_cabinet";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekForecast" element={<WeekForecast />} />
        <Route path="/Registr" element={<Registr />} />
        <Route path="/User_cabinet" element={<User_cabinet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
