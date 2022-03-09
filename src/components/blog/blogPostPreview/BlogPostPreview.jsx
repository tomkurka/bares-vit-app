import React from "react"
import { withRouter } from "react-router-dom"
import { ICONGalleryOutline } from "../../../icons/icons"
import { format } from "date-fns"

import "./blogPostPreview.scss"

const BlogPostPreview = ({ history, post }) => {
  return (
    <div className="blog-post-preview" onClick={() => history.push(`/blog/${post.id}`)}>
      <div className="preview-img-container">
        {post.previewImgLink ? (
          <img src={post.previewImgLink} className="preview-img" alt="img"></img>
        ) : (
          <ICONGalleryOutline className="preview-img-local" />
        )}
      </div>
      <div className="content-container">
        <div className="name">{post.title}</div>
        <div className="auth-date">
          {post.author.fullName} | {format(new Date(post.updatedAt), "LLLL dd yyyy")}
        </div>
        <div className="tags">
          {post.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withRouter(BlogPostPreview)
