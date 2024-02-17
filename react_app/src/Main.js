/* eslint-disable */
import React from "react";
import Home from "./Home";
import Conf from "./Conf";
import Paper from "./Paper";

const Main = ({ currentPage }) => {
  return (
    <div>
      {currentPage === "Home" && <Home />}
      {currentPage === "Conf" && <Conf />}
      {currentPage === "Paper" && <Paper />}
    </div>
  );
};

export default Main;
