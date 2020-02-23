import React from 'react'
import './Leaderboard.scss'
import InfoBlock from '../../atoms/InfoBlock/InfoBlock';

const Leaderboard = () => {

  return (
    <div className="leaderboard">
      <InfoBlock infoSubtitle="Global Ranking" infoDescription="Find the score of your country"/>
    </div>
  )
}

export default Leaderboard;