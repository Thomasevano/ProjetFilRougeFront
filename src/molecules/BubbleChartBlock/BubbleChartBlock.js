import React, { useState, useEffect } from "react";
import BubbleChart from "../../dataViz/bubbleChart";
import "./BubbleChartBlock.scss";

function BubbleChartBlock() {
  const [waste, setWaste] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/records-waste`)
      .then((response) => response.json())
      .then((result) => setWaste(result));
  }, []);

  return (
    <div className="bubbleChartBlock">
      <h1 className="title-dataviz circle">
        Amounts of waste that could break records
        <span className="circle"></span>
      </h1>
      <BubbleChart waste={waste} />
    </div>
  );
}

export default BubbleChartBlock;
