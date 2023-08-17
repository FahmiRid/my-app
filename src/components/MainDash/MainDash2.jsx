import React from "react";
import Cards2 from "../Cards/Cards2";
// import Table from "../Table/Table";
import Table2 from "../Table/Table2";
import "./MainDash.css";
const MainDash2 = () => {
  return (
    <div className="MainDash">
      <h1 style={{ color:'black' }}>Foreign Currency</h1>
      <Cards2 />
      <Table2 />
    </div>
  );
};

export default MainDash2;
