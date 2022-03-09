import { Redirect, Route, Switch } from "react-router-dom"
import ContactPage from "../../pages/contact/ContactPage"
import ROUTES from "../routes"

const ContactRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.CONTACT.CONTACT} component={ContactPage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default ContactRoutes
