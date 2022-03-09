import React from "react"

import "./loadingSquareAnimation.scss"

const LoadingSquareAnimation = ({ label }) => {
  return (
    <div className="loading-square-animation">
      <h3>{label}</h3>
      <div className="section">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingSquareAnimation
