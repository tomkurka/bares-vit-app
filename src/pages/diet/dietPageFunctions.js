import React from "react"
import InputWitchQuestionBLock from "../../components/diet/inputWithQuestionBlock/InputWitchQuestionBLock"
import SelectWithoutQuestionBlock from "../../components/diet/selectWithoutQuestionBLock/SelectWithoutQuestionBlock"
import SelectWithQuestionBlock from "../../components/diet/selectWithQuestionBLock/SelectWithQuestionBlock"
import SlideSubmitBlock from "../../components/diet/slideSubmit/SlideSubmitBlock"
import TextareaWithQuestionBlock from "../../components/diet/textareaWithQuestionBlock/TextareaWithQuestionBlock"
import { QUESTIONS, QUESTION_BLOCKS } from "../../data/dietQuestions"

export const DIET_INITIAL_STATE = [
  { id: 0, data: QUESTIONS.SEX, value: [], show: true },
  { id: 1, data: QUESTIONS.WEIGHT, value: "", show: false },
  { id: 2, data: QUESTIONS.HEIGHT, value: "", show: false },
  { id: 3, data: QUESTIONS.AGE, value: "", show: false },
  {
    id: 4,
    data: QUESTIONS.TARGET,
    value: [],
    show: false,
    subQuestions: [
      { id: 0, data: QUESTIONS.SPORT, value: "", show: false },
      { id: 1, data: QUESTIONS.TRAINING_TIME, value: [], show: false },
      { id: 2, data: QUESTIONS.ACTIVITY_TIME, value: [], show: false },
    ],
  },
  { id: 5, data: QUESTIONS.INTEREST, value: " ", show: false },
  { id: 6, data: QUESTIONS.MOTIVATION, value: " ", show: false },
  { id: 7, data: QUESTIONS.NAME, value: "", show: false },
  { id: 8, data: QUESTIONS.EMAIL, value: "", show: false },
  { id: 9, data: QUESTIONS.SUBMIT, value: "", show: false },
]

export const dietCovertToMessage = diet => {
  let dietContent = ""

  diet.forEach((d, i) => {
    if (d.subQuestions) {
      dietContent += `${i + 1}. ${d.data.question}: ${d?.value || "neuvedeno"}. <br>`
      d.subQuestions.forEach((d, j) => {
        console.log("ahoj")
        dietContent += `${i + 1}. ${j + 1}. ${d.data.question}: ${d?.value || "neuvedeno"}. <br>`
      })
    } else {
      if (d.data.question) {
        dietContent += `${i + 1}. ${d.data.question}: ${d?.value || "neuvedeno"}. <br>`
      }
    }
  })

  return dietContent
}

export const updateDietData = (data, prevDiet) => {
  const id = data.id
  const value = data.value
  const type = data.data.type
  const newDiet = JSON.parse(JSON.stringify(prevDiet))

  if (data.isSubQuestion) {
    const motherId = data.motherId

    if (
      type === QUESTION_BLOCKS.SELECT_WITH_QUESTION ||
      type === QUESTION_BLOCKS.SELECT_WITHOUT_QUESTION
    ) {
      if (data.data.moreOptions) {
        if (newDiet[motherId].subQuestions[id].value.includes(value)) {
          newDiet[motherId].subQuestions[id].value.splice(
            newDiet[motherId].subQuestions[id].value.indexOf(value),
            1
          )
        } else {
          newDiet[motherId].subQuestions[id].value = [
            ...newDiet[motherId].subQuestions[id].value,
            value,
          ]
        }
      } else {
        newDiet[motherId].subQuestions[id].value = [value]
      }
    } else {
      newDiet[motherId].subQuestions[id].value = value
    }
  } else {
    if (
      type === QUESTION_BLOCKS.SELECT_WITH_QUESTION ||
      type === QUESTION_BLOCKS.SELECT_WITHOUT_QUESTION
    ) {
      if (data.data.moreOptions) {
        if (newDiet[id].value.includes(value)) {
          newDiet[id].value.splice(newDiet[id].value.indexOf(value), 1)
        } else {
          newDiet[id].value = [...newDiet[id].value, value]
        }
      } else {
        newDiet[id].value = [value]
      }
    } else {
      newDiet[id].value = value
    }

    newDiet.forEach((diet, i) => {
      if (
        (typeof diet.value === "object" && diet.value.length > 0) ||
        (typeof diet.value !== "object" && diet.value)
      ) {
        if (i < id + 1 || newDiet[i].show) {
          newDiet[i + 1].show = true
        } else {
          newDiet[i + 1].show = false
        }
      } else {
        if (i + 1 < newDiet.length) {
          newDiet[i + 1].show = false
        }
      }
    })
  }
  return newDiet
}

export const showSlide = (handleChange, slide, handleSubmit) => {
  if (!slide.show || slide.hide) return <div key={Math.random()}></div>

  if (slide.subQuestions) {
    let results = []

    if (slide.id === 4) {
      results.push(showSpecificSlide(handleChange, slide))

      if (slide.value.includes("Připravit se na sezónu")) {
        results.push(
          showSpecificSlide(handleChange, slide.subQuestions[0], { motherId: slide.id, id: 0 })
        )
        results.push(
          showSpecificSlide(handleChange, slide.subQuestions[1], { motherId: slide.id, id: 1 })
        )
      }
      if (
        slide.subQuestions.length > 1 ||
        (!slide.value.includes("Připravit se na sezónu") && slide.subQuestions.length > 0)
      ) {
        results.push(
          showSpecificSlide(handleChange, slide.subQuestions[2], { motherId: slide.id, id: 2 })
        )
      }
    }

    return (
      <>
        {results.map((result, i) => (
          <React.Fragment key={i}>{result}</React.Fragment>
        ))}
      </>
    )
  } else {
    return showSpecificSlide(handleChange, slide, false, handleSubmit)
  }
}

export const showSpecificSlide = (handleChange, slide, subQuestions = false, handleSubmit) => {
  switch (slide.data.type) {
    case QUESTION_BLOCKS.SELECT_WITHOUT_QUESTION:
      return (
        <SelectWithoutQuestionBlock
          key={slide.id}
          id={slide.id}
          data={slide.data}
          value={slide.value}
          onChange={e => handleChange(e)}
          subQuestion={subQuestions}
        />
      )
    case QUESTION_BLOCKS.SELECT_WITH_QUESTION:
      return (
        <SelectWithQuestionBlock
          key={slide.id}
          id={slide.id}
          data={slide.data}
          value={slide.value}
          onChange={e => handleChange(e)}
          subQuestion={subQuestions}
        />
      )
    case QUESTION_BLOCKS.INPUT_WITH_QUESTION:
      return (
        <InputWitchQuestionBLock
          key={slide.id}
          id={slide.id}
          data={slide.data}
          value={slide.value}
          onChange={e => handleChange(e)}
          subQuestion={subQuestions}
        />
      )
    case QUESTION_BLOCKS.TEXTAREA_WITH_QUESTION:
      return (
        <TextareaWithQuestionBlock
          key={slide.id}
          id={slide.id}
          data={slide.data}
          value={slide.value}
          onChange={e => handleChange(e)}
          subQuestion={subQuestions}
        />
      )
    case QUESTION_BLOCKS.SUBMIT_BLOCK:
      return <SlideSubmitBlock handleSubmit={handleSubmit} key={slide.data.id} />
    default:
      return ""
  }
}
