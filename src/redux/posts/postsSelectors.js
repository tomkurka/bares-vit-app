import { createSelector } from "reselect"

const selectPostsState = state => state.posts

export const selectPosts = createSelector([selectPostsState], postsState => postsState.posts)

export const selectPostsArray = createSelector([selectPosts], posts => Object.values(posts || {}))

export const selectPostsArraySorted = createSelector([selectPostsArray], posts =>
  posts?.sort((a, b) => b.changedAt - a.changedAt || null)
)

export const selectPost = id => createSelector([selectPosts], posts => posts?.[id] || null)

export const selectPostsIsLoading = createSelector(
  [selectPostsState],
  postState => postState.isLoading
)
export const selectPostsInitialFetch = createSelector(
  [selectPostsState],
  postState => postState.initialFetch
)
