import React from "react"
import { useSelector } from "react-redux"
import { selectPostsArraySorted } from "../../../redux/posts/postsSelectors"
import BlogPostsPreview from "../blogPostsPreview/BlogPostsPreview"
import BlogPostsPreviewLoading from "../blogPostsPreviewLoading/BlogPostsPreviewLoading"

import "./blogPostsContainerPreview.scss"

const BlogPostsContainerPreview = () => {
  const posts = useSelector(selectPostsArraySorted)

  return (
    <div className="blog-posts-container-preview">
      {posts && posts?.length > 0 ? (
        <BlogPostsPreview posts={posts} />
      ) : (
        <BlogPostsPreviewLoading />
      )}
    </div>
  )
}

export default BlogPostsContainerPreview
