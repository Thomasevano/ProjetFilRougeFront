import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BubbleChart(wasteData) {
  const waste = wasteData.wasteData
  const svgRef = useRef();

  const width = 100 + '%';
  const height = 1700;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
    svg
      .selectAll('circle')
      .data(waste)
      .join('circle')
      .attr('r', waste => waste.tons / 3)
      .attr('cx', 1000 )
      .attr('cy', waste => waste.tons + 10)
      .attr('fill-opacity', 0.7)
      // .attr('fill', '#E2E2E2');
      .attr('fill', 'navy');
    // svg
    //   .append('text')
    //   .data(waste)
    //     .text(waste => waste.name)
  }, [waste])

  return (
    <svg className="bubbleChart" ref={svgRef}></svg>
  )
}

export default BubbleChart;