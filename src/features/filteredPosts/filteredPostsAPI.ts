// A mock function to mimic making an async request for data
import { PostContents } from "../posts/types"
import { POSTS } from "../posts/mocks"

export type FetchFilteredPostsParams = {
  filterBy: string
  query: string
}

const findFilteredPosts = ({ filterBy, query }: FetchFilteredPostsParams) => {
  // TODO: add search by author
  // return POSTS.filter((post) => post.message.includes(query))

  const regex = new RegExp(query, "i")

  return POSTS.filter((post) => regex.test(post.message))
}

export const fetchFilteredPosts = (params: FetchFilteredPostsParams) => {
  const filteredPosts = findFilteredPosts(params)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(`fetching posts filtered by ${params.filterBy} for query ${params.query}`)
    setTimeout(() => resolve({ data: filteredPosts }), 500)
  })
}
