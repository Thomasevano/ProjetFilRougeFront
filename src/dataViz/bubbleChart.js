import React, {useEffect} from 'react';
import * as d3 from 'd3';

function bubbleChart() {
    const data = [
      {
        "id": 1,
        "name": "Cardbord",
        "amount_of_waste": "300 tons",
      },
      {
        "id": 2,
        "name": "Newspaper",
        "amount_of_waste": "660 tons",
      },
      {
        "id": 3,
        "name": "Metals",
        "amount_of_waste": "90 tons",
      },
      {
        "id": 4,
        "name": "Glass",
        "amount_of_waste": "300 tons",
      },
      {
        "id": 5,
        "name": "Uncategorized",
        "amount_of_waste": "660 tons",
      },
      {
        "id": 6,
        "name": "Fermentables",
        "amount_of_waste": "360 tons",
      },
      {
        "id": 7,
        "name": "Sanitary Textile",
        "amount_of_waste": "120 tons",
      },
      {
        "id": 8,
        "name": "Clothes",
        "amount_of_waste": "90 tons",
      },
      {
        "id": 9,
        "name": "Plastic",
        "amount_of_waste": "300 tons",
      }
    ];
    
  return (
    <div className="bubbleChart"></div>
  )

}

export default bubbleChart;