import React, {Component} from 'react';
import * as d3 from "d3";
import * as w from "d3";
import * as h from "d3";

class TimeLine extends Component {

  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = [12, 5, 6, 6, 9, 10, 12, 5, 6, 6, 9, 10, 12, 5, 6, 6, 9, 10, 12, 5, 6, 6, 9, 10];
    
    const svg = d3.select(".timeLine")
      .append("svg")
      .attr("height", h)
      .attr("width", data.length * 387 + "px")
      .style("background-color", "#F3F8F9");

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => 123 + i * 385)
      .attr("y", (d, i) => h - 100 * d)
      .attr("width", 200)
      .attr("height", 202)
      .attr("fill", "green")

    /* svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 100)
      .attr("y", (d, i) => h - (10 * d) - 3) */

  }
        
  render(){
    return <div className="timeLine" id={"#" + this.props.id}></div>
  }

}

export default TimeLine;