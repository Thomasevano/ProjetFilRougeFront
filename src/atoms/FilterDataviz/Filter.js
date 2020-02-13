import React, { useState} from 'react'
import './Filter.scss'

const Filter = ({title, labelId, label, functionName, secondLabelId, secondLabel, secondFunctionName }) => {
  const [isChecked, setIsChecked] = useState(true)
  const [isCheckedSecondary, setIsCheckedSecondary] = useState(false)

  function OnChange(functionName, setIsChecked ,setIsCheckedSecondary) {
    setIsChecked(true)
    setIsCheckedSecondary(false)
   return functionName
  }

  function OnChangeSecondary(functionNameSecondary, setIsChecked ,setIsCheckedSecondary) {
    setIsChecked(false)
    setIsCheckedSecondary(true)
   return functionNameSecondary
  }

  return (
    <div className="filter">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-button">
        {/* <input type="checkbox" className="UpdateButton" id={labelId} checked={isChecked} onClick={() => {functionName; setIsCheckedSecondary(false); setIsChecked(true)}}></input> */}
        <input type="checkbox" className="UpdateButton" id={labelId} checked={isChecked} onClick={() => {setIsCheckedSecondary(false); setIsChecked(true)}}></input>
        <label htmlFor={labelId}>{label}</label>
        {/* <input type="checkbox" className="UpdateButton" id={secondLabelId} checked={isCheckedSecondary} onClick={() => {functionNameSecondary; setIsCheckedSecondary(true); setIsChecked(false)}}></input> */}
        <input type="checkbox" className="UpdateButton" id={secondLabelId} checked={isCheckedSecondary} onClick={() => {setIsCheckedSecondary(true); setIsChecked(false)}}></input>
        <label className="secondary" htmlFor={secondLabelId}>{secondLabel}</label>
      </div>
    </div>
  )
}

export default Filter