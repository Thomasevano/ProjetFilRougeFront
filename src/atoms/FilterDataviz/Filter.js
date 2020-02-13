import React from 'react'
import './Filter.scss'

const Filter = ({title, labelId, label, functionName, secondLabelId, secondLabel, secondFunctionName }) => {
  return (
    <div className="filter">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-button">
        <input type="checkbox" className="UpdateButton" id={labelId} defaultChecked={true} onClick={functionName}></input>
        <label htmlFor={labelId}>{label}</label>
        <input type="checkbox" className="UpdateButton" id={secondLabelId} onClick={secondFunctionName}></input>
        <label htmlFor={secondLabelId}>{secondLabel}</label>
      </div>
    </div>
  )
}

export default Filter