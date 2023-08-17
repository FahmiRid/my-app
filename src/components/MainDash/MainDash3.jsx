import React from "react";
import Cards3 from "../Cards/Cards3";
// import Table from "../Table/Table";
import Table3 from "../Table/Table3";
import "./MainDash.css";
const MainDash3 = () => {
  return (
    <div className="MainDash">
      <h1 style={{ color:'black' }}>Information Details</h1>
      <Cards3 />
      <Table3 />
    </div>
  );
};

export default MainDash3;
