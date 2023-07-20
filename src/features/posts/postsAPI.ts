// A mock function to mimic making an async request for data
import { PostContents } from "../../types"

export function fetchPosts(params?) {
  return new Promise<{ data: PostContents[] | [] }>((resolve) =>
    setTimeout(() => resolve({ data: PostContents | [] }), 500),
  )
}
