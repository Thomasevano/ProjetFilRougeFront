import React, {Component} from 'react';
import * as d3 from "d3";
import * as h from "d3";
import * as d from "d3";

class TimeLine extends Component {
  componentDidUpdate() {
    this.drawChart();
    //svgC.addEventListener('scroll', positionCar);
  }
  
  
 /*  componentWillUnmount() {
      svgC.removeEventListener('scroll', positionCar);
  } */
  drawChart() {
    // const dataTest = [
    //   {
    //     "id": 1,
    //     "name": "Mouchoir en papier",
    //     "degradation_time": "1 mois",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 2,
    //     "name": "Pomme",
    //     "degradation_time": "4 mois",
    //     "trash_color": "Marron"
    //   },
    //   {
    //     "id": 3,
    //     "name": "Jus de fruit",
    //     "degradation_time": "5 mois",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 4,
    //     "name": "Journal",
    //     "degradation_time": "6 mois",
    //     "trash_color": "Marron"
    //   },
    //   {
    //     "id": 5,
    //     "name": "Banane",
    //     "degradation_time": "9 mois",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 6,
    //     "name": "Ticket de métro",
    //     "degradation_time": "1 an",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 7,
    //     "name": "Mégot",
    //     "degradation_time": "2 ans",
    //     "trash_color": "Vert"
    //   },
    //   {
    //     "id": 8,
    //     "name": "Bonbon",
    //     "degradation_time": "5 ans",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 9,
    //     "name": "Chewing Gum",
    //     "degradation_time": "5 ans",
    //     "trash_color": "Vert"
    //   },
    //   {
    //     "id": 10,
    //     "name": "Canette de soda",
    //     "degradation_time": "45 ans",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 11,
    //     "name": "Boîte de conserve",
    //     "degradation_time": "50 ans",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 12,
    //     "name": "Briquet",
    //     "degradation_time": "100 ans",
    //     "trash_color": "Vert"
    //   },
    //   {
    //     "id": 13,
    //     "name": "Aluminium",
    //     "degradation_time": "200 ans",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 14,
    //     "name": "Couche",
    //     "degradation_time": "450 ans",
    //     "trash_color": "Vert"
    //   },
    //   {
    //     "id": 15,
    //     "name": "Protection hygiénique",
    //     "degradation_time": "450 ans",
    //     "trash_color": "Vert"
    //   },
    //   {
    //     "id": 16,
    //     "name": "Sac en plastique",
    //     "degradation_time": "450 ans",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 17,
    //     "name": "Bouteille en plastique",
    //     "degradation_time": "500 ans",
    //     "trash_color": "Jaune"
    //   },
    //   {
    //     "id": 18,
    //     "name": "Carte SIM",
    //     "degradation_time": "100 ans",
    //     "trash_color": "Vert"
    //   },
    //   {
    //     "id": 19,
    //     "name": "Verre",
    //     "degradation_time": "5000 ans",
    //     "trash_color": "Jaune"
    //   }
    // ];

    // Trie des données

    let data = []

    let dataM = []
    let dataY = []
    let dataYs = []

    let memoryM = 0;
    let memoryY = 0;
    let memoryYs = 0;

    this.props.dataTest.forEach(dataTest => {
      let separator = dataTest.degradation_time.indexOf(' ');
      let number = Number(dataTest.degradation_time.substr(0, separator));
      let time = dataTest.degradation_time.substr(separator + 1)
      let isThis = dataTest;
      let isThisNumber = number;

      if (time === "mois") {
        if (number >= memoryM) {

          dataM.push(dataTest)
          memoryM = number;

        } else {
          let count = true;

          dataM.forEach(data => {
            let separator = data.degradation_time.indexOf(' ');
            let number = Number(data.degradation_time.substr(0, separator));
            let isPlace = dataM.indexOf(data);

            if (isPlace + 1 < dataM.length) {
              let nextNumber = Number(dataM[isPlace + 1].degradation_time.substr(0, separator));

              if (isThisNumber >= number && isThisNumber <= nextNumber && count === true) {
                dataM.splice(isPlace + 1, 0, isThis)
                count = false;
              }
            } else if (isPlace === 0 && number > isThisNumber) {
              dataM.splice(isPlace, 0, isThis)
              count = false;
            }
          })
        }
      } else if (time === "an") {

        if (number >= memoryY) {
          dataY.push(dataTest)
          memoryY = number;
        } else {
          let count = true;

          dataY.forEach(data => {
            let separator = data.degradation_time.indexOf(' ');
            let number = Number(data.degradation_time.substr(0, separator));
            let isPlace = dataY.indexOf(data);

            if (isPlace + 1 < dataY.length) {
              let nextNumber = Number(dataY[isPlace + 1].degradation_time.substr(0, separator));

              if (isThisNumber >= number && isThisNumber <= nextNumber && count === true) {
                dataY.splice(isPlace + 1, 0, isThis)
                count = false;
              }
            } else if (isPlace === 0 && number > isThisNumber) {
              dataM.splice(isPlace, 0, isThis)
              count = false;
            }
          })
        }
      } else if (time === "ans") {

        if (number >= memoryYs) {
          dataYs.push(dataTest)
          memoryYs = number;
        } else {
          let count = true;

          dataYs.forEach(data => {
            let separator = data.degradation_time.indexOf(' ');
            let number = Number(data.degradation_time.substr(0, separator));
            let isPlace = dataYs.indexOf(data);

            if (isPlace + 1 < dataYs.length) {
              let nextNumber = Number(dataYs[isPlace + 1].degradation_time.substr(0, separator));

              if (isThisNumber >= number && isThisNumber <= nextNumber && count === true) {
                dataYs.splice(isPlace + 1, 0, isThis)
                count = false;
              }
            } else if (isPlace === 0 && number > isThisNumber) {
              dataM.splice(isPlace, 0, isThis)
              count = false;
            }
          })
        }
        
      }
    })

    data = dataM.concat(dataY, dataYs)

    // time Line

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

    const timeLine = d3.select(".timeLine")
      //.style("max-width", data.length * 520 + "px")
      .append("div")
      .style("height", 100 + "%")
      .style("width", data.length * 450 + "px")
      .style("max-width", data.length * 520 + "px")
      .style("display", "flex")
      .style("background-color", "#F3F8F9");

    const vignette = timeLine.selectAll(".vignette")
      .data(data)
      .enter()
      .append("svg")
      .attr("class", 'vignette anime')
      .style("position", "relative")
      //.style("top", (d, i) => i % 2 ? 12 + "%" : 20 + "%")
      .style("top", (d, i) => i % 2 ? 12 + "%" : 20 + "%")
      //.style("transform", (d, i) => i % 2 ? "translateY(" +  -50 + "%)" : "translateY(" + -65 + "%)");

      vignette.append("text")
      .text((d) => d.name)
      .attr("y", "85")
      .attr('x', "50%")
      .attr('text-anchor', "middle")
      .attr('font-weight', '600')
      //.attr('transform', "translate(50)")
      .attr("fill", "#005258")
      .attr('font-size', '20px')
      //.attr("y", (d, i) => i % 2 ? 30 + "%" : 40 + "%")

      vignette.append("text")
      .attr("class", 'vignetteTime')
      .text((d) => d.degradation_time)
      .attr("y", "135")
      .attr("x", "50")

      const montre = vignette.append("svg")
      .attr('height', '25')
      .attr('fill', 'none')
      //.attr('viewBox', '0 0 21 25')
      .attr('x', '15')
      .attr('y', '115')

      montre.append('path')
      .attr('d', "M3.99529 8.61258C5.55231 7.07265 7.62267 6.16121 9.80988 6.05281C11.9971 5.9444 14.1474 6.64665 15.8491 8.02506C17.5508 9.40348 18.6841 11.3612 19.0322 13.5233C19.3802 15.6853 18.9184 17.8998 17.7353 19.7426C17.6879 19.7962 17.6528 19.8594 17.6322 19.928C17.6117 19.9965 17.6062 20.0686 17.6162 20.1395C17.6262 20.2103 17.6515 20.2781 17.6902 20.3383C17.7289 20.3984 17.7802 20.4494 17.8406 20.4878C17.9009 20.5262 17.9689 20.5511 18.0398 20.5607C18.1107 20.5703 18.1828 20.5645 18.2512 20.5436C18.3196 20.5226 18.3827 20.4871 18.436 20.4395C18.4894 20.3918 18.5318 20.3332 18.5603 20.2676C19.4332 18.9332 19.9687 17.4067 20.1208 15.8194C20.2728 14.2322 20.0369 12.6318 19.4333 11.1559C18.8297 9.68007 17.8764 8.37302 16.6556 7.34727C15.4349 6.32153 13.9831 5.60782 12.4253 5.26758V4.03758C12.7862 3.95255 13.1074 3.74739 13.3364 3.45576C13.5653 3.16412 13.6884 2.80333 13.6853 2.43258C13.6853 1.99358 13.512 1.57234 13.2029 1.26052C12.8939 0.948697 12.4743 0.771533 12.0353 0.767578L8.51029 0.767578C8.07131 0.771533 7.65166 0.948697 7.34264 1.26052C7.03363 1.57234 6.86028 1.99358 6.86029 2.43258C6.85721 2.80333 6.98024 3.16412 7.20919 3.45576C7.43814 3.74739 7.75941 3.95255 8.12029 4.03758V5.26758C5.87299 5.76108 3.87411 7.03695 2.48029 8.86758L3.99529 8.61258ZM1.05529 18.4076C1.55713 19.7132 2.33484 20.8951 3.33529 21.8726C4.93712 23.5069 7.05918 24.5308 9.33529 24.7676C9.66529 24.7676 9.98029 24.7676 10.3103 24.7676C12.2163 24.7672 14.0814 24.215 15.6803 23.1776C15.7884 23.1069 15.8647 22.9967 15.8927 22.8706C15.9207 22.7445 15.8983 22.6124 15.8303 22.5026C15.6803 22.2776 15.2153 22.3676 14.9903 22.5026C13.2898 23.5811 11.2682 24.0375 9.26928 23.7941C7.27033 23.5507 5.41735 22.6226 4.02529 21.1676L1.05529 18.4076ZM0.440293 15.5576C0.487768 16.1899 0.588119 16.817 0.740293 17.4326L0.440293 15.5576ZM0.665293 12.7676C0.537807 13.3603 0.457555 13.9622 0.425293 14.5676L0.665293 12.7676ZM1.83529 9.84258C1.47634 10.4353 1.17976 11.0637 0.950293 11.7176L1.83529 9.84258ZM7.83529 2.43258C7.83525 2.25215 7.90588 2.07888 8.03206 1.9499C8.15823 1.82092 8.32991 1.7465 8.51029 1.74258H12.0353C12.2157 1.7465 12.3874 1.82092 12.5135 1.9499C12.6397 2.07888 12.7103 2.25215 12.7103 2.43258C12.7103 2.52122 12.6928 2.60899 12.6589 2.69089C12.625 2.77278 12.5753 2.8472 12.5126 2.90988C12.4499 2.97255 12.3755 3.02227 12.2936 3.0562C12.2117 3.09012 12.1239 3.10758 12.0353 3.10758H8.51029C8.42165 3.10758 8.33388 3.09012 8.25198 3.0562C8.17009 3.02227 8.09568 2.97255 8.033 2.90988C7.97032 2.8472 7.9206 2.77278 7.88667 2.69089C7.85275 2.60899 7.83529 2.52122 7.83529 2.43258ZM9.09529 5.11758V4.08258H11.4503V5.11758C10.6679 5.02759 9.87771 5.02759 9.09529 5.11758Z")
      .attr('fill', "#005258")

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M16.91 21.0475C16.8465 21.046 16.7832 21.0572 16.724 21.0804C16.6648 21.1035 16.6107 21.1383 16.565 21.1825C16.4729 21.2742 16.4192 21.3976 16.415 21.5275C16.415 21.6588 16.4672 21.7847 16.56 21.8775C16.6529 21.9703 16.7788 22.0225 16.91 22.0225C17.0413 22.0225 17.1672 21.9703 17.2601 21.8775C17.3529 21.7847 17.405 21.6588 17.405 21.5275C17.4008 21.3976 17.3472 21.2742 17.255 21.1825C17.2093 21.1383 17.1553 21.1035 17.0961 21.0804C17.0369 21.0572 16.9736 21.046 16.91 21.0475Z')

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M2.70545 14.8975C2.69058 16.3988 3.12218 17.8706 3.94545 19.1261C4.76871 20.3817 5.9465 21.3642 7.32928 21.9491C8.71205 22.5339 10.2374 22.6947 11.7117 22.4109C13.1861 22.1272 14.5428 21.4117 15.6097 20.3554C16.6766 19.299 17.4055 17.9495 17.7039 16.4781C18.0024 15.0067 17.8568 13.4797 17.2857 12.0912C16.7147 10.7027 15.7439 9.51519 14.4966 8.67947C13.2493 7.84376 11.7818 7.39753 10.2804 7.39746C8.28555 7.40126 6.37235 8.1903 4.95474 9.59387C3.53713 10.9974 2.7291 12.9027 2.70545 14.8975ZM3.68045 14.8975C3.68045 13.5921 4.06753 12.3161 4.79275 11.2307C5.51797 10.1453 6.54875 9.29939 7.75474 8.79986C8.96073 8.30032 10.2878 8.16962 11.568 8.42428C12.8483 8.67894 14.0243 9.30753 14.9474 10.2306C15.8704 11.1536 16.499 12.3296 16.7536 13.6099C17.0083 14.8901 16.8776 16.2172 16.3781 17.4232C15.8785 18.6292 15.0326 19.6599 13.9472 20.3852C12.8618 21.1104 11.5858 21.4975 10.2804 21.4975C8.53124 21.4935 6.8548 20.7969 5.61792 19.56C4.38104 18.3231 3.68441 16.6467 3.68045 14.8975Z')

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M13.3701 11.1176L10.9551 13.5476C10.7457 13.4421 10.5145 13.3871 10.2801 13.3871C10.0456 13.3871 9.81445 13.4421 9.60509 13.5476L8.52509 12.4676C8.42974 12.4001 8.31361 12.3685 8.19723 12.3784C8.08085 12.3883 7.97171 12.439 7.88912 12.5216C7.80653 12.6042 7.75581 12.7133 7.74592 12.8297C7.73603 12.9461 7.76761 13.0622 7.83509 13.1576L8.91509 14.2676C8.81785 14.4741 8.76667 14.6993 8.76509 14.9276C8.76509 15.3254 8.92312 15.7069 9.20443 15.9882C9.48573 16.2695 9.86726 16.4276 10.2651 16.4276C10.6629 16.4276 11.0444 16.2695 11.3257 15.9882C11.6071 15.7069 11.7651 15.3254 11.7651 14.9276C11.7729 14.7015 11.732 14.4764 11.6451 14.2676L13.9851 11.8826H14.0601C14.1064 11.8378 14.1432 11.7842 14.1683 11.7249C14.1934 11.6657 14.2064 11.6019 14.2064 11.5376C14.2064 11.4732 14.1934 11.4095 14.1683 11.3502C14.1432 11.2909 14.1064 11.2373 14.0601 11.1926C13.9758 11.0953 13.8578 11.0335 13.7298 11.0196C13.6018 11.0057 13.4733 11.0407 13.3701 11.1176ZM10.2801 15.4376C10.1369 15.4376 9.99952 15.3807 9.89825 15.2794C9.79698 15.1781 9.74009 15.0408 9.74009 14.8976C9.74009 14.7544 9.79698 14.617 9.89825 14.5157C9.99952 14.4145 10.1369 14.3576 10.2801 14.3576C10.4233 14.3576 10.5607 14.4145 10.6619 14.5157C10.7632 14.617 10.8201 14.7544 10.8201 14.8976C10.8201 15.0408 10.7632 15.1781 10.6619 15.2794C10.5607 15.3807 10.4233 15.4376 10.2801 15.4376Z')

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M15.5002 14.4175H15.0502C14.9189 14.4175 14.793 14.4696 14.7002 14.5625C14.6073 14.6553 14.5552 14.7812 14.5552 14.9125C14.5551 14.9768 14.568 15.0405 14.5931 15.0997C14.6181 15.1589 14.6549 15.2125 14.701 15.2573C14.7472 15.3021 14.8019 15.3371 14.8619 15.3603C14.9219 15.3836 14.9859 15.3945 15.0502 15.3925H15.5002C15.5645 15.3945 15.6285 15.3836 15.6885 15.3603C15.7485 15.3371 15.8032 15.3021 15.8493 15.2573C15.8955 15.2125 15.9322 15.1589 15.9573 15.0997C15.9823 15.0405 15.9952 14.9768 15.9952 14.9125C15.9952 14.7812 15.943 14.6553 15.8502 14.5625C15.7574 14.4696 15.6315 14.4175 15.5002 14.4175Z')

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M5.51043 14.4023H5.06043C4.92915 14.4023 4.80324 14.4545 4.71041 14.5473C4.61758 14.6402 4.56543 14.7661 4.56543 14.8973C4.56543 15.0286 4.61758 15.1545 4.71041 15.2474C4.80324 15.3402 4.92915 15.3923 5.06043 15.3923H5.51043C5.64171 15.3923 5.76762 15.3402 5.86045 15.2474C5.95328 15.1545 6.00543 15.0286 6.00543 14.8973C6.00543 14.7661 5.95328 14.6402 5.86045 14.5473C5.76762 14.4545 5.64171 14.4023 5.51043 14.4023Z')

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M10.2802 10.6225C10.3501 10.631 10.421 10.6246 10.4881 10.6035C10.5553 10.5825 10.6172 10.5474 10.6697 10.5006C10.7222 10.4537 10.7642 10.3962 10.7927 10.3319C10.8213 10.2676 10.8357 10.1979 10.8352 10.1275V9.6775C10.8353 9.61318 10.8224 9.54952 10.7973 9.49028C10.7723 9.43104 10.7356 9.37745 10.6894 9.33267C10.6432 9.2879 10.5885 9.25286 10.5285 9.22964C10.4685 9.20642 10.4045 9.19549 10.3402 9.1975C10.2129 9.1975 10.0908 9.24807 10.0008 9.33809C9.9108 9.42811 9.86023 9.5502 9.86023 9.6775V10.1275C9.85554 10.2476 9.89609 10.3651 9.97386 10.4568C10.0516 10.5484 10.161 10.6076 10.2802 10.6225Z')

      montre.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M10.2802 19.1875C10.2159 19.1855 10.1518 19.1965 10.0919 19.2197C10.0319 19.2429 9.97718 19.2779 9.93101 19.3227C9.88483 19.3675 9.84813 19.4211 9.82307 19.4803C9.79802 19.5396 9.78512 19.6032 9.78516 19.6675V20.1175C9.78516 20.2488 9.83731 20.3747 9.93014 20.4676C10.023 20.5604 10.1489 20.6125 10.2802 20.6125C10.3505 20.6237 10.4224 20.6191 10.4907 20.5991C10.559 20.5791 10.622 20.5441 10.6751 20.4967C10.7282 20.4493 10.7702 20.3907 10.7978 20.3252C10.8255 20.2596 10.8383 20.1887 10.8352 20.1175V19.6675C10.836 19.5977 10.8216 19.5285 10.7929 19.4647C10.7643 19.401 10.722 19.3443 10.6692 19.2986C10.6163 19.2529 10.5541 19.2193 10.4869 19.2001C10.4197 19.1809 10.3492 19.1766 10.2802 19.1875Z')

      montre.append('path')
      .attr('stroke', "#005258")
      .attr('stroke-width', "0.8")
      .attr('stroke-miterlimit', '10')
      .attr('d', 'M10.2805 24.2427C15.4416 24.2427 19.6255 20.0588 19.6255 14.8977C19.6255 9.73663 15.4416 5.55273 10.2805 5.55273C5.11945 5.55273 0.935547 9.73663 0.935547 14.8977C0.935547 20.0588 5.11945 24.2427 10.2805 24.2427Z')
   
      const trash = vignette.append('svg')
      .attr('height', '25')
      .attr('width', '22')
      .attr('fill', 'none')
      .attr("y", "160")
      .attr("x", "15")

      trash.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M21.1046 4.22153H16.1111V3.40738C16.1111 1.95179 14.9269 0.767578 13.4713 0.767578H8.72464C7.26904 0.767578 6.08483 1.95179 6.08483 3.40738V4.22153H1.09141C0.721346 4.22153 0.425293 4.51758 0.425293 4.88764C0.425293 5.25771 0.721346 5.55376 1.09141 5.55376H2.29536V21.2051C2.29536 23.1689 3.89404 24.7676 5.85786 24.7676H16.3381C18.3019 24.7676 19.9006 23.1689 19.9006 21.2051V5.55376H21.1046C21.4746 5.55376 21.7707 5.25771 21.7707 4.88764C21.7707 4.51758 21.4746 4.22153 21.1046 4.22153ZM7.41707 3.40738C7.41707 2.68699 8.00424 2.09982 8.72464 2.09982H13.4713C14.1917 2.09982 14.7789 2.68699 14.7789 3.40738V4.22153H7.41707V3.40738ZM18.5684 21.2051C18.5684 22.4337 17.5667 23.4353 16.3381 23.4353H5.85786C4.62924 23.4353 3.6276 22.4337 3.6276 21.2051V5.55376H18.5733V21.2051H18.5684Z')

      trash.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M11.0978 21.0472C11.4678 21.0472 11.7639 20.7511 11.7639 20.381V8.60801C11.7639 8.23795 11.4678 7.94189 11.0978 7.94189C10.7277 7.94189 10.4316 8.23795 10.4316 8.60801V20.3761C10.4316 20.7462 10.7277 21.0472 11.0978 21.0472Z')

      trash.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M6.75108 20.3117C7.12115 20.3117 7.4172 20.0156 7.4172 19.6456V9.33799C7.4172 8.96793 7.12115 8.67188 6.75108 8.67188C6.38101 8.67188 6.08496 8.96793 6.08496 9.33799V19.6456C6.08496 20.0156 6.38595 20.3117 6.75108 20.3117Z')

      trash.append('path')
      .attr('fill', "#005258")
      .attr('d', 'M15.4449 20.3117C15.815 20.3117 16.111 20.0156 16.111 19.6456V9.33799C16.111 8.96793 15.815 8.67188 15.4449 8.67188C15.0749 8.67188 14.7788 8.96793 14.7788 9.33799V19.6456C14.7788 20.0156 15.0749 20.3117 15.4449 20.3117Z')

      const circleTrash = vignette.append("svg")
      .attr("class",  "trash")
      .attr('fill', 'none')
      .attr('width', '25')
      .attr('heigth', '25')
      .attr("y", "160")
      .attr("x", "50")

      circleTrash.append("circle")
      .attr('cx', '12.7705')
      .attr('cy', '12.7676')
      .attr('r', '12')
      .attr("class", (d) => d.trash_color)

      /* 
        <animateMotion dur="1.6s" repeatCount="indefinite">
          <mpath xlink:href="#wire"></mpath>
        </animateMotion>

        .append('animateMotion')
          .attr('dur', '1.6s')
          .attr('repeatCount', 'indefinite')
          .append('mpath')
          .attr('xlink:href', '#wire')
      */

    /* vignette.append("p")
      .attr("class", 'vignetteTitle')
      .text((d) => d.name) */

   /*  vignette.append("p")
      .attr("class", 'vignetteTime')
      .text((d) => d.degradation_time) */

    /* vignette.append("div")
      .attr("class",  "trash")
        .append("div")
        .attr("class", (d) => d.trash_color) */
      
    
    timeLine.append('svg')
      .attr('class', 'circle opacity')
      .attr("width", 200)
      .attr("height", 250)
      .append('circle')
      .attr('cx', '0')
      .attr('cy', '140')
      .attr('r', '120')
      .attr('stroke-width', '0')
      .attr('fill', '#FB8070')

    timeLine.append('svg')
      .attr('class', 'circle')
      .attr("width", 200)
      .attr("height", 200)
      .append('circle')
      .attr('cx', '0')
      .attr('cy', '90')
      .attr('r', '65')
      .attr('stroke-width', '0')
      .attr('fill', '#F3F8F9')

    //Ligne time line

    timeLine.append('svg')
      .attr('class', 'line')
      .attr('height', '87')
      //.attr('width', data.length * 520 + "px")
      .attr('fill', 'none')
      .append('path')
      .attr("id", "path1")
      .attr('py', '90')
      .attr('d', 'M-202 2C-9 2 8.36887 85 152 85C295.631 85 362.369 2 506 2C649.631 2 716.369 85 860 85C1003.63 85 1039 2 1214 2')
      .attr('stroke', '#55B297')
      .attr('stroke-width', '4')
      //.attr("id", "wire")
      

    //Triangle

    /* const triangle = timeLine.append("div")
      .attr("class", 'triangle')
 */

    // timeLine.append("svg")
    // .attr("class", 'triangle')
    // .style("top", "43%")
    // .style("width", data.length * 420 + "px")
    // .attr("height", 120)
    // .selectAll("triangle")
    // .data(data)
    // .enter()   
    // .append("path")
    // .attr('x', (d, i) => 240 * i + 100)
    // .attr('y', (d, i) => i % 2 ? 38 + "%" : 82 + "%")
    // .attr("fill", "white")
    // .attr("d", "M12.6364 27.1894L0.872507 3.66152C0.207605 2.33171 1.1746 0.76709 2.66136 0.76709H26.1892C27.676 0.76709 28.643 2.33171 27.9781 3.66152L16.2141 27.1894C15.4771 28.6635 13.3735 28.6635 12.6364 27.1894Z")
    // /* .attr('heigth', 29)
    // .attr('width', 29) */
   
    timeLine.append("svg")
    .attr('class', 'triangle')
    .style("top", "47%")
    .style("width", data.length * 420 + "px")
    .attr("height", 120)
    .style('left', '274px')
    .selectAll('triangle')
    .data(data)
    .enter()    
    .append('svg')
    .attr("height", 29)
    .attr("width", 29)
    .attr('x', (d, i) => 430 * i + 100)
    .attr('y', (d, i) => i % 2 ? 0 + "%" : 44 + "%")
    .append('path')
    .attr('fill', '#ffffff')
    .attr("d", "M12.6364 27.1894L0.872507 3.66152C0.207605 2.33171 1.1746 0.76709 2.66136 0.76709H26.1892C27.676 0.76709 28.643 2.33171 27.9781 3.66152L16.2141 27.1894C15.4771 28.6635 13.3735 28.6635 12.6364 27.1894Z")

    //Circle on time line

    timeLine.append("svg")
      .attr('class', 'circleLine anime')
      .style("top", "57%")
      .style("width", data.length * 420 + "px")
      .attr("height", 120)
      .selectAll('circleTimeLine')
      .data(data)
      .enter()    
      .append('circle')
      .attr('cx', (d, i) => 430 * i + 100)
      .attr('cy', (d, i) => i % 2 ? 38 + "%" : 82 + "%")
      .attr('r', '10')
      .attr('stroke-width', '0')
      .attr('fill', '#ffffff')

    //time scale

    timeLine.append('div')
      .attr('class', "timeScale")
      .style('width', "257px")
      .style('height', "101px")
      .append('p')
      .text('From 1 to 10 years to break down')
      

    //Scroll animate svg

    /* var svgC = document.querySelector('.timeLine')

    function positionCar() {
      var scrollX = svgC.scrollLeft;
      var maxScrollX = document.documentElement.scrollHeight - window.innerHeight;
      console.log('scrollX ' + scrollX)
      console.log('maxScrollX ' + maxScrollX)
      var path = document.getElementById("path1");
      // Calculate distance along the path the car should be for the current scroll amount
      var pathLen = path.getTotalLength();
      console.log('pathLen ' + pathLen)
      var dist = pathLen * scrollX / maxScrollX;
      console.log('dist ' + dist)
      var pos = path.getPointAtLength(dist);
      // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
      if (dist + 1 <= pathLen) {
        var posAhead = path.getPointAtLength(dist + 1);
        var angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
      } else {
        var posBehind = path.getPointAtLength(dist - 1);
        var angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
      }
      // Position the car at "pos" totated by "angle"
      var cars = document.querySelectorAll(".anime");

      for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ")");
        //car.style.transform = "translate(" + pos.x + "," + pos.y + ")";
      }
    }

    function rad2deg(rad) {
      return 180 * rad / Math.PI;
    }

    // Reposition car whenever there is a scroll event
    svgC.addEventListener("scroll", positionCar);

    // Position the car initially
    positionCar(); */
  
    
    //Scroll drag

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
    });
  }
        
  render(){
    return <div className="timeLine" id={"#" + this.props.id}></div>
  }

}

export default TimeLine;