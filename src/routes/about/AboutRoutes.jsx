import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import AboutPage from "../../pages/about/AboutPage"
import ROUTES from "../routes"

const AboutRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.ABOUT.ABOUT} component={AboutPage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default AboutRoutes
