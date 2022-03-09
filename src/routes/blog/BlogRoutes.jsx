import { Redirect, Route, Switch } from "react-router-dom"
import BlogPage from "../../pages/blog/BlogPage"
import BlogPostPage from "../../pages/blog/BlogPostPage"
import ROUTES from "../routes"

const BlogRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.BLOG.BLOG} component={BlogPage} />
        <Route exact path={ROUTES.BLOG.BLOG_POST} component={BlogPostPage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default BlogRoutes
