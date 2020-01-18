import React from 'react'
import bubbleChart from '../../dataViz/bubbleChart';

function BubbleChartBlock() {
  
  return(
    <div className="bubbleChartBlock">
      <h2>Amounts of waste that could break records</h2>
      <bubbleChart />
    </div>
  )
}

export default BubbleChartBlock