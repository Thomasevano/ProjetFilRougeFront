import React, { useState} from 'react'
import './Filter.scss'

const Filter = ({title, labelId, label, functionName, secondLabelId, secondLabel, labelDays, labelOlympics, secondLabelDays, secondLabelOlympics}) => {
  const [isChecked, setIsChecked] = useState(true)
  const [isCheckedSecondary, setIsCheckedSecondary] = useState(false)

  return (
    <div className="filter">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-button">
        <input type="checkbox" className="UpdateButton" id={labelId} checked={isChecked} onChange={() => { functionName(labelDays, labelOlympics); setIsCheckedSecondary(false); setIsChecked(true)} }></input>
        <label htmlFor={labelId}>{label}</label>
        <input type="checkbox" className="UpdateButton" id={secondLabelId} checked={isCheckedSecondary} onChange={() => { functionName(secondLabelDays, secondLabelOlympics); setIsCheckedSecondary(true); setIsChecked(false)} }></input>
        <label className="secondary" htmlFor={secondLabelId}>{secondLabel}</label>
      </div>
    </div>
  )
}

export default Filter