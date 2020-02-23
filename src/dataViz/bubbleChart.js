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

  //   const leaf = svg
  //     .selectAll("g")
  //     .data(root.leaves())
  //     .join('g')
  //     .attr("transform", d =>  `translate(${d.y + 200},${d.x - 200})`)

  //   leaf.append("circle")
  //       .attr('r', d => d.r)
  //       .attr("fill", "#C4C4C4");
  
  //   leaf.append("text")
  //       .data(waste)
  //       .attr('class', 'data-text data-name')
  //       .attr("x", - 4 + "%")
  //       // .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
  //       .attr("y", - 30)
  //       .text(d => d.name)
  
  //   leaf.append("text")
  //       .data(waste)
  //       .attr('class', 'data-text data-tons')
  //       .attr('x', - 3 + '%')
  //       .text(d => d.tons + ' tons');

    div.append('div')
    .attr('class', 'totalTons')
    .style('width', "257px")
    .style('height', "101px")
    .append('p')
    .text('TOTAL ' + waste.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons')
  
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
      .attr('transform', function(d) {
        return 'translate(' + d.x + ' ' + d.y + ')';
      })
      .append('g')
      .attr('class', 'graph');

    node
      .append('circle')
      .attr('r', function(d) {
        return d.r;
      })
      .style('fill', '#C4C4C4');

    node
      .append('text')
      .attr('dy', '.3em')
      .style('text-anchor', 'middle')
      .text(function(d) {
        return d.data.tons;
      })
      .style('fill', '#ffffff');
    console.log('basique')
  }

  function update(days, olympic) {
    fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`)
    .then(response => response.json())
    .then(
      function(result) {
        document.querySelectorAll('circle + text').forEach((node, index) => {
          node.innerHTML = result[index].tons;
        })
        div.select('.totalTons')
        .data(result)
        .transition()
        .text('TOTAL ' + result.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons')
      }
    )
    .catch(e => console.error(e))
    
  }

  return (
    <div className="wasteAmountBlock" ref={svgRef}>
      {DrawChart1()}
      {/* <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={UpdateChart(waste, setNbDays, 1, false)} secondLabelId="2WeeksParis" secondLabel="2 Weeks" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, false)}></Filter> */}
      <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={update} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" labelDays="1" labelOlympics="false" secondLabelDays="14" secondLabelOlympics="false"></Filter>
      <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={update} secondLabelId="2WeeksParis" secondLabel="2 Weeks" labelDays={1} labelOlympics={false} secondLabelDays={14} secondLabelOlympics={false}></Filter>
      {/* <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={UpdateChart(waste, setNbDays, 1, true)} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, true)}></Filter> */}
      {/* <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={UpdateChart} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" labelDays={1} labelOlympics={true} secondLabelDays={1} secondLabelOlympics={true}></Filter> */}
    </div>
  )
}

export default BubbleChart;