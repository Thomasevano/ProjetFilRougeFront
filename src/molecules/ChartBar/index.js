import React , { useState, useEffect} from 'react';
import ChartBar from '../../dataViz/chartBar';
import './styles.scss'

export default ChartBarSet => {

  return (
    <div className="charBarSet">
      <h2>Winner is : </h2>
      <ChartBar />
    </div>
  )
}