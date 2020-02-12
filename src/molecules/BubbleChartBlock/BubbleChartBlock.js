import React, { useState, useEffect} from 'react'
import BubbleChart from '../../dataViz/bubbleChart';

function BubbleChartBlock() {
  const [wasteOneDay, setWasteOneDay] = useState([])
  const [wasteTwoWeeks, setWasteTwoWeeks] = useState([])
  const [wasteOlympicsOneDay, setWasteOlympicsOneDay] = useState([])
  const [wasteOlympicsTwoWeeks, setWasteOlympicsTwoWeeks] = useState([])

  function getWasteOneDay() {
    fetch('http://127.0.0.1:8000/records-waste')
    .then(response => response.json())
    .then(result => setWasteOneDay(result));
  }

  function getWasteTwoWeeks() {
    fetch('http://127.0.0.1:8000/records-waste-multiplicateur/14/false')
    .then(response => response.json())
    .then(result => setWasteTwoWeeks(result))
  }

  function getWasteOlympicsOneDay() {
    fetch('http://127.0.0.1:8000/records-waste-multiplicateur/1/true')
    .then(response => response.json())
    .then(result => setWasteOlympicsOneDay(result))
  }

  function getWasteOlympicsTwoWeeks() {
    fetch('http://127.0.0.1:8000/records-waste-multiplicateur/14/true')
    .then(response => response.json())
    .then(result => setWasteOlympicsTwoWeeks(result))
  }

  useEffect(() => {
    getWasteOneDay()
    // getWasteTwoWeeks()
    // getWasteOlympicsOneDay()
    // getWasteOlympicsTwoWeeks()
  }, [])
  
  return(
    <div className="bubbleChartBlock">
      <h1>Amounts of waste that could break records</h1>
      <BubbleChart wasteOneDay={wasteOneDay} wasteTwoWeeks={wasteTwoWeeks}
       wasteOlympicsOneDay={wasteOlympicsOneDay} wasteOlympicsTwoWeeks={wasteOlympicsTwoWeeks} />
    </div>
  )
}

export default BubbleChartBlock