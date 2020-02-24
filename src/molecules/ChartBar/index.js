import React , { useState, useEffect} from 'react';
import ChartBar from '../../dataViz/chartBar';
import Leaderboard from '../Leaderboard/Leaderboard';
import './styles.scss'

export default ChartBarSet => {
  const [countrys, setCountrys] = useState([])
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/country-ranking/')
      .then(response => response.json())
      .then(result => setCountrys(result))
  }, [])

  return (
    <div className="chartBarSet">
      <h2>Our world’s best supporters</h2>
      <div class="chartBarDataViz">
        { countrys.length ? <ChartBar countrys={countrys}/> : ''}
        <Leaderboard/>
      </div>
    </div>
  )
}