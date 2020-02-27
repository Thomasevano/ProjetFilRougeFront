import React, { useRef } from 'react';
import * as d3 from 'd3';
import Filter from '../atoms/FilterDataviz/Filter';

const BubbleChart = ({waste}) => {
  let width = 1250;
  let height = 700;
  if (window.innerWidth <= 375) {
    width = 355;
    height = 500;
  }
  else if (window.innerWidth <= 768){
    width = 600;
    height = 600;
  }
  const svgRef = useRef();
  const div = d3.select(svgRef.current);
  const svg = createSVG();
  let hierachalData = makeHierarchy(waste)
  let packLayout = pack([height - 5 , width - 5])
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

    var node = svg
      .selectAll('.node')
      .data(root.leaves())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr("transform", d =>  `translate(${d.y},${d.x - 90})`)
      .append('g')
      .attr('class', 'graph');

    node
      .append('circle')
      .attr('class', 'circle')
      .attr('r', d => d.r / 1.8)
      .attr("fill", d => d.data.is_recyclabe ? "url(#recyclable)" : "url(#non-recyclable)")

    var defs = svg.append("defs");
    var recyclable = defs.append("linearGradient")
      .attr("id", "recyclable")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    recyclable.append("stop")
      .attr('class', 'start')
      .attr("offset", "0%")
      .attr("stop-color", "#55B297")
      .attr("stop-opacity", 1);

    recyclable.append("stop")
      .attr('class', 'end')
      .attr("offset", "100%")
      .attr("stop-color", "#29E898")
      .attr("stop-opacity", 1);

   var nonRecyclable = defs.append("linearGradient")
      .attr("id", "non-recyclable")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    nonRecyclable.append("stop")
      .attr('class', 'start')
      .attr("offset", "0%")
      .attr("stop-color", "#005258")
      .attr("stop-opacity", 1);

    nonRecyclable.append("stop")
      .attr('class', 'end')
      .attr("offset", "100%")
      .attr("stop-color", "#29897E")
      .attr("stop-opacity", 1);

    node
      .append('text')
      .attr('class', 'data-text data-name')
      .attr("y", - 12)
      .text(d => d.data.name)

    node
      .append('text')
      .attr('class', 'data-text data-tons')
      .attr("y", + 12)
      .text(d => d.data.tons + ' tons')

      if (window.innerWidth <= 375) {
        svg.append("circle").attr("cx",50).attr("cy",300).attr("r", 6).style("fill", "url(#recyclable)")
        svg.append("circle").attr("cx",50).attr("cy",330).attr("r", 6).style("fill", "url(#non-recyclable)")
        svg.append("text").attr("x", 70).attr("y", 305).text("Recyclable").attr('class', 'legend-name')
        svg.append("text").attr("x", 70).attr("y", 335).text("Non-Recyclable").attr('class', 'legend-name')
      }
      else {
        svg.append("circle").attr("cx",50).attr("cy",100).attr("r", 12).style("fill", "url(#recyclable)")
        svg.append("circle").attr("cx",50).attr("cy",150).attr("r", 12).style("fill", "url(#non-recyclable)")
        svg.append("text").attr("x", 90).attr("y", 105).text("Recyclable").attr('class', 'legend-name')
        svg.append("text").attr("x", 90).attr("y", 155).text("Non-Recyclable").attr('class', 'legend-name')
      }
      
  }

  let totalTons = 
  div.append('div')
  .attr('class', 'totalTons')
  .append('div');

  totalTons.append('p')
  .text('TOTAL')
  totalTons.append('p')
  .text(waste.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons')

  const Update = (days, olympic) => {
    fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`)
    .then(response => response.json())
    .then(result => UpdateBubble(result))
    .then(console.log(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`))
    .catch(e => console.error(e))

    const UpdateBubble = (data) => {
      let hierachalData = makeHierarchy(data)
      const dataRoot = packLayout(hierachalData);
      let circle = svg
        .selectAll('.node')
        .select('.graph')
        .select('circle')
        .data(dataRoot.leaves())
        .transition()

      document.querySelectorAll('.data-tons').forEach((node, index) => {
        node.innerHTML = Math.round(data[index].tons * 100)/100 + ' tons';
      })
      document.querySelector('.totalTons div')
        .innerHTML = (`<p>TOTAL</p>
        <p>${data.reduce((accumulator, d) => Math.round(accumulator + d.tons * 100)/100 ,0) + ' tons'}</p>`)
      if (days === 14 && olympic === false) {
        circle.attr('r', d => d.r / 1.3)
      }
      else if (days === 14 && olympic === true) {
        circle.attr('r', d => d.r )
      }
      else if (days === 1 && olympic === true) {
        circle.attr('r', d => d.r / 1.5)
      }
      else if (days === 1 && olympic === false) {
        circle.attr('r', d => d.r / 1.8)
      }
    }
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