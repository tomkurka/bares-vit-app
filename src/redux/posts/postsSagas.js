import { takeLatest, put, all, call } from "redux-saga/effects"
import {
  postsFetchPostFailure,
  postsFetchPostsFailure,
  postsFetchPostsSuccess,
  postsFetchPostSuccess,
} from "./postsActions"
import { firestore } from "../../firebase/firebaseUtils"
import PostsActions from "./postsTypes"

export function* fetchPostsAsync({ payload }) {
  try {
    const postRef = firestore.collection(`/publishedPosts`).orderBy("updatedAt", "desc")
    const snapshot = yield postRef.get()

    const posts = {}

    snapshot.forEach(snapshot => {
      const post = snapshot.data()
      posts[post.id] = post
    })

    yield put(postsFetchPostsSuccess({ posts }))
  } catch (error) {
    yield put(postsFetchPostsFailure(error.message))
  }
}

export function* fetchPostAsync({ payload: { postId } }) {
  try {
    const postRef = firestore.doc(`/publishedPosts/${postId}`)

    const snapshot = yield postRef.get()

    const post = snapshot.data()

    if (post) {
      yield put(postsFetchPostSuccess({ post }))
    } else {
      yield put(postsFetchPostFailure("Post was not found"))
    }
  } catch (error) {
    yield put(postsFetchPostFailure(error.message))
  }
}

export function* fetchPostsStart() {
  yield takeLatest(PostsActions.FETCH_POSTS_START, fetchPostsAsync)
}

export function* fetchPostStart() {
  yield takeLatest(PostsActions.FETCH_POST_START, fetchPostAsync)
}

export default function* postsSagas() {
  yield all([call(fetchPostsStart), call(fetchPostStart)])
}
