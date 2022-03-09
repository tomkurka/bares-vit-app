import PostsActions from "./postsTypes"
import { fetchPostLocal } from "./postsUtils"

const INITIAL_STATE = {
  initialFetch: false,
  isLoading: false,
  error: null,
  posts: null,
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActions.FETCH_POSTS_START:
    case PostsActions.FETCH_POST_START:
      return { ...state, isLoading: true, error: null }
    case PostsActions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        isLoading: false,
        error: null,
        initialFetch: true,
      }
    case PostsActions.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: fetchPostLocal({ posts: state.posts, newPost: action.payload.post }),
        isLoading: false,
        error: null,
      }

    case PostsActions.FETCH_POSTS_FAILURE:
    case PostsActions.FETCH_POST_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error }
    default:
      return state
  }
}

export default postsReducer
