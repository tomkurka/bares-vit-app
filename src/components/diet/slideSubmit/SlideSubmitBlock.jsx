import React, { useState } from "react"
import LoadingSquareAnimation from "../../animation/loadingSquareAnimation/LoadingSquareAnimation"

import "./slideSubmitBLock.scss"

const SlideSubmitBlock = ({ handleSubmit }) => {
  const [send, setSend] = useState(false)

  if (send) {
    return <LoadingSquareAnimation label="Odesílání" />
  }

  return (
    <div
      onClick={() => {
        handleSubmit()
        setSend(true)
      }}
      className="slide slide-submit"
    >
      Odeslat
    </div>
  )
}

export default SlideSubmitBlock
