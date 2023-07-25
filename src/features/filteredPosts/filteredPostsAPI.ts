// A mock function to mimic making an async request for data
import { PostContents } from "../posts/types"
import { POSTS } from "../posts/mocks"

export type FetchFilteredPostsParams = {
  filterBy: string
  query: string
}

const findFilteredPosts = (params: FetchFilteredPostsParams) => {
  // TODO: add search by author
  return POSTS.filter((post) => /params.query/i.test(post.message));
}

export const fetchFilteredPosts = (params: FetchFilteredPostsParams) => {
  const filteredPosts = findFilteredPosts(params)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(`fetching posts filtered by ${params.filterBy}`)
    setTimeout(() => resolve({ data: filteredPosts }), 500)
  })
}
