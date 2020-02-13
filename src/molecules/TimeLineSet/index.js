import React , { useState, useEffect}from 'react';
import TimeLine from '../../dataViz/timeLine';
import './styles.scss'

// export default class TimeLineSet extends React.Component {

//   render() {
//     return (
//       <div className="timeLineSet">
//         <h2>Waste likely to end up on public roads</h2>
//         <TimeLine />
//       </div>
//     )
//   }
// }

export default TimeLineSet => {
  const [dataTest, setDataTest] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/waste')
    .then(response => response.json())
    .then(result => setDataTest(result))
  }, [])
  return (
    <div className="timeLineSet">
      <h2>Waste likely to end up on public roads</h2>
      <TimeLine dataTest={dataTest}/>
    </div>
  )
}