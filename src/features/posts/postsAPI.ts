// A mock function to mimic making an async request for data
import { PostContents } from "./helpers/types"
import { AddPostFormState } from "./helpers/addPostForm"
import { POSTS } from "../../mocks/posts"
export const fetchPosts = () => {
  return new Promise<{ data: PostContents[] | [] }>((resolve) =>
    setTimeout(() => resolve({ data: POSTS }), 500),
  )
}

export const createPost = (post: AddPostFormState) => {
  // TODO: add api response type
  return new Promise<{ data: AddPostFormState }>((resolve) =>
    setTimeout(() => resolve({ data: post }), 500),
  )
}
