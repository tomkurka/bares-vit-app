import React from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { Switch } from "react-router-dom"
import QAndAPage from "../../pages/qAndA/QAndAPage"
import ROUTES from "../routes"

const QAndARoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.QANDA.QANDA} component={QAndAPage} />
      <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
    </Switch>
  )
}

export default QAndARoutes
