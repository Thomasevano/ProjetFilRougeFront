import React, {useState, useEffect} from 'react';
import * as d3 from "d3";

const TreeMap = ({monuments}) => {

  const[trilibs, setTrilibs] = useState({})
  const[trimobiles, setTrimobiles] = useState({})

  //Create a tag for trilibs click on monument
  React.useEffect(() => {
    d3.selectAll('.vignetteTrimobiles').remove()

    d3.selectAll('.contentVignette')
      .append('div')
      .attr('class','vignetteTrimobiles')
      .append('ul')
      .style('column-count', (d) => {
        if (trimobiles.length > 10) {
          return 2
        } else {
          return 1
        }
      })
      .selectAll('li')
      .data(trimobiles)
      .enter()
      .append('li')
      .style('list-style-image', 'url(./data/puceList.png)')
      .append('a')
      .attr('target', '_blank')
      .attr('href', (d) => `https://www.google.com/maps/search/?api=1&query=${d.latitude},${d.longitude}`)
      .text((d) => d.address)

    d3.selectAll('.vignetteTrimobiles')
      .append('p')
      .text( (d) => {
        if (trimobiles == "") {
          return 'There is no Tri Mobile around here at the moment. Please make sure to take your own bag for your waste.'
        }
      })
  }, [trimobiles])

  //Create a tag for trimobiles on click on monument
  React.useEffect(() => {
    d3.selectAll('.vignetteTrilibs').remove()

    d3.selectAll('.contentVignette')
      .append('div')
      .attr('class','vignetteTrilibs')
      .append('ul')
      .style('column-count', (d) => {
        if (trilibs.length > 10) {
          return 2
        } else {
          return 1
        }
      })
      .selectAll('li')
      .data(trilibs)
      .enter()
      .append('li')
      .style('list-style-image', 'url(./data/puceList.png)')
      .append('a')
      .attr('target', '_blank')
      .attr('href', (d) => `https://www.google.com/maps/search/?api=1&query=${d.latitude},${d.longitude}`)
      .text((d) => d.address)

    d3.selectAll('.vignetteTrilibs')
      .append('p')
      .text( (d) => {
        if (trilibs == "") {
          return 'There is no Trilib around here at the moment. Please make sure to take your own bag for your waste.'
        }
      })
  }, [trilibs])

  const drawChart = (listMonument) => {
    const data = {"children": listMonument}
    
    // set the dimensions and margins of the graph
    const sizeWindow = window.innerWidth - 50;

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
      .attr('id', (d) => d.data.id)
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
      .on("click", handleClickMonument)
      .append('xhtml:div')
      .attr('class' ,'vignetteContainer')

    vignette.append("xhtml:p")
      .attr('class', 'place')
      .attr("x", function (d) {
        return d.x0 + 5
      }) // +10 to adjust position (more right)
      .attr("y", function (d) {
        return d.y0 + 20
      }) // +20 to adjust position (lower)
      .text(function (d) {
        return d.data.name
      })

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

    vignette.append('xhtml:img')
      .attr('class', 'image')
      .style('height', function(d) {
        var pSize = document.querySelector('.vignette' + d.data.id + " .place");
        var p2Size = document.querySelector('.vignette' + d.data.id + " .sport");
        var vSize = d.y1 - d.y0;

        return vSize - pSize.offsetHeight - p2Size.offsetHeight - 40 + 'px'
      })
      .attr('src', (d) => d.data.img_url)
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
      .selectAll('div')
      .data(data.children)
      .enter()
      .append('div')
      .attr('class', (d) => 'zoomMonument vignette' + d.id)

    const backMondrian = zoomVignette.append('div')
      .attr('class', 'buttonBack')
      .on("click", handleClickBackMondrian)

    backMondrian.append('img')
      .attr('src', './data/arrowSecondaryButton.svg')

    backMondrian.append('p')
      .text('Back to Mondrian Grid')

    const illustration = zoomVignette.append('div')
      .attr('class', 'imageZoom')

    illustration.append('h3')
      .text((d) => d.name)

    illustration.append('h4')
      .text((d) => d.sport)
      
    illustration.append("img")
      .attr('src', (d) => d.img_url)

    const contentVignette = zoomVignette.append('div')
      .attr('class', 'contentVignette')

    contentVignette.append('img')
      .attr('src', './data/treeMap/trilib.png')
      .attr('class', 'imageTrilib')

    contentVignette.append('img')
      .attr('src', './data/treeMap/trimobile.png')
      .attr('class', 'imageTrimobile')

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

    button.append('p')
      .attr('class', 'textTrimobile')
      .text('Tri Mobile is a device that allows you to drop off all of your bulky items.')

    button.append('p')
      .attr('class', 'textTrilib')
      .text('These proximity waste containers allows you to collect more and better, in particular glass, plastic and metal packaging, paper and cardboard.')

    function handleClickMonument() {
      d3.select('.vignetteMonumentContainer')
        .style('display', 'block')

      d3.select('.treeMap svg')
        .style('display', 'none')

      //choose the vignette to display
      var vignette = document.querySelector('.zoomMonument.' + this.classList[1])

      d3.select(vignette)
        .style('display', 'flex')

      //Get trimobiles
      var trimobileID = []

      data.children.forEach(element => {
       if (this.id == element.id) {
         trimobileID.push(element.interests.trimobiles)
        }
      });
     
      var trimobilesID = trimobileID.join()
     
      if(trimobilesID === ""){
        trimobilesID = "null"
      }

      fetch(`http://127.0.0.1:8000/trimobiles/${trimobilesID}`)
        .then(response => response.json())
        .then(result => setTrimobiles(result))
        .catch(e => console.error(e))

      //Get trilibs
      var trilibID = []

      data.children.forEach(element => {
        if (this.id == element.id) {
          trilibID.push(element.interests.trilibs)
        }
      });
      
      var trilibsID = trilibID.join()

      if(trilibsID === ""){
        trilibsID = "null"
      }

      fetch(`http://127.0.0.1:8000/trilibs/${trilibsID}`)
      .then(response => response.json())
      .then(result => setTrilibs(result))
      .catch(e => console.error(e))
    }

    // Click on trimobile et trilib button
    function handleClickButton() {
      let trilib = document.querySelectorAll('.buttonTrilib')
      let trimobile = document.querySelectorAll('.buttonTrimobile')

      if (!this.classList.contains('active') && this.classList.contains('buttonTrimobile')) {
        for (let i = 0; i < trilib.length; i++) {
          trilib[i].classList.remove('active')
          trimobile[i].classList.add('active')

          d3.selectAll('.vignetteTrimobiles')
            .style('display', 'block')

          d3.selectAll('.vignetteTrilibs')
            .style('display', 'none')

          d3.selectAll('.textTrimobile')
            .style('display', 'block')

          d3.selectAll('.textTrilib')
            .style('display', 'none')

          d3.selectAll('.imageTrimobile')
            .style('display', 'inline')

          d3.selectAll('.imageTrilib')
            .style('display', 'none')

        }
      } else if (!this.classList.contains('active') && this.classList.contains('buttonTrilib')) {
        for (let i = 0; i < trilib.length; i++) {
          trimobile[i].classList.remove('active')
          trilib[i].classList.add('active')

          d3.selectAll('.vignetteTrimobiles')
            .style('display', 'none')

          d3.selectAll('.vignetteTrilibs')
            .style('display', 'block')

          d3.selectAll('.textTrimobile')
            .style('display', 'none')

          d3.selectAll('.textTrilib')
            .style('display', 'block')

          d3.selectAll('.imageTrimobile')
            .style('display', 'none')

          d3.selectAll('.imageTrilib')
            .style('display', 'inline')
        }
      }
    }

    //Click on button back 
    function handleClickBackMondrian() {

      let trilib = document.querySelectorAll('.buttonTrilib')
      let trimobile = document.querySelectorAll('.buttonTrimobile')
      
      for (let i = 0; i < trilib.length; i++) {
        trilib[i].classList.add('active')
        trimobile[i].classList.remove('active')
      }

      d3.selectAll('.vignetteTrimobiles')
        .style('display', 'none')

      d3.selectAll('.vignetteTrilibs')
        .style('display', 'block')

      d3.selectAll('.textTrimobile')
        .style('display', 'none')

      d3.selectAll('.textTrilib')
        .style('display', 'block')

      d3.selectAll('.imageTrimobile')
        .style('display', 'none')

      d3.selectAll('.imageTrilib')
        .style('display', 'inline')

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
  }, [monuments])

  return (
    <div className="treeMap"></div>
  )
}

export default TreeMap;