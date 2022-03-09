import React from "react"
import { useHistory } from "react-router-dom"
import ROUTES from "../../routes/routes"

import "./notFoundPage.scss"

const NotFoundPage = () => {
  const history = useHistory()

  return (
    <div className="not-found-page-container">
      <div className="not-found-page">
        <h2 className="text">Stránka nebyla nalezena</h2>
        <button onClick={() => history.push(ROUTES.HOME.HOME)} className="link">
          Vrátit se na domovskou stránku?
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
