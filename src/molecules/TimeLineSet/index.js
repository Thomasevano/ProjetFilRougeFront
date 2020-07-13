import React, { useState, useEffect } from "react";
import TimeLine from "../../dataViz/timeLine";
import "./styles.scss";

export default (TimeLineSet) => {
  const [dataTest, setDataTest] = useState([]);

  useEffect(() => {
    fetch("https://green-paris-api.herokuapp.com/waste")
      .then((response) => response.json())
      .then((result) => setDataTest(result));
  }, []);
  return (
    <div className="timeLineSet">
      <h2 className="title-dataviz circle">
        Waste likely to end up on public roads
        <span className="circle"></span>
      </h2>
      <TimeLine dataTest={dataTest} />
    </div>
  );
};
