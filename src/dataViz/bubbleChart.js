import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BubbleChart(wasteOneDay, wasteTwoWeeks, wasteOlympicsOneDay, wasteOlympicsTwoWeeks) {
  // const [waste, setWaste] = useState([wasteParisOneDay.wasteParisOneDay])
  let waste = wasteOneDay.wasteOneDay
  const wastePTW = wasteOneDay.wasteTwoWeeks
  const wastePOOD = wasteOneDay.wasteOlympicsOneDay
  const wastePOTW = wasteOneDay.wasteOlympicsTwoWeeks
  const svgRef = useRef();

  const width = 1241;
  const height = 600;
  let div = createDiv();
  let svg = createSVG();

  useEffect(() => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width - 5, height - 5])
    const root = packLayout(hierachalData);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      // .attr("transform", d => `translate(${d.y - 200},${d.x + 100})`);
      .attr("transform", d => `translate(${d.y + 200},${d.x - 330})`);

    leaf.append("circle")
        .attr("r", d => d.r)
        .attr("fill", "#C4C4C4");
  
    leaf.append("text")
        .data(waste)
        .attr('class', 'data-text data-name')
        .attr("x", - 4 + "%")
        // .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
        .attr("y", - 30)
        .text(d => d.name)
  
    leaf.append("text")
        .data(waste)
        .attr('class', 'data-text data-tons')
        .attr('x', - 3 + '%')
        .text(d => d.tons + ' tons');
    
    svg.append('svg')
    .attr('class', 'circle-opacity')
    .attr("width", 200)
    .attr("height", 250)
    .append('circle')
    .attr('cx', '0')
    .attr('cy', '140')
    .attr('r', '120')
    .attr('stroke-width', '0')
    .attr('fill', '#FB8070')

    svg.append('svg')
    .attr('class', 'circle')
    .attr("width", 200)
    .attr("height", 200)
    .append('circle')
    .attr('cx', '0')
    .attr('cy', '90')
    .attr('r', '65')
    .attr('stroke-width', '0')
    .attr('fill', '#F3F8F9')

    div.append('div')
    .attr('class', 'totalTons')
    .style('width', "257px")
    .style('height', "101px")
    .append('p')
    .text('TOTAL')
    .append('p')
    .text(waste.reduce((accumulator, d)=> accumulator + d.tons ,0) + ' tons')
  }, [waste])
  
  function createSVG() {
  return div
    .append("svg")
    .attr("class", "wasteAmount")
    .attr("width", width)
    .attr("height", height)
  }

  function createDiv() {
    return d3.select(svgRef.current)
      // .attr("width", width)
      // .attr("height", height)
  }

  function makeHierarchy(data) {
    return d3.hierarchy({ children: data}).sum(d => d.tons)
  }

  function pack(size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }

  return (
    <div>
      <button onClick= {() => waste = waste.map(tons => tons * 13.4)}>2 weeks in paris</button>
      <div className="wasteAmountBlock" ref={svgRef}></div>
    </div>
    
  )
}

export default BubbleChart;