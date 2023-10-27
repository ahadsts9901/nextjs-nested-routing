import React from "react";
import Nav from "../components/nav";
import { Amd } from "react-bootstrap-icons";

const meat = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Nested Routing</h1>
        <Amd className="icon" />
        <h1 className="text-[1.5em]">Meat</h1>
      </div>
    </div>
  );
};

export default meat;
