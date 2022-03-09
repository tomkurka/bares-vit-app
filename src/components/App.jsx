import React from "react"

import ScrollToTop from "../functions/react/ScrollToTop"
import Navbar from "./navigation/navbar/Navbar"
import AppRoutes from "../routes/AppRoutes"

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
