import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import Filter from '../atoms/FilterDataviz/Filter';

const BubbleChart = ({waste}) => {

  const width = 900;
  const height = 600;
  const svgRef = useRef();
  const div = d3.select(svgRef.current);
  const svg = createSVG();
  let hierachalData = makeHierarchy(waste)
  let packLayout = pack([width - 5 , height - 5])
  const root = packLayout(hierachalData);

  function createSVG() {
  return div
    .append("svg")
    .attr("class", "wasteAmount")
    .attr("width", width)
    .attr("height", height)
  }

  function makeHierarchy(data) {
    return d3.hierarchy({ children: data}).sum(d => d.tons)
  }

  function pack(size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }

  const DrawChart1 = () => {

    var diameter = 600;

    var bubble = d3
      .pack()
      .size([diameter, diameter])
      .padding(5);

    bubble(root);

    var node = svg
      .selectAll('.node')
      .data(root.leaves())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr("transform", d =>  `translate(${d.y + 200},${d.x - 50})`)
      .append('g')
      .attr('class', 'graph');

    node
      .append("circle")
      .attr('r', d => d.r)
      .attr("fill", "#C4C4C4");

    node
      .append('text')
      .attr('class', 'data-text data-name')
      .attr("x", - 4 + "%")
      .attr("y", - 30)
      .text(d => d.data.name)

    node
      .append('text')
      .attr('class', 'data-text data-tons')
      .attr('x', - 3 + '%')
      .text(d => d.data.tons + ' tons');
  }

  let totalTons = 
  div.append('div')
  .attr('class', 'totalTons')
  .append('div');

  totalTons.append('p')
  .text('TOTAL')
  totalTons.append('p')
  .text(waste.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons')

  function update(days, olympic) {
    fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`)
    .then(response => response.json())
    .then(
      function(result) {
        document.querySelectorAll('.data-tons').forEach((node, index) => {
          node.innerHTML = result[index].tons + ' tons';
        })
        document.querySelector('.totalTons div')
          .innerHTML = (`<p>TOTAL</p><p>${result.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons'}</p>`)
      }
    )
    .catch(e => console.error(e))
  }

  return (
    <div className="wasteAmountBlock" ref={svgRef}>
      {DrawChart1()}
      {/* <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={UpdateChart(waste, setNbDays, 1, false)} secondLabelId="2WeeksParis" secondLabel="2 Weeks" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, false)}></Filter> */}
      <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={update} secondLabelId="2WeeksParis" secondLabel="2 Weeks" labelDays={1} labelOlympics={false} secondLabelDays={14} secondLabelOlympics={false}></Filter>
      {/* <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={UpdateChart(waste, setNbDays, 1, true)} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, true)}></Filter> */}
      <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={update} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" labelDays={1} labelOlympics={true} secondLabelDays={1} secondLabelOlympics={true}></Filter>
    </div>
  )
}

export default BubbleChart;