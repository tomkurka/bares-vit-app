import React, { useState } from "react"
import IntroductionBLock from "../../components/diet/introductionBlock/IntroductionBLock"
import {
  dietCovertToMessage,
  DIET_INITIAL_STATE,
  showSlide,
  updateDietData,
} from "./dietPageFunctions"
import emailjs from "emailjs-com"

import "./dietPage.scss"

const DietPage = () => {
  const [diet, setDiet] = useState(DIET_INITIAL_STATE)

  const handleChange = data => {
    setDiet(prevDiet => updateDietData(data, prevDiet))
  }

  const handleSubmit = async () => {
    const fullName = diet[7].value
    const content = dietCovertToMessage(diet)

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        { content, fullName },
        process.env.REACT_APP_EMAIL_JS_USER_ID
      )
      .then(response => {
        console.log("Send")
        alert("Dotazník byl odeslán úspěšně 😊. Brzy se ozvu na váš uvedený email.")
        setDiet(DIET_INITIAL_STATE)
      })
      .catch(err => {
        alert("Dotazník se nepodařilo odeslat 😥. Prosím zkuste to zachvíli znovu.")
      })
  }

  return (
    <div className="diet-page-container">
      <div className="diet-page">
        <div className="slides-container">
          <IntroductionBLock />
          {diet.map(slide => {
            return showSlide(handleChange, slide, handleSubmit)
          })}
        </div>
      </div>
    </div>
  )
}

export default DietPage
