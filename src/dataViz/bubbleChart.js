import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BubbleChart = ({waste, setWaste, nbDays, setNbDays, isOlympic, setIsOlympic}) => {
  const svgRef = useRef();

  const width = 1241;
  const height = 600;
  let div = createDiv();
  let svg = createSVG();
  // console.log(waste)

  const DrawChart = (waste) => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width -5 , height - 5])
    const root = packLayout(hierachalData);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      // .enter()
      // .append("g")
      .join('g')
      .attr("transform", d =>  `translate(${d.y + 300},${d.x - 330})`)

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

  const UpdateChart = (waste, setNbDays, days) => {
    let hierachalData = makeHierarchy(waste)
    let packLayout = pack([width - 5 , height - 5])
    const root = packLayout(hierachalData);
    setNbDays(days)
    
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
    DrawChart(waste)
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
    // .padding(paddingValue(nbDays))
  }

  function paddingValue(nbDays) {
    if (nbDays === 14) {
        return 3
      }
      else
      return 3
  }

  return (
    <div>
    {console.log(nbDays)}
    {console.log(waste.map(waste => waste.tons))}
    <button onClick={() => UpdateChart(waste, setNbDays, 3)}> 2 weeks</button>
      {/* {/* <button onClick={() => setNbDays(14)}>2 weeks in paris</button> */}
      {/* <button onClick={() => setIsOlympic(true)}>1 day in paris during olympics</button> */}
      {/* <button onClick={() => {setNbDays(14); setIsOlympic(true)}}>14 days in paris during olympics</button> */}
      <div className="wasteAmountBlock" ref={svgRef}>
      </div>
    </div>
    
  )
}

export default BubbleChart;