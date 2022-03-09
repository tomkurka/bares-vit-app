import React from "react"
import BlogPostPreview from "../blogPostPreview/BlogPostPreview"

import "./blogPostsPreview.scss"

const BlogPostsPreview = ({ posts }) => {
  return (
    <div className="blog-posts-preview">
      {posts?.map(post => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogPostsPreview
