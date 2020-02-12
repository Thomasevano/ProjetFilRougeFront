import React, {useState, useEffect} from 'react';
import * as d3 from "d3";

const TreeMap = ({monuments}) => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0,
  //     velib: {}
  //   }
  // }

  const[count, setCount] = useState(0)
  const[trilib, setTrilib] = useState({})
  const[trimobiles, setTrimobiles] = useState({})

  // componentDidUpdate() {
  //   this.drawChart();
  // }

  const drawChart = (listMonument) => {
    const data = {"children": listMonument}
    
    // set the dimensions and margins of the graph
    const sizeWindow = window.innerWidth - 115;

    const margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },

    width = sizeWindow - margin.left - margin.right - 80,
    height = 100 * data.children.length - margin.top - margin.bottom;
    

    // append the svg object to the body of the page
    var svg = d3.select(".treeMap")
      .append("svg")
      .attr("width", '100%')
      .attr("height", 100 * data.children.length + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Give the data to this cluster layout:
    var root = d3.hierarchy(data).sum(function(d) {
      if (d.nbTrilibs + d.nbTrimobiles > 20) {
        return d.nbTrilibs + d.nbTrimobiles + 30
      } else if (d.nbTrilibs + d.nbTrimobiles === 0) {
        return 20
      } else {
        return d.nbTrilibs + d.nbTrimobiles + 30
      }
    }) // Here the size of each leave is given in the 'value' field in input data

    // Then d3.treemap computes the position of each element of the hierarchy
    d3.treemap()
      .size([width, height])
      .padding(20)
      (root);

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
      .on("click", handleClickMonument)

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
      .attr('src', (d) => d.data.img_url)
      .style('object-fit', 'cover')
      .style('background', '#C4C4C4')
      .style('border-radius', '5px')
      .style('display', function(d) {
        if ((d.y1 - d.y0) > 120) {
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

    //Description of points of interest by monument
    const zoomVignette = d3.select(".treeMap")
      .append('div')
      .attr('class', 'vignetteMonumentContainer')
      .style('display', 'none')
      .style('width', 'calc(100% - 92px)')
      //.style('position', 'absolute')
      .style('height', '100vh')
      .style('top', '0px')
      .style('margin-left', '92px')
      .selectAll('div')
      .data(data.children)
      .enter()
      .append('div')
      //.attr('id', (d) => 'vignette' + d.id)
      .attr('class', (d) => 'zoomMonument vignette' + d.id)
      .style('display', 'none')
      //.style('display', 'flex')
      .style('width', '90%')
      .style('height', '70%')
      .style('margin', 'auto')
      .style('background-color','#FFFFFF')
      .style('border-radius', '10px')
      .style('padding', '20px')
      .style('position', 'relative')
      .style('top', '50%')
      .style('transform', 'translateY(-50%)')

    const backMondrian = zoomVignette.append('div')
    .style('position', 'absolute')
    .style('display', 'flex')
    .style('top', '-60px')
    .style('left', '0px')
    .style('cursor','pointer')
    .on("click", handleClickBackMondrian)

    backMondrian.append('img')
    .attr('src', './data/arrowSecondaryButton.svg')
    .style('transform', 'rotate(180deg)')

    backMondrian.append('p')
    .text('Back to Mondrian Grid')
    .style('margin-left', '30px')
    .style('color', '#005258')
    .style('font-szie', '16px')

    const illustration = zoomVignette.append('div')
      .style('text-align', 'left')
      .style('width', '35%')

    illustration.append('h3')
    .text((d) => d.name)
    .style('color', '#005258')
    .style('font-size', '30px')
    .style('margin', '0px')

    illustration.append('h4')
    .text((d) => d.sport)
    .style('color', '#6A6D73')
    .style('font-size', '14px')
      
    illustration.append("img")
      .attr('src', (d) => d.img_url)
      .style('width', '100%')
      .style('object-fit', 'contain')
      .style('border-radius', '5px')

    const contentVignette = zoomVignette.append('div')
    .attr('class', 'contentVignette')

    const button = contentVignette.append('div')
    .attr('class', 'buttonContainer')

    button.append('button')
    .attr('class', " buttonVignette buttonTrilib active")
    .text('Trilib')
    .on("click", handleClickButton)

    button.append('button')
    .attr('class', "buttonVignette buttonTrimobile")
    .text('Tri Mobile')
    .on("click", handleClickButton)

    // contentVignette.append('div')
    //   //.text("Trilib :")
    //   .attr('class','vignetteTrilib')
    //   .append('ul')
    //   .each(function(d) {
    //     d3.select(this)
    //     .selectAll('li')
    //     .data(d.interets.trilib)
    //     .enter()
    //     .append('li')
    //     .text(function(d) {
    //       return "Le point d'interet est à " + d.distance_m + " m"
    //     })
    //     .style('text-align', 'left')
    //     .style('list-style-image', 'url(./data/puceList.png)')
    //     .style('margin-top', '5px')
    //   })

    // contentVignette.append('div')
    //   //.text("Trimobile :")
    //   .attr('class','vignetteTrimobile')
    //   .append('ul')
    //   .each(function(d) {
    //     d3.select(this)
    //     .selectAll('li')
    //     .data(d.interets.trimobile)
    //     .enter()
    //     .append('li')
    //     .text(function(d) {
    //       return "Le point d'interet est à " + d.distance_m + " m"
    //     })
    //     .style('text-align', 'left')
    //     .style('list-style-image', 'url(./data/puceList.png)')
    //     .style('margin-top', '5px')
    //   })

    function handleClickMonument() {
      // fetch(`http://127.0.0.1:8000/trimobiles/1,4,10`)
      //  .then(response => response.json())
      //  .then(result => setTrilib(result))
      //  console.log(trilib)


      d3.select('.vignetteMonumentContainer')
      .style('display', 'block')

      d3.select('.treeMap svg')
      .style('display', 'none')

      //choose the vignette to display
      var vignette = document.querySelector('.zoomMonument.' + this.classList[1])

      d3.select(vignette)
      .style('display', 'flex')


      fetch(`http://127.0.0.1:8000/trilib/1`)
       .then(response => response.json())
       .then(result => setTrilib(result))

      console.log(trilib)
    }

    function handleClickButton() {
      // let button = document.querySelector('.buttonVignette.active')
      // button.classList.remove('active')
      // this.classList.add("active");

      // if (this.classList.contains('buttonTrilib')) {
      //   let trilib = document.querySelectorAll('vignetteTrilib')
      //   let trimobile = document.querySelectorAll('vignetteTrimobile')
      //   for(let i = 0; i < trilib.length; i++) {
      //     trilib[i].style.display('block')
      //   }
      //   for(let i = 0; i < trimobile.length; i++) {
      //     trimobile.style.display('none')
      //   }
      // }

      fetch(`http://127.0.0.1:8000/trimobiles/1,4,10`)
       .then(response => response.json())
       .then(result => setTrimobiles(result))
       console.log(trimobiles)
      d3.select('.buttonContainer')
      .append('div')
      .data(trimobiles)
      .enter()
      .append('p')
      .style('position', 'absolute')
      .style('z-index', '1')
      .text(trimobiles.address)

      // d3.selectAll('.treeMap svg').remove();

      // fetch(`http://127.0.0.1:8000/trimobiles/1,4,10`)
      //  .then(response => response.json())
      //  .then(result => setTrimobiles(result))
      //  .then(console.log(trimobiles))
      
    }

    function handleClickBackMondrian() {
      d3.select('.treeMap svg')
      .style('display', 'block')

      d3.select(this.parentNode)
      .style('display', 'none')

      d3.select('.vignetteMonumentContainer')
      .style('display', 'none')
    }
  }

  useEffect(() => {
    drawChart(monuments);
  })

  return (
    <div className="treeMap"></div>
  )
}

export default TreeMap;