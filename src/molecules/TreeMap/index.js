import React , { useState, useEffect}from 'react';
import TreeMap from '../../dataViz/treeMap';

export default TreeMapSet => {
  const [data, setData] = useState([])
  const [dataTD, setDataTD] = useState([])

  // function getMonument(dist) {
  //   fetch(`http://127.0.0.1:8000/monument-all-dist/${dist}`)
  //   .then(response => response.json())
  //   .then(result => setData(result))
  // }

  // function getTrilibDist() {
  //   fetch('http://127.0.0.1:8000/trilib-dist')
  //   .then(response => response.json())
  //   .then(result => setDataTD(result))
  // }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/monument-all-dist/2000')
      .then(response => response.json())
      .then(result => setData(result))

    fetch('http://127.0.0.1:8000/trilib-dist')
      .then(response => response.json())
      .then(result => setDataTD(result))

    // getMonument()
    // getTrilibDist()
  }, [])


  return (
    <div className="treeMapSet">
      <h2>Find where you can limit your impact</h2>
      <TreeMap data={data} dataTD={dataTD}/>
    </div>
  )
}