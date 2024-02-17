/* eslint-disable */
import React from "react";
import Board from "./PaperBoard";
import CalendarComponent from "./CalendarComponent";
import UserDetail from "./BoardComp/UserDetail"
import UserName from "./BoardComp/UserName"


const Paper = () => {
  return (
    <div>
      <UserName />
      <UserDetail />
      <CalendarComponent />
      <Board />
    </div>
  );
};

export default Paper;
