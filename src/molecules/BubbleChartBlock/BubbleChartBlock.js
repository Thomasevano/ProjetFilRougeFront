import React, { useState, useEffect} from 'react'
import BubbleChart from '../../dataViz/bubbleChart';
import './BubbleChartBlock.scss'

function BubbleChartBlock() {
  const [waste, setWaste] = useState([])
  const [nbDays, setNbDays] = useState(1)
  const [isOlympic, setIsOlympic] = useState(false)

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/records-waste-multiplicateur/${nbDays}/${isOlympic}`)
  //   .then(response => response.json())
  //   .then(result => setWaste(result))
  // }, [nbDays,isOlympic])
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/records-waste`)
    .then(response => response.json())
    .then(result => setWaste(result))
  }, [])
  
  return(
    <div className="bubbleChartBlock">
      <h1>Amounts of waste that could break records</h1>
      <BubbleChart waste={waste} setWaste={setWaste} nbDays={nbDays} setNbDays={setNbDays} isOlympic={isOlympic} setIsOlympic={setIsOlympic}/>
    </div>
  )
}

export default BubbleChartBlock