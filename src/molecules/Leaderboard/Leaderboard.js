import React, {useState, useEffect} from 'react'
import './Leaderboard.scss'
import InfoBlock from '../../atoms/InfoBlock/InfoBlock';

const Leaderboard = () => {
  const [countrysRanking, setCountrysRanking] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/country-ranking/')
      .then(response => response.json())
      .then(result => setCountrysRanking(result))
  }, [])

  const list = countrysRanking.map(country =>
    <li key={country.ranking}>
      {country.ranking === 1 && <img className="country-ranking" src="data/gold-medal.svg" alt="Gold Medal"/>}
      {country.ranking === 2 && <img className="country-ranking" src="data/silver-medal.svg" alt="Silver Medal"/>}
      {country.ranking === 3 && <img className="country-ranking" src="data/copper-medal.svg" alt="Copper Medal"/>}
      {country.ranking != 1 && country.ranking != 2 && country.ranking != 3 && <span className="country-ranking"><strong>{country.ranking}</strong>&nbsp;</span>}
      <div className="country">
        <img src={country.img_url}></img>
        <span className="country-name">{country.country}</span>
      </div>
      <span className='person-score'>
        <strong>{Math.round(country.score*10)/10}</strong><span> good actions</span>
      </span>
      <span className="country-score">
        <strong>{country.scoresNotAverage}</strong><span> points</span>
      </span>
    </li>
  )

  return (
    <div className="leaderboard">
      <InfoBlock infoSubtitle="Global Ranking" infoDescription="Find the score of your country"/>
      <div className="country-list">
        <div id="legend">
          <span>Rank</span>
          <span>Nation</span>
          <span>Score/Person</span>
          <span>Total Score</span>
        </div>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard;