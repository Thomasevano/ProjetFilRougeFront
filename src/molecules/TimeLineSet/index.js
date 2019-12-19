import React from 'react';
import TimeLine from '../../dataViz/timeLine'

export default class TimeLineSet extends React.Component {
  render() {
    return (
      <div className="timeLineSet">
        <h2>Waste likely to end up on public roads</h2>
        <TimeLine />
      </div>
    )
  }
}