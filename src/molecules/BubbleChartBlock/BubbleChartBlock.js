import React, { useState, useEffect} from 'react'
import BubbleChart from '../../dataViz/bubbleChart';
import './BubbleChartBlock.scss'

function BubbleChartBlock() {
  const [waste, setWaste] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/records-waste`)
    .then(response => response.json())
    .then(result => setWaste(result))
  }, [])

  return(
    <div className="bubbleChartBlock">
      <h1>Amounts of waste that could break records</h1>
      <BubbleChart waste={waste}/>
    </div>
  )
}

export default BubbleChartBlock