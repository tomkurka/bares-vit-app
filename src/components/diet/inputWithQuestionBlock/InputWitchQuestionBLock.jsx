import React from "react"

import "./inputWithQuestionBLock.scss"

const InputWitchQuestionBLock = ({ data, value, onChange, id, subQuestion }) => {
  const changeHandler = e => {
    if (subQuestion) {
      onChange({
        value: e.target.value,
        data,
        motherId: subQuestion.motherId,
        id,
        isSubQuestion: true,
      })
    } else {
      onChange({ value: e.target.value, data, id })
    }
  }

  return (
    <div className="slide slide-input-with-question">
      <div className="block-question">
        <div className="question">{data.question}</div>
        {data?.label && <div className="label">{data.label}</div>}
      </div>
      <div className="block-input">
        <input value={value} onChange={changeHandler} />
      </div>
    </div>
  )
}

export default InputWitchQuestionBLock
