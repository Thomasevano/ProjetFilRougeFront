import React, {Component} from 'react';
import * as d3 from "d3";
// import * as h from "d3";
// import * as d from "d3";

class TreeMap extends Component {
  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {

    const data = {"children": this.props.data}

    console.log(this.props.dataTD)
    
    // set the dimensions and margins of the graph
    const sizeWindow = window.innerWidth - 115;

    var margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },

    width = sizeWindow - margin.left - margin.right - 80,
    height = 33.5 * data.children.length - margin.top - margin.bottom;
    

    // append the svg object to the body of the page
    var svg = d3.select(".treeMap")
      .append("svg")
      .attr("width", '100%')
      .attr("height", 35 * data.children.length + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Give the data to this cluster layout:
    var root = d3.hierarchy(data).sum(function(d) {
      if (d.nbTrilibs + d.nbTrimobiles > 20) {
        return d.nbTrilibs + d.nbTrimobiles + 30
      } else if (d.nbTrilibs + d.nbTrimobiles === 0) {
        return 30
      } else {
        return d.nbTrilibs + d.nbTrimobiles + 30
      }
    }) // Here the size of each leave is given in the 'value' field in input data

    // Then d3.treemap computes the position of each element of the hierarchy
    d3.treemap()
      .size([width, height])
      .padding(20)
      (root)

    // use this information to add rectangles:

    const vignette = svg.selectAll("svg")
      .data(root.leaves())
      .enter()
      .append("foreignObject")
      .attr('class', (d) => "vignette vignette" + d.data.id)
      .attr('rx', 10)
      .attr('x', function (d) {
        return d.x0;
      })
      .attr('y', function (d) {
        return d.y0;
      })
      .attr('width', function (d) {
        return (d.x1 - d.x0);
      })
      .attr('height', function (d) {
        return (d.y1 - d.y0);
      })
      .style("cursor", "pointer")
      .style('background-color', '#ffffff')

      vignette.append("xhtml:p")
      .attr('class', 'place')
      //.attr("clip-path", 'polygon(0 0, 115px 0, 115px 100%, 0% 100%)')
      .attr("x", function (d) {
        return d.x0 + 5
      }) // +10 to adjust position (more right)
      .attr("y", function (d) {
        return d.y0 + 20
      }) // +20 to adjust position (lower)
      .text(function (d) {
        return d.data.name
      })
      .attr("font-size", "15px")
      .attr("fill", "#005258")

      vignette.append("xhtml:p")
      .attr('class', 'sport')
      .attr("x", function (d) {
        return d.x0 + 5
      }) // +10 to adjust position (more right)
      .attr("y", function (d) {
        return d.y0 + 40
      }) // +20 to adjust position (lower)
      .text(function (d) {
        return d.data.sport
      })
      .attr("font-size", "15px")
      .attr("fill", "black")

      vignette.append('xhtml:img')
      .attr('class', 'image')
      .style('width', '90%')
      .style('margin', 'auto')
      .style('height', function(d) {
        var pSize = document.querySelector('.vignette' + d.data.id + " .place");
        var p2Size = document.querySelector('.vignette' + d.data.id + " .sport");
        var vSize = d.y1 - d.y0;

        return vSize - pSize.offsetHeight - p2Size.offsetHeight - 40 + 'px'
      })
      .attr('src', 'data/intro-background-eiffelTower.jpg')
      .style('object-fit', 'cover')
      .style('background', '#C4C4C4')
      .style('border-radius', '5px')
      .style('display', function(d) {
        if ((d.y1 - d.y0) > 90) {
          return 'block'
        } else {
          return 'none'
        }
      })

      vignette.append('xhtml:div')
      .attr('class', 'interet')
      .style('top', function(d) {
        if ((d.y1 - d.y0) > 90) {
          return '-20px'
        } else {
          return '0px'
        }
      })
      .append('xhtml:p')
      .text((d) => d.data.nbTrilibs + d.data.nbTrimobiles)

      //vignette with all distance

      const vignetteD = vignette.append('xhtml:div')


    // svg.selectAll("rect")
    //   .data(root.leaves())
    //   .enter()
    //   .append("rect")
    //   .attr('class', "vignette")
    //   .attr('x', function (d) {
    //     return d.x0;
    //   })
    //   .attr('y', function (d) {
    //     return d.y0;
    //   })
    //   .attr('width', function (d) {
    //     return (d.x1 - d.x0);
    //   })
    //   .attr('height', function (d) {
    //     return (d.y1 - d.y0);
    //   })
    //   .style("fill", "#ffffff")

    // // and to add the text labels
    // svg.selectAll("text")
    //   .data(root.leaves())
    //   .enter()
    //   .append("text")
    //   .attr("x", function (d) {
    //     return d.x0 + 5
    //   }) // +10 to adjust position (more right)
    //   .attr("y", function (d) {
    //     return d.y0 + 20
    //   }) // +20 to adjust position (lower)
    //   .text(function (d) {
    //     return d.data.name
    //   })
    //   .attr("font-size", "15px")
    //   .attr("fill", "black")


    // //d3.select('.treeMap')
    //   svg.append('svg')
    //   .attr('class', 'circle opacity')
    //   .attr("width", 200)
    //   .attr("height", 270)
    //   .append('circle')
    //   .attr('cx', '0')
    //   .attr('cy', '140')
    //   .attr('r', '120')
    //   .attr('stroke-width', '0')
    //   .attr('fill', '#FB8070')

    // //d3.select('.treeMap')
    //   svg.append('svg')
    //   .attr('class', 'circle littleCircle')
    //   .attr("width", 200)
    //   .attr("height", 210)
    //   .append('circle')
    //   .attr('cx', '0')
    //   .attr('cy', '100')
    //   .attr('r', '65')
    //   .attr('stroke-width', '0')
    //   .attr('fill', '#F3F8F9')
  }

  render(){
    return <div className="treeMap"></div>
  }
}

export default TreeMap;