import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BubbleChart(wasteData) {
  const waste = wasteData.wasteData
  const svgRef = useRef();

  const width = 1241;
  const height = 700;
  let svg = createSVG();

  useEffect(() => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width - 5, height - 5])
    const root = packLayout(hierachalData);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

    leaf.append("circle")
        .attr("r", d => d.r)
        .attr("fill-opacity", 0.7)
        .attr("fill", "blue");
  
    leaf.append("text")
        .data(waste)
      .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
        .text(d => d.name)
  
    leaf.append("text")
        .data(waste)
        .text(d => d.tons + ' tons');
      
  }, [waste])

  function createSVG() {
    return d3.select(svgRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("style", "background-color: #F3F8F9")
  }

  function pack(size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }

  function makeHierarchy(data) {
    return d3.hierarchy({ children: data}).sum(d => d.tons)
  }

  return (
      <div className="wasteAmount" ref={svgRef}></div>
  )
}

export default BubbleChart;