import React, {useEffect} from 'react';
import * as d3 from "d3";

const ChartBar = ({countrys}) => {

	const drawChart = (countrys) => {

		let data = countrys.slice(0, 10);

		let sizeWindow;
    // set the dimensions and margins of the graph
    if (window.innerWidth >= 768) {
      sizeWindow = window.innerWidth - 50;
    } else {
      sizeWindow = window.innerWidth + 150;
    }
		
		const margin = {
				top: 150,
				right: 80,
				bottom: 230,
				left: 80
			},
			width = sizeWindow - margin.left - margin.right - 92,
			height = 750 - margin.top - margin.bottom;

		const x = d3.scaleBand()
			.range([0, width])
			.padding(0.8);

		const y = d3.scaleLinear()
			.range([height, 0]);

		const svg = d3.select(".chartBar")
			.append("svg")
			.attr("id", "svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		//title of dataViz
		d3.select("#svg")
			.append('text')
			.attr('class', 'title')
			.text('Today’s Ranking')
			.attr('x', '50%')
			.attr('y', 50)

		//subTitle of dataViz
		d3.select("#svg")
			.append('text')
			.attr('class', 'subTitle')
			.text('Which countries made the 10 best scores ')
			.attr('x', '50%')
			.attr('y', 90)

		const div = d3.select("body")
			.append("div")
			.attr("class", "tooltip")
			.style("opacity", 0);

		data.forEach(function (d) {
			d.score = +d.score;
		});

			// Mise en relation du scale avec les données de notre fichier
			// Pour l'axe X, c'est la liste des pays
			// Pour l'axe Y, c'est le max des populations
			x.domain(data.map(function (d) {
				return d.country;
			}));
			y.domain([0, d3.max(data, function (d) {
				return d.score;
			})]);

			// Ajout de l'axe X au SVG
			// Déplacement de l'axe horizontal et du futur texte (via la fonction translate) au bas du SVG
			// Selection des noeuds text, positionnement puis rotation
			svg.append("g")
				.attr("transform", "translate(0," + height + ")")
				.attr('class', 'bottomAxe')
				.call(d3.axisBottom(x).tickSize(0))
				.selectAll("text")
				.attr('class', 'countrys')
				.style("text-anchor", "end")
				.attr("dx", "-.8em")
				.attr('x', -50)
				.attr("dy", ".15em")
				.attr("transform", "rotate(-90)");

			d3.selectAll('.bottomAxe .tick')
			.append('foreignObject')
			.attr('x', -12)
			.attr('y', 20)
			.data(data)
			.append('xhtml:img')
			.attr('src', (d) => d.img_url)

			// Ajout de l'axe Y au SVG avec 6 éléments de légende en utilisant la fonction ticks (sinon D3JS en place autant qu'il peut).
			const domainSize = document.querySelector('.domain')

			svg.append("g")
				.call(d3.axisLeft(y).ticks(6).tickSize(-domainSize.getBBox().width))
				.attr('class', 'leftBar')
			
			d3.selectAll('.leftBar text')
			.attr('y', -10)
			.attr('x', 0)
			.style('text-anchor', 'start')

			// Ajout des bars en utilisant les données de notre fichier data
			// La largeur de la barre est déterminée par la fonction x
			// La hauteur par la fonction y en tenant compte du score
			// La gestion des events de la souris pour le popup
			svg.selectAll(".bar")
				.data(data)
				.enter()
				.append("foreignObject")
				.attr("class", "bar")
				.attr('rx', '15')
				.attr('ry', '10')
				.attr("x", function (d) {
					return x(d.country);
				})
				.attr("width", x.bandwidth())
				.attr("y", function (d) {
					return y(d.score + 20);
				})
				.attr("height", function (d) {
					return height - y(d.score);
				})
				.on("mouseover", function (d) {
					div.transition()
						.duration(200)
						.style("opacity", .9);
					div.html(d.score + ` points`)
						.style("left", (d3.event.pageX + 10) + "px")
						.style("top", (d3.event.pageY - 50) + "px");
				})
				.on("mouseout", function (d) {
					div.transition()
						.duration(500)
						.style("opacity", 0);
				})
				.append('xhtml:div')

				d3.selectAll('path.domain').remove()
	}

	useEffect(() => {
    drawChart(countrys);
  }, [countrys])

	return ( 
		<div className="chartBar"></div>
	)
}

export default ChartBar;