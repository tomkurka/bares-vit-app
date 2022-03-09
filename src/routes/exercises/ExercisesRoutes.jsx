import { Redirect, Route, Switch } from "react-router-dom"
import ExercisePage from "../../pages/exercises/ExercisePage"
import ExercisesPage from "../../pages/exercises/ExercisesPage"
import ROUTES from "../routes"

const ExerciseRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.EXERCISES.EXERCISE} component={ExercisePage} />
        <Route exact path={ROUTES.EXERCISES.EXERCISES} component={ExercisesPage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default ExerciseRoutes
