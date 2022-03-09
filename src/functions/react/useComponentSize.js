import { useState } from "react"
import useEventListener from "./useEventListener"

export default function useComponentSize() {
  const margin = 60

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth - margin,
    height: window.innerHeight,
  })

  useEventListener("resize", () => {
    let width = window.innerWidth - margin
    if (width >= 800) {
      width = 800
    }
    setWindowSize({ width, height: window.innerHeight })
  })

  return windowSize
}
