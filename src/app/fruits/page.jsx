import React from "react";
import Nav from "../components/nav";
import { Apple } from "react-bootstrap-icons";

const home = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Nested Routing</h1>
        <Apple className="icon" />
        <h1 className="text-[1.5em]">Fruits</h1>
      </div>
    </div>
  );
};

export default home;