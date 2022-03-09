import { Redirect, Route, Switch } from "react-router-dom"
import ConditionsBusinessPage from "../../pages/conditions/ConditionsBusinessPage"
import ConditionsOfUsePage from "../../pages/conditions/ConditionsOfUsePage"
import ROUTES from "../routes"

const ConditionsRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.CONDITIONS.BUSINESS} component={ConditionsBusinessPage} />
        <Route exact path={ROUTES.CONDITIONS.OF_USE} component={ConditionsOfUsePage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default ConditionsRoutes
