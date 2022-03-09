import React from "react"
import { Redirect, useLocation } from "react-router-dom"
import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import AboutRoutes from "./about/AboutRoutes"
import BlogRoutes from "./blog/BlogRoutes"
import ConditionsRoutes from "./conditions/ConditionsRoutes"
import ContactRoutes from "./contact/ContactRoutes"
import DietRoutes from "./diet/DietRoutes"
import HomeRoutes from "./home/HomeRoutes"
import NotFoundRoutes from "./notFound/NotFoundRoutes"
import QAndARoutes from "./qAndA/QAndARoutes"
import ROUTES from "./routes"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const AppRoutes = () => {
  const location = useLocation()

  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            <Route path={ROUTES.ABOUT.INITIAL} component={AboutRoutes} />
            <Route path={ROUTES.BLOG.INITIAL} component={BlogRoutes} />
            <Route path={ROUTES.CONTACT.INITIAL} component={ContactRoutes} />
            <Route path={ROUTES.DIET.INITIAL} component={DietRoutes} />
            <Route path={ROUTES.HOME.INITIAL} exact component={HomeRoutes} />
            <Route path={ROUTES.CONDITIONS.INITIAL} component={ConditionsRoutes} />
            <Route path={ROUTES.QANDA.INITIAL} component={QAndARoutes} />
            <Route path={ROUTES.NOT_FOUND.NOT_FOUND} component={NotFoundRoutes} />
            <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default AppRoutes
