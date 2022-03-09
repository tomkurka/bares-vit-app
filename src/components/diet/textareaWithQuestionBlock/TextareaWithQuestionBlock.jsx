import React from "react"

import "./textareaWithQuestionBlock.scss"

const TextareaWithQuestionBlock = ({ data, value, onChange, id, subQuestion }) => {
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
    <div className="slide slide-textarea-with-question">
      <div className="block-question">
        <div className="question">{data.question}</div>
        {data?.label && <div className="label">{data.label}</div>}
      </div>
      <div className="block-textarea">
        <textarea value={value} onChange={changeHandler}></textarea>
      </div>
    </div>
  )
}

export default TextareaWithQuestionBlock
