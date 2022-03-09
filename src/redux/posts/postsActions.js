import PostsActions from "./postsTypes"

export const postsFetchPostsStart = payload => ({
  type: PostsActions.FETCH_POSTS_START,
  payload,
})
export const postsFetchPostsSuccess = ({ posts }) => ({
  type: PostsActions.FETCH_POSTS_SUCCESS,
  payload: { posts },
})
export const postsFetchPostsFailure = ({ error }) => ({
  type: PostsActions.FETCH_POSTS_FAILURE,
  payload: { error },
})

export const postsFetchPostStart = ({ postId }) => ({
  type: PostsActions.FETCH_POST_START,
  payload: { postId },
})
export const postsFetchPostSuccess = ({ post }) => ({
  type: PostsActions.FETCH_POST_SUCCESS,
  payload: { post },
})
export const postsFetchPostFailure = ({ error }) => ({
  type: PostsActions.FETCH_POST_FAILURE,
  payload: { error },
})
