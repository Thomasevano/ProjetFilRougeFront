import React, {Component} from 'react';
import * as d3 from "d3";

class TimeLine extends Component {

  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = [
      {
        "id": 1,
        "name": "Mouchoir en papier",
        "degradation_time": "1 mois",
        "trash_color": "Jaune"
      },
      {
        "id": 2,
        "name": "Pomme",
        "degradation_time": "4 mois",
        "trash_color": "Marron"
      },
      {
        "id": 3,
        "name": "Jus de fruit",
        "degradation_time": "5 mois",
        "trash_color": "Jaune"
      },
      {
        "id": 4,
        "name": "Journal",
        "degradation_time": "6 mois",
        "trash_color": "Marron"
      },
      {
        "id": 5,
        "name": "Banane",
        "degradation_time": "9 mois",
        "trash_color": "Jaune"
      },
      {
        "id": 6,
        "name": "Ticket de métro",
        "degradation_time": "1 an",
        "trash_color": "Jaune"
      },
      {
        "id": 7,
        "name": "Mégot",
        "degradation_time": "2 ans",
        "trash_color": "Vert"
      },
      {
        "id": 8,
        "name": "Bonbon",
        "degradation_time": "5 ans",
        "trash_color": "Jaune"
      },
      {
        "id": 9,
        "name": "Chewing Gum",
        "degradation_time": "5 ans",
        "trash_color": "Vert"
      },
      {
        "id": 10,
        "name": "Canette de soda",
        "degradation_time": "45 ans",
        "trash_color": "Jaune"
      },
      {
        "id": 11,
        "name": "Boîte de conserve",
        "degradation_time": "50 ans",
        "trash_color": "Jaune"
      },
      {
        "id": 12,
        "name": "Briquet",
        "degradation_time": "100 ans",
        "trash_color": "Vert"
      },
      {
        "id": 13,
        "name": "Aluminium",
        "degradation_time": "200 ans",
        "trash_color": "Jaune"
      },
      {
        "id": 14,
        "name": "Couche",
        "degradation_time": "450 ans",
        "trash_color": "Vert"
      },
      {
        "id": 15,
        "name": "Protection hygiénique",
        "degradation_time": "450 ans",
        "trash_color": "Vert"
      },
      {
        "id": 16,
        "name": "Sac en plastique",
        "degradation_time": "450 ans",
        "trash_color": "Jaune"
      },
      {
        "id": 17,
        "name": "Bouteille en plastique",
        "degradation_time": "500 ans",
        "trash_color": "Jaune"
      },
      {
        "id": 18,
        "name": "Carte SIM",
        "degradation_time": "100 ans",
        "trash_color": "Vert"
      },
      {
        "id": 19,
        "name": "Verre",
        "degradation_time": "5000 ans",
        "trash_color": "Jaune"
      }
    ];
    
    /* const svg = d3.select(".timeLine")
      .append("svg")
      .attr("height", h)
      .attr("width", data.length * 387 + "px")
      .style("background-color", "#F3F8F9");

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => 123 + i * 385)
      .attr("y", (d, i) => i % 2 ? 30 + "%" : 40 + "%")
      .attr("width", 200)
      .attr("height", 202)
      .attr("fill", "white")
      .attr("border-radius", "50%")

     svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.name)
      .attr("x", (d, i) => 123 + i * 385)
      .attr("y", (d, i) => i % 2 ? 30 + "%" : 40 + "%") */

    const svg = d3.select(".timeLine")
      .append("div")
      .style("height", 100 + "%")
      .style("width", data.length * 520 + "px")
      .style("display", "flex")
      .style("background-color", "#F3F8F9");

    const vignette = svg.selectAll(".vignette")
      .data(data)
      .enter()
      .append("div")
      .attr("class", 'vignette')
      .style("position", "relative")
      .style("top", (d, i) => i % 2 ? 30 + "%" : 45 + "%")
      .style("transform", (d, i) => i % 2 ? "translateY(" +  -30 + "%)" : "translateY(" + -45 + "%)");

    vignette.append("p")
      .attr("class", 'vignetteTitle')
      .text((d) => d.name)

    vignette.append("p")
      .attr("class", 'vignetteTime')
      .text((d) => d.degradation_time)

    vignette.append("div")
      .attr("class",  "trash")
        .append("div")
        .attr("class", (d) => d.trash_color)

    const slider = document.querySelector('.timeLine');
    let isDown = false;
    let startX;
    let scrollLeft;
        
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }
        
  render(){
    return <div className="timeLine" id={"#" + this.props.id}></div>
  }

}

export default TimeLine;