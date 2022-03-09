import React from "react"

import "./selectWithoutQuestionBlock.scss"

const SelectWithoutQuestionBlock = ({ data, value, onChange, id, subQuestion }) => {
  const changeHandler = option => {
    if (subQuestion) {
      onChange({
        value: option,
        data,
        motherId: subQuestion.motherId,
        id,
        isSubQuestion: true,
      })
    } else {
      onChange({ value: option, data, id })
    }
  }

  return (
    <div className="slide slide-select-without-question">
      {data.options.map((option, i) => (
        <div
          className={`option ${value.includes(option) ? "select" : ""}`}
          onClick={() => changeHandler(option)}
          key={i}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

export default SelectWithoutQuestionBlock
