export const fetchPostLocal = ({ posts, newPost }) => {
  const newPosts = JSON.parse(JSON.stringify(posts))
  newPosts[newPost.id] = newPost
  return newPosts
}
