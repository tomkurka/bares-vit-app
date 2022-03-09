import React, { useEffect } from "react"
import BlogPostsContainerPreview from "../../components/blog/blogPostsContainer/BlogPostsContainerPreview"
import { useDispatch, useSelector } from "react-redux"
import { selectPostsArray } from "../../redux/posts/postsSelectors"
import { postsFetchPostsStart } from "../../redux/posts/postsActions"

import "./blogPage.scss"

const BlogPage = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPostsArray)

  useEffect(() => {
    if (posts.length < 2) {
      dispatch(postsFetchPostsStart())
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="blog-page">
      <BlogPostsContainerPreview />
    </div>
  )
}

export default BlogPage
