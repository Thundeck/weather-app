import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const LayOut = () => {
  return (
    <div>
      <Nav />
      <Outlet /> 
    </div>
  );
};

export default LayOut;
