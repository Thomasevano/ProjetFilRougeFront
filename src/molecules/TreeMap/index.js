import React, { useState, useEffect } from "react";
import TreeMap from "../../dataViz/treeMap";
import "./styles.scss";

export default (TreeMapSet) => {
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/monument-all-dist/2000`)
      .then((response) => response.json())
      .then((result) => setMonuments(result));
  }, []);

  return (
    <div className="treeMapSet">
      <h2 className="title-dataviz circle">
        Find where you can limit your impact
        <span className="circle"></span>
      </h2>
      {monuments.length ? <TreeMap monuments={monuments} /> : ""}
    </div>
  );
};
