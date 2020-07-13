import React, { useState, useEffect } from "react";
import ChartBar from "../../dataViz/chartBar";
import Leaderboard from "../Leaderboard/Leaderboard";
import "./styles.scss";

export default (ChartBarSet) => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch("https://green-paris-api.herokuapp.com/country-ranking-not-average")
      .then((response) => response.json())
      .then((result) => setCountrys(result));
  }, []);

  return (
    <div className="chartBarSet">
      <h2 className="title-dataviz circle">
        Our world’s best supporters
        <span className="circle"></span>
      </h2>
      <div className="chartBarDataViz">
        {countrys.length ? <ChartBar countrys={countrys} /> : ""}
        <Leaderboard />
      </div>
    </div>
  );
};
