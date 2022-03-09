import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { share } from "../../functions/basic/share"
import { ICONShareOutline } from "../../icons/icons"
import { postsFetchPostsStart } from "../../redux/posts/postsActions"
import { selectPost, selectPostsArray } from "../../redux/posts/postsSelectors"
import INFORMATION_DATA from "../../data/informationData"

import "./blogPostPage.scss"

const BlogPostPage = () => {
  const params = useParams()

  const dispatch = useDispatch()
  const posts = useSelector(selectPostsArray)
  const post = useSelector(selectPost(params.postId))

  useEffect(() => {
    if (posts.length < 2) {
      dispatch(postsFetchPostsStart())
    }
    // eslint-disable-next-line
  }, [])

  if (!posts || !post) return <div></div>

  return (
    <div className="blog-post-page">
      <div className="content">
        <div className="post-top">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-tags">
            {post.tags.map((tag, i) => (
              <div className="post-tag" key={i}>
                {tag}
              </div>
            ))}
          </div>
          <div className="post-author-read">
            <div className="info">
              {post.author.fullName} | Čtení {post.readTime} min
            </div>
            <ICONShareOutline
              className="share-icon"
              onClick={() => share(`${INFORMATION_DATA.pageUrl}/blog/${post.id}`)}
            />
          </div>
          <img className="post-preview-img" src={post.previewImgLink} alt="preview-img" />
          <h4 className="post-subtitle">{post.subtitle}</h4>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        ></div>
      </div>
    </div>
  )
}

export default BlogPostPage
