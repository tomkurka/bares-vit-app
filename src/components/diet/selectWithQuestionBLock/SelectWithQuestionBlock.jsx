import React from "react"

import "./selectWithQuestionBlock.scss"

const SelectWithQuestionBlock = ({ data, value, onChange, id, subQuestion }) => {
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
    <div className="slide slide-select-with-question">
      <div className="block-question">
        <div className="question">{data.question}</div>
        {data?.label && <div className="label">{data.label}</div>}
      </div>
      <div className="block-options">
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
    </div>
  )
}

export default SelectWithQuestionBlock
