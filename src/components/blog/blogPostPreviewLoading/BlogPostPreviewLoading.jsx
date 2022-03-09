import React from "react"
import { withRouter } from "react-router-dom"

const BlogPostPreviewLoading = () => {
  return (
    <div className="blog-post-preview">
      <div className="preview-img-container loading-animation"></div>
      <div className="content-container">
        <div className="name loading-animation" style={{ color: "transparent" }}>
          This is tittle and it is going to be published
        </div>
        <div className="auth-date loading-animation" style={{ color: "transparent" }}>
          Author fullName | February 20, 2016
        </div>
        <div className="tags">
          <div className="tag loading-animation" style={{ color: "transparent" }}>
            Focus
          </div>
          <div className="tag loading-animation" style={{ color: "transparent" }}>
            Enjoy
          </div>
          <div className="tag loading-animation" style={{ color: "transparent" }}>
            Health
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(BlogPostPreviewLoading)
