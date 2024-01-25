import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "/src/components/srceens/home/Home";
import WeekForecast from "/src/components/srceens/weekForecast/WeekForecast";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekForecast" element={<WeekForecast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
