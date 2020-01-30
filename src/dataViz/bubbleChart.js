import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BubbleChart(wasteData) {
  const waste = wasteData.wasteData
  const svgRef = useRef();

  const data = [
    {
      "id": 1,
      "name": "Cardbord",
      "amount_of_waste": 300,
    },
    {
      "id": 2,
      "name": "Newspaper",
      "amount_of_waste": 660,
    },
    {
      "id": 3,
      "name": "Metals",
      "amount_of_waste": 90,
    },
    {
      "id": 4,
      "name": "Glass",
      "amount_of_waste": 300,
    },
    {
      "id": 5,
      "name": "Uncategorized",
      "amount_of_waste": 660,
    },
    {
      "id": 6,
      "name": "Fermentables",
      "amount_of_waste": 360,
    },
    {
      "id": 7,
      "name": "Sanitary Textile",
      "amount_of_waste": 120,
    },
    {
      "id": 8,
      "name": "Clothes",
      "amount_of_waste": 90,
    },
    {
      "id": 9,
      "name": "Plastic",
      "amount_of_waste": 300,
    }
  ];
  console.log(data)

  function createSVG() {
    return d3.select(svgRef.current)
      .append('svg')
      .attr('width', 400)
      .attr('height', 100 + '%')
      .attr('style', 'border: thin red solid')
  }
  
  function drawChart(svg) {
    let hierachalData = makeHierarchy(data)
    let packLayout = pack(400 - 5, 400 - 5)
    const root = packLayout(hierachalData);

    const leaf = svg.selectAll('g')
      .data(root.leaves())
      .join('g')
        .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`);

    leaf.append('circle')
      .attr('r', d => d.r)
      .attr('fill-opacity', 0.7)
      .attr('fill', 'navy');

    // leaf.append('clipPath')
    //   .append('use')
    //     .attr('xlink:href', d => d.leafUid.href);

    // leaf.append('text')
    //   .attr('clip-path', d => d.clipUid)
    //   .selectAll('tspan')
    //   .data(d => d.data.name.split(/(?=[A-Z[^A-Z]])/g))
    //   .join('tspan')
    //     .attr('x', 0)
    //     .attr('y', (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
    //     .text(d => d);

    // leaf.append('title')
    //   .text(d => `${d.data.title}\n${format(d.value)}`);

    return svg.node();
  }

  function pack(size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }

  function makeHierarchy(data) {
    return d3.hierarchy({ children: data })
    .sum(d => d.tons)
  }

  useEffect(() => {
    let svg = createSVG();
    drawChart(svg)
  }, [])

  return (
    <div className="bubbleChart" ref={svgRef}></div>
  )
}

export default BubbleChart;