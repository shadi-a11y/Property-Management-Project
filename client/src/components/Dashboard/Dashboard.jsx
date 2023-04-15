import React from "react";
import "./Dashboard.css";
import Cards from "./Cards/Cards";
import Table from "./Table/Table";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="header">
        <h1
          style={{
            color: "#0A1121",
          }}
        >
          Dashboard
        </h1>
        <Cards />
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
