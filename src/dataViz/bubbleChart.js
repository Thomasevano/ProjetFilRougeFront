import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Filter from '../atoms/FilterDataviz/Filter';

const BubbleChart = ({waste, setWaste, nbDays, setNbDays, isOlympic, setIsOlympic}) => {
  const svgRef = useRef();

  const width = 900;
  const height = 600;
  let div = createDiv();
  let svg = createSVG();
  // console.log(waste)

  const DrawChart = () => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width -5 , height - 5])
    const root = packLayout(hierachalData);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      // .enter()
      // .append("g")
      .join('g')
      .attr("transform", d =>  `translate(${d.y + 200},${d.x - 200})`)

    leaf.append("circle")
        // .attr("r", function(d) {
        //   if (nbDays === 14) {
        //     return d.r / 1.5
        //   }
        //   else
        //   return d.r
        // })
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

  const UpdateChart = (waste, setNbDays, days, olympic) => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width - 5 , height - 5])
    const root = packLayout(hierachalData);
    setNbDays(days)
    setIsOlympic(olympic)
    console.log(nbDays)
    
    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .transition()
      // .attr("transform", d =>  `translate(${d.y + 300},${d.x - 330})`)

    leaf.select('circle')
        .duration(500)
        .attr('r', d => d.r * 1.5)
        
    // svg.selectAll('g')
    //     .select('text')
    //     .data(waste)
    //     .transition()
    //     .duration(500)
    //     .text(d => d.name);
    
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

  useEffect(() => {
    DrawChart()
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

  return (
    <div className="wasteAmountBlock" ref={svgRef}>
      {console.log(nbDays)}
      {console.log(waste.map(waste => waste.tons))}
      {/* <div className="filter">
        <h3 className="filter-title">Duration</h3>
        <div className="filter-button">
          <input type="checkbox" className="UpdateButton" id="1DayParis" defaultChecked={true} onClick={() => UpdateChart(waste, setNbDays, 1, false)}></input>
          <label htmlFor="1DayParis">1 Day</label>
          <input type="checkbox" className="UpdateButton" id="2WeeksParis" onClick={() => UpdateChart(waste, setNbDays, 14, false)}></input>
          <label htmlFor="2WeeksParis">2 Weeks</label>
        </div>
      </div> */}
      {/* <div>
        <h3 className="filter-title">Population</h3>
        <div>
          <input type="checkbox" className="UpdateButton" id="1DayParisOlympics" defaultChecked={true} onClick={() => UpdateChart(waste, setNbDays, 14, false)}></input>
          <label htmlFor="1DayParisOlympics">Paris</label>
          <input type="checkbox" className="UpdateButton" id="2WeeksParisOlympics" onClick={() => UpdateChart(waste, setNbDays, 14, false)}></input>
          <label htmlFor="2WeeksParisOlympics">Olympics</label>
        </div>
      </div> */}
      <Filter title="Duration" labelId="1DayParis" label="1 Day" functionName={() => UpdateChart(waste, setNbDays, 1, false)} secondLabelId="2WeeksParis" secondLabel="2 Weeks" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, false)}></Filter>
      <Filter title="Population" labelId="1DayParisOlympics" label="Paris" functionName={() => UpdateChart(waste, setNbDays, 1, true)} secondLabelId="2WeeksParisOlympics" secondLabel="Olympics" secondFunctionName={() => UpdateChart(waste, setNbDays, 14, true)}></Filter>
    </div>
  )
}

export default BubbleChart;