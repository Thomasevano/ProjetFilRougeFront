import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import Filter from '../atoms/FilterDataviz/Filter';

const BubbleChart = ({waste, setWaste, nbDays, setNbDays, isOlympic, setIsOlympic}) => {

  const [wasteTwoWeeks, setWasteTwoWeeks] = useState([]);
  const [wasteOlympics, setWasteOlympics] = useState([]);

  const width = 900;
  const height = 600;
  const svgRef = useRef();
  const div = d3.select(svgRef.current);
  const svg = createSVG();
  var hierachalData = '';

  const DrawChart = (waste) => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width - 5 , height - 5])
    const root = packLayout(hierachalData);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      // .enter()
      // .append("g")
      .join('g')
      .attr("transform", d =>  `translate(${d.y + 200},${d.x - 200})`)

    leaf.append("circle")
        .attr('r', d => d.r)
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

    let totalTons = div.append('div')
    .attr('class', 'totalTons')
    .style('width', "257px")
    .style('height', "101px")
    // .append('p')
    // .text('TOTAL')
    .append('p')
    .text('TOTAL ' + waste.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons')
  }

  const UpdateChart = (days, olympic) => {

    useEffect(() => {
      if (days === 14) {
      fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`)
        .then(response => response.json())
        .then(result => setWasteTwoWeeks(result))
        .catch(e => console.error(e))
      hierachalData = makeHierarchy(wasteTwoWeeks);
        console.log('wasteTwoWeeks')
    }
    else if (olympic === true) {
      fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${days}/${olympic}`)
        .then(response => response.json())
        .then(result => setWasteOlympics(result))
        .catch(e => console.error(e))

       hierachalData = makeHierarchy(wasteOlympics);
      console.log('wasteOlympics')
    }
    },[])
    
    // else {
    //   console.log("waste")
    //   hierachalData = makeHierarchy(waste);
    // }

    let packLayout = pack([width - 5 , height - 5])
    const root = packLayout(hierachalData);
    
    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .transition()
      // .attr("transform", d =>  `translate(${d.y + 300},${d.x - 330})`)

    leaf.select('circle')
        .duration(500)
        .attr('r', d => d.r * 1.5)
    
    svg.selectAll('g')
        .select('.data-tons')
        .data(waste)
        .transition()
        .duration(500)
        .text(d => d.tons + ' tons');

    // let totalTons = div.select('div')
    // .duration(500)
    // .text('TOTAL ' + waste.reduce((accumulator, d) => accumulator + d.tons ,0) + ' tons')
    }
  
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
    // .padding(3)
    .padding(paddingValue(nbDays))
  }

  function paddingValue(nbDays) {
    if (nbDays === 14) {
        return 5
      }
      else
      return 100
  }

  // const valueChecked = () => {}

  return (
    <div className="wasteAmountBlock" ref={svgRef}>
      {DrawChart(waste)}
      {/* <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={UpdateChart(waste, setNbDays, 1, false)} secondLabelId="2WeeksParis" secondLabel="2 Weeks" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, false)}></Filter> */}
      {/* <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={UpdateChart} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" labelDays="1" labelOlympics="false" secondLabelDays="14" secondLabelOlympics="false"></Filter> */}
      <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={UpdateChart} secondLabelId="2WeeksParis" secondLabel="2 Weeks" labelDays={1} labelOlympics={false} secondLabelDays={14} secondLabelOlympics={false}></Filter>
      {/* <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={UpdateChart(waste, setNbDays, 1, true)} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, true)}></Filter> */}
      <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={UpdateChart} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" labelDays={1} labelOlympics={true} secondLabelDays={1} secondLabelOlympics={true}></Filter>
    </div>
  )
}

export default BubbleChart;