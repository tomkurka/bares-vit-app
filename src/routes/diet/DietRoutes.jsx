import { Redirect, Route, Switch } from "react-router-dom"
import DietPage from "../../pages/diet/DietPage"
import ROUTES from "../routes"

const DietRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.DIET.DIET} component={DietPage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default DietRoutes
