import React , { useState, useEffect}from 'react';
import TreeMap from '../../dataViz/treeMap';

export default TreeMapSet => {
  const [monuments, setMonuments] = useState([])
  //const [dataTD, setDataTD] = useState([])

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
      .then(result => setMonuments(result))
  }, [])


  return (
    <div className="treeMapSet">
      <h2>Find where you can limit your impact</h2>
      { monuments.length ? <TreeMap monuments={monuments}/> : ''}
    </div>
  )
}