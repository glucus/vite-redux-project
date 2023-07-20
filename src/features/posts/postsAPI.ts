// A mock function to mimic making an async request for data
import { PostContents } from "./helpers/types"
import { POSTS } from "./helpers/mocks"

export function fetchPosts() {
  return new Promise<{ data: PostContents[] | [] }>((resolve) =>
    setTimeout(() => resolve({ data: POSTS }), 500),
  )
}
