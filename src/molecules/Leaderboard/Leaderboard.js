import React, {useState, useEffect} from 'react'
import './Leaderboard.scss'
import InfoBlock from '../../atoms/InfoBlock/InfoBlock';

const Leaderboard = () => {
  const [countrys, setCountrys] = useState([])
  const [countrysNoAverage, setCountrysNoAverage] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/country-ranking/')
      .then(response => response.json())
      .then(result => setCountrys(result))
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/country-ranking-not-average/')
      .then(response => response.json())
      .then(result => setCountrysNoAverage(result))
  }, [])

  const countrysRanking = countrys.slice(0,20);
  const test = countrysNoAverage;

  const list = countrysRanking.map((country, index) =>
    <li key={country.ranking}>
      {country.ranking === 1 && <img src="data/gold-medal.svg" alt="Gold Medal"/>}
      {country.ranking === 2 && <img src="data/silver-medal.svg" alt="Silver Medal"/>}
      {country.ranking === 3 && <img src="data/copper-medal.svg" alt="Copper Medal"/>}
      {country.ranking != 1 && country.ranking != 2 && country.ranking != 3 && <span className="country-ranking"><strong>{country.ranking}</strong>&nbsp;</span>}
      <div className="country">
        <img src={country.img_url}></img>
        <span className="country-name">{country.country}</span>
      </div>
      <span>{test.lenght ? test[index].score : 'bah yes...'}</span>
      <span className="country-score">
      <strong>{Math.round(country.score*100)/100}</strong> good actions</span>
    </li>
    )

  return (
    <div className="leaderboard">
      <InfoBlock infoSubtitle="Global Ranking" infoDescription="Find the score of your country"/>
      <div className="country-list">
        <ul>
          <li id="legend">
            <span>Rank</span>
            <span>Nation</span>
            <span>Score/Person</span>
            <span>Total Score</span>
          </li>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard;