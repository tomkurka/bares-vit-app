import React from "react"

import "./customText.scss"

export const CustomTextRoundHeader = ({ children, smallFontSize }) => {
  return <h2 className={`custom-text-round-header ${smallFontSize ? "small" : ""}`}>{children}</h2>
}
