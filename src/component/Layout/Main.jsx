import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
export const ringContext = createContext("ring");

const Main = () => {
  return (
    <ringContext value='ring'>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </ringContext>
  );
};

export default Main;
