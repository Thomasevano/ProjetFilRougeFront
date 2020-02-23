import React, {useState, useEffect} from 'react'
import './Leaderboard.scss'
import InfoBlock from '../../atoms/InfoBlock/InfoBlock';

const Leaderboard = () => {
  const [countrys, setCountrys] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/country-ranking/')
      .then(response => response.json())
      .then(result => setCountrys(result))
  }, [])

  const firstCountrys = countrys.slice(0,20);

  const list = firstCountrys.map(country =>
  
    <li key={country.ranking}>
      <span className="country-ranking"><strong>{country.ranking}</strong></span><span className="country-name">{country.country}</span>
      <span className="country-score">
      {/* {
        if (country.ranking === 1)
        {
          console.log(country.ranking)
          return <img src="data/gold-medal.svg" alt="Gold Medal"/>
        }
        else if (country.ranking === 2) {
          console.log(country.ranking)
          return <img src="data/silver-medal.svg" alt="Silver Medal"/>
        }
        else if (country.ranking === 3) {
          console.log(country.ranking)
          return <img src="data/copper-medal.svg" alt="Copper Medal"/>
        }
        else {
          return <img src="data/greenleaf.svg" alt="Green leaf logo"/>
        }
      } */}
      <strong>{country.score}</strong> good actions</span>
    </li>
    )

  return (
    <div className="leaderboard">
      <InfoBlock infoSubtitle="Global Ranking" infoDescription="Find the score of your country"/>
      <div className="country-list">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard;