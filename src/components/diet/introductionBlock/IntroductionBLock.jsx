import React from "react"
import { ICONArrowDownBold } from "../../../icons/icons"
import { CustomTextRoundHeader } from "../../custom/customText/CustomText"

import "./introductionBlock.scss"

const IntroductionBLock = () => {
  return (
    <div className="slide slide-introduction">
      <CustomTextRoundHeader smallFontSize>Dotazník</CustomTextRoundHeader>
      <h3>Krátký dotazník pro odstartování naší spolupráce.</h3>
      <p>
        Jeho vyplnění mi pomůže lépe pochopit kým jste, a jak s vámi pracovat co nejefektivněji.
      </p>
      <ICONArrowDownBold className="arrow-down" />
    </div>
  )
}

export default IntroductionBLock
