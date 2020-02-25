import React, { useRef } from 'react';
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

  function Update(days, olympic) {
    fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`)
    .then(response => response.json())
    .then(
      function(result) {
        document.querySelectorAll('.data-tons').forEach((node, index) => {
          node.innerHTML = Math.round(result[index].tons * 100)/100 + ' tons';
        })
        document.querySelector('.totalTons div')
          .innerHTML = (`<p>TOTAL</p><p>${result.reduce((accumulator, d) => Math.round(accumulator + d.tons * 100)/100 ,0) + ' tons'}</p>`)
      }
    )
    .then(console.log(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`))
    .catch(e => console.error(e))
  }

  return (
    <div className="wasteAmountBlock" ref={svgRef}>
      {DrawChart1()}
      <Filter firstButtonTitle="Duration"
        firstButtonLabelId="1-day"
        firstButtonLabel="1 Day"
        firstButtonLabelId2="2-weeks"
        firstButtonLabel2="2 Weeks"
        secondButtonTitle="Population"
        secondButtonLabelId="no-olympics"
        secondButtonLabel="Paris"
        secondButtonLabelId2="olympics"
        secondButtonLabel2="Olympics"
        functionName={Update}>
      </Filter>
    </div>
  )
}

export default BubbleChart;