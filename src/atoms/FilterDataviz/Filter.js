import React, {useState} from 'react'
import './Filter.scss'

const Filter = ({firstButtonTitle, firstButtonLabelId, firstButtonLabel, firstButtonLabelId2, firstButtonLabel2, secondButtonTitle, secondButtonLabelId, secondButtonLabel, secondButtonLabelId2, secondButtonLabel2, functionName}) => {
  const [populationIsChecked, setPopulationIsChecked] = useState(true)
  const [populationIsCheckedSecondary, setPopulationIsCheckedSecondary] = useState(false)
  const [durationIsChecked, setDurationIsChecked] = useState(true)
  const [durationIsCheckedSecondary, setDurationIsCheckedSecondary] = useState(false)
  let olympicPeriod
  let duration

  const ChangeDurationValue = () => {
    durationIsCheckedSecondary ? duration = 14 : duration = 1
  }

  const ChangePopulationValue = () => {
    populationIsCheckedSecondary ? olympicPeriod = true : olympicPeriod = false
  }

  return (
    <div>
      <div className="filter">
        <h3 className="filter-title">{firstButtonTitle}</h3>
        <div className="filter-button">
          <input type="checkbox" className="UpdateButton" id={firstButtonLabelId} checked={durationIsChecked} onChange={() => { ChangePopulationValue(); functionName(1, olympicPeriod); setDurationIsCheckedSecondary(false); setDurationIsChecked(true)} }></input>
          <label htmlFor={firstButtonLabelId}>{firstButtonLabel}</label>
          <input type="checkbox" className="UpdateButton" id={firstButtonLabelId2} checked={durationIsCheckedSecondary} onChange={() => { ChangePopulationValue(); functionName(14, olympicPeriod); setDurationIsCheckedSecondary(true); setDurationIsChecked(false)} }></input>
          <label className="secondary" htmlFor={firstButtonLabelId2}>{firstButtonLabel2}</label>
        </div>
      </div>

      <div className="filter">
        <h3 className="filter-title">{secondButtonTitle}</h3>
        <div className="filter-button">
          <input type="checkbox" className="UpdateButton" id={secondButtonLabelId} checked={populationIsChecked} onChange={() => { ChangeDurationValue(); functionName(duration, false); setPopulationIsCheckedSecondary(false); setPopulationIsChecked(true)} }></input>
          <label htmlFor={secondButtonLabelId}>{secondButtonLabel}</label>
          <input type="checkbox" className="UpdateButton" id={secondButtonLabelId2} checked={populationIsCheckedSecondary} onChange={() => { ChangeDurationValue(); functionName(duration, true); setPopulationIsCheckedSecondary(true); setPopulationIsChecked(false)} }></input>
          <label className="secondary" htmlFor={secondButtonLabelId2}>{secondButtonLabel2}</label>
        </div>
      </div>
    </div>
  )
}

export default Filter